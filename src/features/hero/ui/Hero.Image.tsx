import NextImage from "next/image";
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
 * Includes a floating amber circle and two rotating curved lines.
 * Animations use CSS keyframes to avoid pulling framer-motion into the initial bundle.
 *
 * @returns The hero image element with animated decorations
 */
const pathD = "M10,50 Q30,40 50,50 T120,50";

export function HeroImage() {
    return (
        <div className="relative flex justify-center w-full h-full">
            <HeroImageBackground className="w-full h-[60%] z-0 opacity-80" />

            <div className="relative w-88 h-128 lg:w-[24rem] lg:h-144 -top-8 z-10">
                <NextImage
                    fill
                    priority
                    alt="profile"
                    src="/hero/me.webp"
                    sizes="(max-width: 768px) 90vw, (max-width: 1024px) 45vw, 384px"
                />
            </div>

            <AnimatedShape className="absolute top-0 left-0 w-24 h-24 lg:w-32 lg:h-32 rounded-full bg-linear-to-r from-accent-from to-accent-to animate-[hero-float_3s_ease-in-out_infinite]" />

            <AnimatedLine
                pathD={pathD}
                className="absolute bottom-1/4 -left-6 w-32 h-32 z-20 text-deco-green animate-[hero-rotate1_4s_ease-in-out_infinite]"
            />

            <AnimatedLine
                pathD={pathD}
                className="absolute bottom-12 right-5 w-32 h-25 z-10 text-accent-30 animate-[hero-rotate2_4s_ease-in-out_infinite]"
            />
        </div>
    );
}
