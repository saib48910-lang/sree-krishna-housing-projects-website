import { type ClassValue, clsx } from "clsx";

/**
 * Merges class names safely.
 * Since we are NOT using Tailwind, we just use clsx for conditional classes.
 * We keep the name 'cn' for consistency with common patterns.
 */
export function cn(...inputs: ClassValue[]) {
    return clsx(inputs);
}
