import { cn } from "@/shared/lib/cn";
import { GlowingStarsCard } from "@/shared/ui/cards/glowing-stars/GlowingStars.Card";

export interface BadgeDevToolsProps {
    iconName: string;
    className?: string;
}

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
