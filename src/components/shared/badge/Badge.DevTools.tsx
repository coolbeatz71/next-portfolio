import GlowingStarsCard from "@/components/shared/cards/glowing-starts-card/GlowingStars.Card";
import { cn } from "@/helpers/mergeClassName";

export interface BadgeDevToolsProps {
    className?: string;
    iconName: string;
}
export default function BadgeDevTools({
    iconName,
    className
}: BadgeDevToolsProps): JSX.Element {
    return (
        <GlowingStarsCard className={cn("w-20 h-20", className)}>
            <div
                className={cn(
                    "bg-contain bg-no-repeat bg-center w-12 h-12",
                    iconName
                )}
            />
        </GlowingStarsCard>
    );
}
