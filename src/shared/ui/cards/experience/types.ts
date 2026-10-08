import type { ReactNode } from "react";

/**
 * @interface ExperienceCardProps
 * @property {string} [summary] - Translated intro sentence about the company, omitted when the role has none
 * @property {string[]} details - Translated bullet points describing the work done in the role
 * @property {string} [headerClassName] - Additional Tailwind classes for the summary paragraph
 * @property {string} [bodyClassName] - Additional Tailwind classes for the bullet-point list
 */
export interface ExperienceCardProps {
    summary?: string;
    details: string[];
    headerClassName?: string;
    bodyClassName?: string;
}

/**
 * @interface ExperienceCardItemProps
 * @property {ReactNode} children - The text content of the experience bullet point
 */
export interface ExperienceCardItemProps {
    children: ReactNode;
}
