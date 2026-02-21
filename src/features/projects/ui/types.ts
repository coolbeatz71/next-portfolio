import { IProjectByStack } from "../data/types";

/**
 * @interface ProjectSectionProps
 * @property {IProjectByStack[]} projects - List of projects grouped by tech stack to display
 */
export interface ProjectSectionProps {
    projects: IProjectByStack[];
}
