import { GlowingStarsCard } from "@/components/shared/cards/glowing-starts-card/GlowingStars.Card";
import { cn } from "@/helpers/mergeClassName";

export interface BadgeDevToolsProps {
    iconName: string;
    className?: string;
}

export function BadgeDevTools({
    iconName,
    className
}: BadgeDevToolsProps): JSX.Element {
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
