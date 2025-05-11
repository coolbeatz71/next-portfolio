import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges Tailwind CSS class names, resolving conflicting utility classes.
 *
 * @param inputs - One or more class values (strings, arrays, or conditional objects)
 * @returns A single merged class name string with conflicts resolved
 */
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}
