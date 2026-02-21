import { useState } from "react";
import { cn } from "@/shared/lib/cn";
import { Illustration } from "./GlowingStar.Illustration";
import type { GlowingStarsCardProps } from "./types";
/**
 * Glowing stars card component.
 *
 * @component
 *
 * @description
 * A card container that reveals an animated glowing stars illustration on mouse hover.
 * Adapts its gradient background to light and dark mode.
 *
 * @param {GlowingStarsCardProps} props - Component props
 * @param {ReactNode} [props.children] - Content rendered above the stars illustration
 * @param {string} [props.className] - Additional class names for the card container
 *
 * @returns The glowing stars card element
 */
export function GlowingStarsCard({
    className,
    children
}: GlowingStarsCardProps) {
    const [mouseEnter, setMouseEnter] = useState(false);

    return (
        <div
            onMouseEnter={() => {
                setMouseEnter(true);
            }}
            onMouseLeave={() => {
                setMouseEnter(false);
            }}
            className={cn(
                `bg-[linear-gradient(110deg,var(--color-card-gradient-start)_0.5%,var(--color-card-gradient-mid))]
                max-w-20 max-h-20 h-full w-full rounded-lg
                relative flex items-center justify-center`,
                className
            )}
        >
            <div className="absolute inset-0 z-0">
                <Illustration mouseEnter={mouseEnter} />
            </div>
            <div className="relative z-10 flex justify-center items-center">
                {children}
            </div>
        </div>
    );
}
