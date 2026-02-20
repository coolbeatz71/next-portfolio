import type { MotionValue } from "motion/react";
import { IAboutMeImage } from "@/features/about/data/types";

/**
 * @interface ImageColumnProps
 * @property {string} columnKey - Unique key prefix used for React list keys
 * @property {number} imageHeight - Target display height of each image in pixels
 * @property {IAboutMeImage[]} images - Images to display in this column
 * @property {MotionValue<number>} translate - Motion value controlling vertical translation
 */
export interface ImageColumnProps {
    columnKey: string;
    imageHeight: number;
    images: IAboutMeImage[];
    translate: MotionValue<number>;
}

/**
 * @interface ParallaxScrollProps
 * @property {string} [className] - Additional class names for the outer container
 * @property {IAboutMeImage[]} images - Full list of images to randomly pick from
 */
export interface ParallaxScrollProps {
    className?: string;
    images: IAboutMeImage[];
}
