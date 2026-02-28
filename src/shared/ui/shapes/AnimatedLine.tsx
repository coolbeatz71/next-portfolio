import type { AnimatedLineProps } from "./types";

/**
 * Animated line component.
 *
 * @component
 *
 * @description
 * Renders an SVG path with a CSS rotation animation.
 * Animation is applied via className keyframes.
 *
 * @param {string} props.pathD - SVG path data string defining the line shape
 * @param {string} [props.className] - Class names for sizing, color, positioning, and animation
 *
 * @returns The animated SVG line element
 */
export function AnimatedLine({ className, pathD }: AnimatedLineProps) {
    return (
        <div className={className} aria-hidden="true">
            <svg viewBox="0 0 100 100" className="w-full h-full">
                <path d={pathD} fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
        </div>
    );
}
