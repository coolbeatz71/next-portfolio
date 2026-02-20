import type { ElementType, HTMLAttributes, ReactNode, SVGProps } from "react";

/**
 * @interface OutlineButton
 * @property {string} [borderRadius] - Border radius of the button; defaults to "1rem"
 * @property {ReactNode} children - Button label content
 * @property {ElementType} [as] - HTML element to render as; defaults to "button"
 * @property {string} [containerClassName] - Additional class names for the outer container
 * @property {string} [borderClassName] - Additional class names for the border element
 * @property {number} [duration] - Animation duration in milliseconds
 * @property {string} [className] - Additional class names for the button
 */
export interface OutlineButton extends HTMLAttributes<HTMLButtonElement> {
    borderRadius?: string;
    children: ReactNode;
    as?: ElementType;
    containerClassName?: string;
    borderClassName?: string;
    duration?: number;
    className?: string;
}

/**
 * @interface MovingBorderButton
 * @property {ElementType} [as] - HTML element to render as; defaults to "button"
 * @property {number} [duration] - Duration of the border animation in milliseconds
 * @property {string} [className] - Additional class names for the inner content area
 * @property {string} [borderRadius] - Border radius applied to the container; defaults to "0.65rem"
 * @property {string} [borderClassName] - Additional class names for the moving border element
 * @property {ReactNode} children - Button label content
 * @property {string} [containerClassName] - Additional class names for the outer container
 */
export interface MovingBorderButton extends HTMLAttributes<HTMLButtonElement> {
    as?: ElementType;
    duration?: number;
    className?: string;
    borderRadius?: string;
    borderClassName?: string;
    children: ReactNode;
    containerClassName?: string;
}

/**
 * @interface MovingBorderProps
 * @property {string} [rx] - SVG horizontal border radius (e.g. "30%")
 * @property {string} [ry] - SVG vertical border radius (e.g. "30%")
 * @property {number} [duration] - Time in milliseconds to complete one full loop; defaults to 2000
 * @property {ReactNode} children - The element that travels along the border
 */
export interface MovingBorderProps extends SVGProps<SVGSVGElement> {
    rx?: string;
    ry?: string;
    duration?: number;
    children: ReactNode;
}

/**
 * @interface GradientShineButtonProps
 * @property {string} [className] - Additional class names for the button
 * @property {ReactNode} children - Button label content
 */
export interface GradientShineButtonProps {
    className?: string;
    children: ReactNode;
}

/**
 * @interface LitUpBorderButtonProps
 * @property {string} [className] - Additional class names for the outer wrapper
 * @property {ReactNode} children - Button label content
 */
export interface LitUpBorderButtonProps {
    className?: string;
    children: ReactNode;
}
