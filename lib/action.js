'use server';
import { redirect } from "next/dist/server/api-utils";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";
export async function shareMeal(formData) {
  const meal = {
    title: formData.get('title'),
    summary: formData.get('summary'),
    instructions: formData.get('instructions'),
    image: formData.get('image'), // this is a File object now
    creator: formData.get('name'),
    creator_email: formData.get('email')
  };

  await saveMeal(meal);
  revalidatePath('/meals'); // saveMeal can now handle File object
  redirect('/meals')
}
