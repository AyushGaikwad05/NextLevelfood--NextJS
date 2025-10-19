# NextLevelfood - NextJS

**NextLevelfood** is a full-stack meal sharing application built with **Next.js**. It allows users to share their favorite meals, upload images, and view a list of meals contributed by others. The app uses **SQLite** as a lightweight database and features a clean, responsive design.

## Features

- Share your favorite meals with a short summary and detailed instructions.
- Upload meal images and save them to the server.
- Automatically generates unique slugs for each meal.
- View all meals with a simulated loading delay.
- Sanitizes user input to prevent XSS attacks.
- Simple and responsive UI for a smooth user experience.

## Tech Stack

- **Frontend:** Next.js 13 (App Router), React, CSS Modules  
- **Backend:** Server Actions in Next.js, Node.js  
- **Database:** SQLite (better-sqlite3)  
- **Libraries:** slugify, xss, fs (Node.js)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/AyushGaikwad05/NextLevelfood--NextJS.git

```
2. Install Dependencies

```bash
cd NextLevelfood
npm install

```
3. Run the development Server
``` bash
npm run dev

```
4. Open http://localhost:3000  in your browser.

## Usage

1. Navigate to the Share Meal page to add a new meal.

2. Fill in the form with meal details and upload an image.

3. After submission, your meal will appear in the meals list.
