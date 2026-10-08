const DEFAULT_PAD_LENGTH = 2;
const PAD_CHARACTER = "0";

/**
 * Pads a number with leading zeros so ordinals line up visually.
 *
 * @param value - The numeric value to pad
 * @param length - Minimum length of the resulting string
 * @returns A zero-padded string representation of the value, e.g. `"03"`
 */
export const padNumber = (value: number, length: number = DEFAULT_PAD_LENGTH): string => {
    return String(value).padStart(length, PAD_CHARACTER);
};
