import { IProjectByStack } from "@/features/projects/data/types";

/**
 * @interface ProjectCardProps
 * @property {number} index - Card position in the list, used for staggered animation
 * @property {IProjectByStack} project - Project data to display
 * @property {(index: number) => void} onOpen - Handler called with the card index when the card is activated
 */
export interface ProjectCardProps {
    index: number;
    project: IProjectByStack;
    onOpen: (index: number) => void;
}

/**
 * @interface ProjectContentProps
 * @property {() => void} onClick - Handler called when the card content area is clicked
 * @property {IProjectByStack} project - Project data containing name, stack, and links
 * @property {string} translatedDescription - Pre-translated description string
 */
export interface ProjectContentProps {
    onClick: () => void;
    project: IProjectByStack;
    translatedDescription: string;
}

/**
 * @interface ProjectImageProps
 * @property {string} src - Image source URL
 * @property {string} alt - Accessible alt text for the image
 * @property {string} blurDataURL - Base64 blur placeholder shown while the image loads
 * @property {() => void} onClick - Handler called when the image is clicked
 */
export interface ProjectImageProps {
    src: string;
    alt: string;
    blurDataURL: string;
    onClick: () => void;
}
