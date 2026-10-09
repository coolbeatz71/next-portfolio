import type { ReactNode } from "react";

/**
 * @interface ScrollRevealProps
 * @property {ReactNode} children - Content to animate on scroll
 * @property {string} [className] - Additional class names for the inner content wrapper
 * @property {"up" | "down" | "left" | "right"} [direction] - Slide-in direction; defaults to "up"
 */
export interface ScrollRevealProps {
    children: ReactNode;
    className?: string;
    direction?: "up" | "down" | "left" | "right";
}

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
