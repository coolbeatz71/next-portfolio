import { AbstractBackground } from "./Abstract.Background";
import type { GridBackgroundProps } from "./types";

/**
 * Grid background component.
 *
 * @component
 *
 * @description
 * Renders a grid-pattern background that adapts to light and dark mode,
 * with a radial gradient mask that fades toward the edges.
 *
 * @param {GridBackgroundProps} props - Component props
 * @param {string} [props.className] - Additional class names for the container
 *
 * @returns The grid-pattern background element
 */
export function GridBackground({ className }: GridBackgroundProps) {
    return (
        <AbstractBackground
            className={className}
            backgroundClass="bg-grid-black dark:bg-grid-white z-0"
            maskImage="radial-gradient(ellipse_at_center,transparent_10%,black)"
        />
    );
}
