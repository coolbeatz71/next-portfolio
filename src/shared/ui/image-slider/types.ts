import type React from "react";
import { IImage } from "@/features/projects/data/types";

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
 * @property {number} zoomScale - Scale factor applied to the slide while zoomed
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
    zoomScale: number;
    mousePositionRef: React.RefObject<{ x: number; y: number }>;
    onClick: () => void;
    onMouseLeave: () => void;
}

/**
 * @interface ProjectImageSliderControlsProps
 * @property {IImage[]} slides - Slides the controls navigate through
 * @property {number} currentIndex - Index of the slide on display
 * @property {() => void} onPrevious - Handler to show the previous slide
 * @property {() => void} onNext - Handler to show the next slide
 * @property {(index: number) => void} onSelect - Handler to jump straight to a slide
 */
export interface ProjectImageSliderControlsProps {
    slides: IImage[];
    currentIndex: number;
    onPrevious: () => void;
    onNext: () => void;
    onSelect: (index: number) => void;
}
