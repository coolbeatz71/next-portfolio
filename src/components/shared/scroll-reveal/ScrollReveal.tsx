import { useScrollReveal } from "@/hooks/UseScrollReveal";
import type { ReactNode } from "react";

export interface ScrollRevealProps {
    children: ReactNode;
    direction?: "up" | "down" | "left" | "right";
}

export function ScrollReveal({
    children,
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
        <div
            ref={ref}
            className={`transition-all duration-300 ease-in-out ${
                isVisible
                    ? "opacity-100 transform-none"
                    : `opacity-0 ${directionClasses[direction]}`
            }`}
        >
            {children}
        </div>
    );
}
