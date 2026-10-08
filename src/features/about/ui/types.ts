import type { ReactNode } from "react";

/**
 * @interface HighlightProps
 * @property {ReactNode} children - Content to render inside the highlight span
 */
export interface HighlightProps {
    children: ReactNode;
}

/**
 * @interface AboutMeRowProps
 * @property {string} label - Short uppercase label naming the row
 * @property {ReactNode} children - Row body content
 */
export interface AboutMeRowProps {
    label: string;
    children: ReactNode;
}
