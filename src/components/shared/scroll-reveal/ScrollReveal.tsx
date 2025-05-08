import type { ReactNode } from "react";
import { cn } from "@/helpers/mergeClassName";
import { useScrollReveal } from "@/hooks/UseScrollReveal";

export interface ScrollRevealProps {
    children: ReactNode;
    className?: string;
    direction?: "up" | "down" | "left" | "right";
}

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
                    `transition-all duration-500 ease-in-out will-change-transform
                    ${isVisible ? "opacity-100 transform-none" : `opacity-0 ${directionClasses[direction]}`}
                    `
                )}
            >
                {children}
            </div>
        </div>
    );
}
