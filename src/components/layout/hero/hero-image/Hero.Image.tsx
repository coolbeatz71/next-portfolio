import { AnimatedLine } from "@/components/shared/shapes/AnimatedLine";
import { AnimatedShape } from "@/components/shared/shapes/AnimatedShape";
import { cn } from "@/helpers/mergeClassName";
import { useAnimation } from "@/hooks/UseAnimation";
import NextImage from "next/image";
import { HeroImageBackground } from "./Hero.Image.Background";

export interface HeroImageProps {
    className?: string;
}

export default function HeroImage({ className }: HeroImageProps): JSX.Element {
    const { floatAnimation, transition } = useAnimation();

    const lines = [
        {
            label: "line1",
            className:
                "absolute bottom-1/4 -left-6 w-32 h-32 z-20 text-yellow-500/70",
            animate: { rotate: [50, 50, 12] },
            pathD: "M10,50 Q30,40 50,50 T120,50"
        },
        {
            label: "line2",
            className: "absolute -bottom-1/3 w-32 h-25 z-10 text-red-500/30",
            animate: { rotate: [0, -20, 0] },
            pathD: "M10,50 Q30,40 50,50 T120,50"
        }
    ];

    return (
        <div className="relative flex items-center justify-end">
            <HeroImageBackground className="w-[480px] h-[320px] right-0" />

            <div className={cn(className, "w-[480px] h-[480px] left-20")}>
                <NextImage
                    priority
                    quality={90}
                    width={380}
                    height={100}
                    alt="profile"
                    src="/hero/me.png"
                    className="w-auto h-auto"
                />
            </div>

            <AnimatedShape
                className="absolute top-0 left-0 w-32 h-32 rounded-full bg-gradient-to-r from-amber-500/80 to-orange-500/50"
                animate={floatAnimation}
                transition={transition}
            />

            {lines.map((line) => (
                <AnimatedLine
                    key={line.label}
                    className={line.className}
                    animate={line.animate}
                    transition={transition}
                    pathD={line.pathD}
                />
            ))}
        </div>
    );
}
