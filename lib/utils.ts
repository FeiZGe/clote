import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// แสดงวันที่ในรูปแบบ วัน เดือน ปี
export function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-EN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
