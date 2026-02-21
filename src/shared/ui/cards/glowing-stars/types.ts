import type { ReactNode } from "react";

/**
 * @interface GlowProps
 * @property {number} delay - Animation delay in seconds before the glow appears
 */
export interface GlowProps {
    delay: number;
}

/**
 * @interface GlowingStarsCardProps
 * @property {string} [className] - Additional class names for the card container
 * @property {ReactNode} [children] - Content rendered above the stars illustration
 */
export interface GlowingStarsCardProps {
    className?: string;
    children?: ReactNode;
}

/**
 * @interface StarProps
 * @property {boolean} isGlowing - Whether the star is currently in its glowing state
 * @property {number} delay - Animation delay in seconds
 */
export interface StarProps {
    isGlowing: boolean;
    delay: number;
}

/**
 * @interface IllustrationProps
 * @property {boolean} mouseEnter - Whether the parent card is hovered
 * @property {number} [stars] - Total number of stars in the grid; defaults to 16
 * @property {number} [columns] - Number of grid columns; defaults to 4
 */
export interface IllustrationProps {
    stars?: number;
    columns?: number;
    mouseEnter: boolean;
}
