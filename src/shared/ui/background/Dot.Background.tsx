import { memo } from "react";
import { AbstractBackground } from "./Abstract.Background";

export interface DotBackgroundProps {
    className?: string;
}

/**
 * Dot background component.
 *
 * @component
 *
 * @description
 * Renders a dot-pattern background that adapts to light and dark mode,
 * with a radial gradient mask that fades toward the edges.
 *
 * @param {DotBackgroundProps} props - Component props
 * @param {string} [props.className] - Additional class names for the container
 *
 * @returns The dot-pattern background element
 */
function DotBackgroundComponent({ className }: DotBackgroundProps) {
    return (
        <AbstractBackground
            className={className}
            backgroundClass="bg-dot-black dark:bg-dot-white"
            maskImage="radial-gradient(ellipse_at_center,transparent_20%,black)"
        />
    );
}

export const DotBackground = memo(DotBackgroundComponent);
