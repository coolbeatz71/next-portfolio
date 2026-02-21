import type { AnimatedShapeProps } from "./types";

/**
 * Animated shape component.
 *
 * @component
 *
 * @description
 * A plain div wrapper for decorative animated shapes (circles, blobs, etc.).
 * Animation is applied via CSS keyframes on the className.
 *
 * @param {string} [props.className] - Class names for sizing, color, positioning, and animation
 *
 * @returns The animated shape element
 */
export function AnimatedShape({ className }: AnimatedShapeProps) {
    return <div className={className} aria-hidden="true" />;
}
