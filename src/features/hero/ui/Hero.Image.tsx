import NextImage from "next/image";
import { useAnimation } from "@/shared/hooks/useAnimation";
import { AnimatedLine } from "@/shared/ui/shapes/AnimatedLine";
import { AnimatedShape } from "@/shared/ui/shapes/AnimatedShape";
import { HeroImageBackground } from "./Hero.Image.Background";

/**
 * Hero image component.
 *
 * @component
 *
 * @description
 * Renders the hero profile photo with animated decorative shapes and SVG lines layered around it.
 * Includes a floating amber circle and two morphing curved lines.
 *
 * @returns The hero image element with animated decorations
 */
export function HeroImage() {
    const { floatAnimation, transition } = useAnimation();

    const lines = [
        {
            label: "line1",
            className:
                "absolute bottom-1/4 -left-6 w-32 h-32 z-20 text-deco-green",
            animate: { rotate: [50, 50, 12] },
            pathD: "M10,50 Q30,40 50,50 T120,50"
        },
        {
            label: "line2",
            className:
                "absolute bottom-12 right-5 w-32 h-25 z-10 text-accent-30",
            animate: { rotate: [0, -20, 0] },
            pathD: "M10,50 Q30,40 50,50 T120,50"
        }
    ];

    return (
        <div className="relative flex justify-center w-full h-full">
            <HeroImageBackground className="w-full h-[60%] z-0 opacity-80" />

            <div className="relative w-88 h-128 lg:w-[24rem] lg:h-144 -top-8 z-10">
                <NextImage
                    fill
                    priority
                    alt="profile"
                    src="/hero/me.png"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>

            <AnimatedShape
                className="absolute top-0 left-0 w-24 h-24 lg:w-32 lg:h-32 rounded-full bg-linear-to-r from-accent-from to-accent-to"
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
