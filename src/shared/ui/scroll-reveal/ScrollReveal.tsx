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
export function ScrollReveal({
    children,
    className,
    direction = "up"
}: ScrollRevealProps) {
    const { ref, isVisible } = useScrollReveal();

    const directionClasses = {
        up: "translate-y-20",
        down: "-translate-y-20",
        left: "translate-x-20",
        right: "-translate-x-20"
    };

    return (
        <div ref={ref} className="relative overflow-hidden">
            <div
                className={cn(
                    className,
                    `transition-all duration-slow ease-in-out will-change-transform
                    ${isVisible ? "opacity-100 transform-none" : `opacity-0 ${directionClasses[direction]}`}
                    `
                )}
            >
                {children}
            </div>
        </div>
    );
}
