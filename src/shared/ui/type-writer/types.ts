/**
 * @interface TypeWriterProps
 * @property {string[]} words - List of words to cycle through
 * @property {string} [className] - Additional class names for the outer span
 */
export interface TypeWriterProps {
    words: string[];
    className?: string;
}
