import { type ClassValue, clsx } from 'clsx';

import { twMerge } from 'tailwind-merge';
import { cache } from "react";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const url = process.env.NEXT_PUBLIC_API_URL;

export const getProjects = cache(async () => {
  const res = await fetch(`${url}/api/Projects`);
  if (!res.ok) throw new Error("Failed to fetch data");
  return res.json();
});

export * from './fonts';
export * from './styles';
