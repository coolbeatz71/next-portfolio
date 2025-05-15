import { cn } from "@/shared/lib/cn";
import { GlowingStarsCard } from "@/shared/ui/cards/glowing-stars/GlowingStars.Card";
import type { BadgeDevToolsProps } from "./types";

/**
 * Dev tools badge component.
 *
 * @component
 *
 * @description
 * Displays a tool or technology icon inside a glowing stars card.
 * The icon bounces on hover as a visual cue.
 *
 * @param {BadgeDevToolsProps} props - Component props
 * @param {string} props.iconName - CSS background-image class for the icon
 * @param {string} [props.className] - Additional class names for the card container
 *
 * @returns The dev tools badge element
 */
export function BadgeDevTools({ iconName, className }: BadgeDevToolsProps) {
    return (
        <GlowingStarsCard
            className={cn(
                "cursor-pointer w-20 h-20 shadow-2xl transform transition-transform duration-200 hover:scale-105 group",
                className
            )}
        >
            <div
                className={cn(
                    "bg-contain bg-no-repeat bg-center w-12 h-12 transition-transform group-hover:animate-bounce",
                    iconName
                )}
            />
        </GlowingStarsCard>
    );
}
