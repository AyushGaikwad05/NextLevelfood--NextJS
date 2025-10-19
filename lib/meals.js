import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';
import fs from 'node:fs';

const db = sql('meals.db');

// Fetch all meals with a simulated delay
export async function getMeals() {
  // Simulate 1.5 second delay
  await new Promise(resolve => setTimeout(resolve, 1500));

  // Fetch data from DB
  return db.prepare('SELECT * FROM meals').all();
}

// Fetch a single meal by slug
export function getMeal(slug) {
  return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}

// Save a new meal into the database
export async function saveMeal(meal) {
  // Generate a unique slug
  meal.slug = slugify(meal.title, { lower: true, strict: true });

  // Check for duplicate slug and append a number if it exists
  let existing = db.prepare('SELECT slug FROM meals WHERE slug = ?').get(meal.slug);
  let counter = 1;
  while (existing) {
    meal.slug = `${slugify(meal.title, { lower: true, strict: true })}-${counter}`;
    existing = db.prepare('SELECT slug FROM meals WHERE slug = ?').get(meal.slug);
    counter++;
  }

  // Sanitize user input
  meal.instructions = xss(meal.instructions);

  // Handle image saving
  const extension = meal.image.name.split('.').pop();
  const fileName = `${meal.slug}.${extension}`;
  const filePath = `public/images/${fileName}`;

  // Convert uploaded file to buffer and save
  const bufferedImage = Buffer.from(await meal.image.arrayBuffer());
  await fs.promises.writeFile(filePath, bufferedImage);

  // Update image path for database
  meal.image = `/images/${fileName}`;

  // Insert meal data into database
  db.prepare(`
    INSERT INTO meals (title, summary, instructions, creator, creator_email, image, slug)
    VALUES (@title, @summary, @instructions, @creator, @creator_email, @image, @slug)
  `).run(meal);
}
