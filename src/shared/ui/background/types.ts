import type { SVGProps } from "react";

/**
 * @interface GridPatternProps
 * @property {number} width - Width of each grid cell in pixels
 * @property {number} height - Height of each grid cell in pixels
 * @property {string | number} x - X offset of the pattern origin
 * @property {string | number} y - Y offset of the pattern origin
 * @property {Array<[number, number]>} [squares] - Grid coordinates of highlighted squares
 */
export interface GridPatternProps extends SVGProps<SVGSVGElement> {
    width?: number;
    height?: number;
    x: string | number;
    y: string | number;
    squares?: Array<[number, number]>;
}

/**
 * @interface AbstractBackgroundProps
 * @property {string} maskImage - CSS mask-image value (e.g. radial-gradient)
 * @property {string} backgroundClass - Tailwind class for the background style
 * @property {string} [className] - Additional class names for the outer container
 */
export interface AbstractBackgroundProps {
    maskImage: string;
    className?: string;
    backgroundClass: string;
}

/**
 * @interface DotBackgroundProps
 * @property {string} [className] - Additional class names for the container
 */
export interface DotBackgroundProps {
    className?: string;
}

/**
 * @interface GridBackgroundProps
 * @property {string} [className] - Additional class names for the container
 */
export interface GridBackgroundProps {
    className?: string;
}

/**
 * @interface GridPatternBackgroundProps
 * @property {number} [size] - Grid cell size in pixels; defaults to 20
 */
export interface GridPatternBackgroundProps {
    size?: number;
}
