import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const fetchUrl = process.env.NODE_ENV === 'development'
  ? 'http://localhost:3000/api'
  : 'https://code-clause-internship-recipe-book-qmpw.vercel.app/api';