import { cn } from "@/helpers/mergeClassName";

interface HeroImageBackgroundProps {
    className?: string;
}

export function HeroImageBackground({ className }: HeroImageBackgroundProps) {
    return (
        <div
            className={cn(
                "absolute m-auto bg-gradient-to-br from-indigo-500 via-rose-700 to-indigo-700 rounded-md opacity-20",
                className
            )}
            style={{
                transform: "perspective(18rem) rotateY(-12deg)"
            }}
        />
    );
}
