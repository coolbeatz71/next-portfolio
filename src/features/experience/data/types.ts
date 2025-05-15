import type { ReactNode } from "react";

/**
 * @interface ITimelineEntry
 * @property {string} id - Unique identifier for the timeline entry
 * @property {string} title - Job title held at the company
 * @property {string} [href] - Optional URL linking to the company website
 * @property {string} location - City and country where the role was based
 * @property {string} subtitle - Company name and employment date range
 * @property {ReactNode} content - Rendered description of responsibilities and achievements
 */
export interface ITimelineEntry {
    id: string;
    title: string;
    href?: string;
    location: string;
    subtitle: string;
    content: ReactNode;
}
