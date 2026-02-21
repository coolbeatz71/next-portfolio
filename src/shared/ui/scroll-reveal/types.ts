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
