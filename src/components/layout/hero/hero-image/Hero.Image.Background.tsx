import { cn } from "@/helpers/mergeClassName";

interface HeroImageBackgroundProps {
    className?: string;
}

export function HeroImageBackground({ className }: HeroImageBackgroundProps) {
    return (
        <div
            className={cn(
                "absolute m-auto bg-gradient-to-br from-indigo-500/30 via-pink-500/60 to-indigo-500 rounded-md",
                className
            )}
            style={{
                transform: "perspective(18rem) rotateY(-12deg)"
            }}
        />
    );
}
