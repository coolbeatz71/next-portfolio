import { memo } from "react";
import { cn } from "@/shared/lib/cn";
import type { AbstractBackgroundProps } from "./types";

/**
 * Abstract background component.
 *
 * @component
 *
 * @description
 * Renders a full-width decorative background with a CSS mask and a custom background class.
 *
 * @param {AbstractBackgroundProps} props - Component props
 * @param {string} props.maskImage - CSS mask-image value (e.g. radial-gradient)
 * @param {string} props.backgroundClass - Tailwind class for the background style
 * @param {string} [props.className] - Additional class names for the outer container
 *
 * @returns The abstract background element
 */
function AbstractBackgroundComponent({
    maskImage,
    backgroundClass,
    className = "h-200"
}: AbstractBackgroundProps) {
    return (
        <div
            className={cn(
                "absolute left-0 right-0 w-full flex items-center justify-center",
                backgroundClass,
                className
            )}
        >
            <div
                className={cn(
                    "absolute pointer-events-none inset-0 flex items-center justify-center",
                    `[mask-image:${maskImage}]`
                )}
            />
        </div>
    );
}

export const AbstractBackground = memo(AbstractBackgroundComponent);
