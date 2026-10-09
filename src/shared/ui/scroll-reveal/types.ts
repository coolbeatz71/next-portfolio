import type { ReactNode } from "react";

/**
 * @interface RevealProps
 * @property {ReactNode} children - Content revealed when it scrolls into view
 * @property {number} [index] - Position in a list, used to stagger the reveal
 * @property {string} [className] - Additional class names for the wrapper
 */
export interface RevealProps {
    children: ReactNode;
    index?: number;
    className?: string;
}
