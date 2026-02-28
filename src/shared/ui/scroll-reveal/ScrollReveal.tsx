import { memo } from "react";
import { useScrollReveal } from "@/shared/hooks/useScrollReveal";
import { cn } from "@/shared/lib/cn";
import type { ScrollRevealProps } from "./types";

/**
 * Scroll reveal component.
 *
 * @component
 *
 * @description
 * Wraps children in a visibility-triggered reveal animation.
 * The content fades and slides in from the specified direction when it enters the viewport.
 *
 * @param {ScrollRevealProps} props - Component props
 * @param {ReactNode} props.children - Content to animate on scroll
 * @param {"up" | "down" | "left" | "right"} [props.direction] - Slide-in direction; defaults to "up"
 * @param {string} [props.className] - Additional class names for the inner content wrapper
 *
 * @returns The scroll reveal wrapper element
 */
const directionClasses: Record<string, string> = {
    up: "translate-y-20",
    down: "-translate-y-20",
    left: "translate-x-20",
    right: "-translate-x-20"
};

function ScrollRevealComponent({ children, className, direction = "up" }: ScrollRevealProps) {
    const { ref, isVisible } = useScrollReveal();
    const visibilityClass = isVisible
        ? "opacity-100 transform-none"
        : `opacity-0 ${directionClasses[direction]}`;

    return (
        <div ref={ref} className="relative overflow-hidden">
            <div
                className={cn(
                    className,
                    "duration-slow ease-in-out will-change-transform",
                    visibilityClass
                )}
            >
                {children}
            </div>
        </div>
    );
}

export const ScrollReveal = memo(ScrollRevealComponent);
