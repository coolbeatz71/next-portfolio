import type { ReactNode } from "react";

/**
 * @interface BadgeProps
 * @property {ReactNode} icon - Icon element displayed on the left
 * @property {string} badgeText - Label text shown next to the count
 * @property {string} [className] - Additional class names for the container
 * @property {string} [endCountText] - Optional text appended after the count (e.g. "k")
 * @property {number} endCountNumber - The final number for the count-up animation
 */
export interface BadgeProps {
    icon: ReactNode;
    badgeText: string;
    className?: string;
    endCountText?: string;
    endCountNumber: number;
}

/**
 * @interface BadgeDevToolsProps
 * @property {string} iconName - CSS background-image class for the icon
 * @property {string} [className] - Additional class names for the card container
 */
export interface BadgeDevToolsProps {
    iconName: string;
    className?: string;
}

/**
 * @interface BadgeSpanProps
 * @property {string} text - The label text to display inside the badge
 */
export interface BadgeSpanProps {
    text: string;
}
