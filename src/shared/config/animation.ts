import type { MotionProps } from "motion/react";

/**
 * @interface AnimatedShapeProps
 * @property {string} [className] - Additional class names for the motion element
 */
export interface AnimatedShapeProps extends MotionProps {
    className?: string;
}

/**
 * @interface AnimatedLineProps
 * @property {string} pathD - SVG `d` attribute value for the path to animate
 */
export interface AnimatedLineProps extends AnimatedShapeProps {
    pathD: string;
}
