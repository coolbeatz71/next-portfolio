import type React from "react";
import type { ReactNode } from "react";
import { IImage, IProjectByStack } from "@/features/projects/data/types";

/**
 * @interface LinkProps
 * @property {string} [href] - URL the link points to
 * @property {boolean} isVisible - Whether the link is rendered or hidden
 * @property {ReactNode} children - Link label content
 */
export interface LinkProps {
    href?: string;
    isVisible: boolean;
    children: ReactNode;
}

/**
 * @interface ProjectCardProps
 * @property {number} index - Card position in the list, used for staggered animation
 * @property {IProjectByStack} project - Project data to display
 */
export interface ProjectCardProps {
    index: number;
    project: IProjectByStack;
}

/**
 * @interface ProjectContentProps
 * @property {string} label - Text label for the live link button
 * @property {() => void} onClick - Handler called when the card content area is clicked
 * @property {IProjectByStack} project - Project data containing name, stack, and links
 * @property {string} translatedDescription - Pre-translated description string
 */
export interface ProjectContentProps {
    label: string;
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

/**
 * @interface ProjectModalProps
 * @property {IProjectByStack} project - Project data to render in the modal
 */
export interface ProjectModalProps {
    project: IProjectByStack;
}

/**
 * @interface ProjectModalLinksProps
 * @property {IProjectByStack} project - Project data containing link visibility flags and URLs
 */
export interface ProjectModalLinksProps {
    project: IProjectByStack;
}

/**
 * @interface ProjectImageSliderProps
 * @property {IImage[]} images - List of project images; the first is used as the blurred background
 * @property {string} imagePlaceholder - Base64 blur placeholder for the background image
 */
export interface ProjectImageSliderProps {
    images: IImage[];
    imagePlaceholder: string;
}

/**
 * @interface ProjectImageSliderBackgroundProps
 * @property {string} src - Image source URL
 * @property {string} alt - Image alt text
 * @property {string} imagePlaceholder - Base64 blur placeholder for the image
 * @property {boolean} isZoomed - Whether the slider is currently in zoomed mode
 */
export interface ProjectImageSliderBackgroundProps {
    src: string;
    alt: string;
    imagePlaceholder: string;
    isZoomed: boolean;
}

/**
 * @interface ProjectImageSliderSlideProps
 * @property {string} src - Image source URL
 * @property {string} alt - Image alt text
 * @property {string} width - CSS width of the slide
 * @property {string | number} left - CSS left position of the slide
 * @property {number} zIndex - Stack order of the slide
 * @property {boolean} isCurrent - Whether this slide is the active one
 * @property {boolean} isZoomed - Whether the slider is currently in zoomed mode
 * @property {React.RefObject<{ x: number; y: number }>} mousePositionRef - Ref to cursor position relative to the slide (0–1); only read by the active zoomed slide
 * @property {() => void} onClick - Handler called when the slide is clicked
 * @property {() => void} onMouseLeave - Handler called when the cursor leaves the slide
 */
export interface ProjectImageSliderSlideProps {
    src: string;
    alt: string;
    width: number;
    left: string | number;
    zIndex: number;
    isCurrent: boolean;
    isZoomed: boolean;
    mousePositionRef: React.RefObject<{ x: number; y: number }>;
    onClick: () => void;
    onMouseLeave: () => void;
}
