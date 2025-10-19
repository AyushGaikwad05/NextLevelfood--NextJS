import Link from "next/link";
import classes from './page.module.css';
import { getMeals } from '@/lib/meals';
import MealsGrid from './../meals/meals-grid.js';
import { Suspense } from "react";

async function Meals() {
  const meals = await getMeals(); // ✅ await the Promise
  return <MealsGrid meals={meals} />;
}

export default async function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious Meals, Created <span className={classes.highlight}>By You</span>
        </h1>
        <p>Choose your favourite Recipe and cook it yourself.</p>
        <p className={classes.cta}>
          <Link href='/meals/share'>Share Your Favourite Recipe</Link>
        </p>
      </header>

      <main className={classes.main}>
        <Suspense fallback={<p className={classes.loading}>Fetching meals from our menu cards .....🍔 </p>}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
