import { cn } from "@/helpers/mergeClassName";
import { type ReactNode, useState } from "react";
import { Illustration } from "./GlowingStar.Illustration";

export interface GlowingStarsCardProps {
    className?: string;
    children?: ReactNode;
}
export function GlowingStarsCard({
    className,
    children
}: GlowingStarsCardProps): JSX.Element {
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
                `bg-[linear-gradient(110deg,#fff_0.5%,#ddd)]
                dark:bg-[linear-gradient(110deg,#444_0.5%,#333)] 
                max-w-[5rem] max-h-[5rem] h-full w-full rounded-lg 
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
