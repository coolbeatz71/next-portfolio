import { AnimatedLine } from "@/components/shared/shapes/AnimatedLine";
import { AnimatedShape } from "@/components/shared/shapes/AnimatedShape";
import { useAnimation } from "@/hooks/UseAnimation";
import NextImage from "next/image";
import { HeroImageBackground } from "./Hero.Image.Background";

export function HeroImage(): JSX.Element {
    const { floatAnimation, transition } = useAnimation();

    const lines = [
        {
            label: "line1",
            className:
                "absolute bottom-1/4 -left-6 w-32 h-32 z-20 text-green-300/70",
            animate: { rotate: [50, 50, 12] },
            pathD: "M10,50 Q30,40 50,50 T120,50"
        },
        {
            label: "line2",
            className:
                "absolute bottom-12 right-5 w-32 h-25 z-10 text-amber-500/30",
            animate: { rotate: [0, -20, 0] },
            pathD: "M10,50 Q30,40 50,50 T120,50"
        }
    ];

    return (
        <div className="relative flex justify-center w-full h-full">
            <HeroImageBackground className="w-[100%] h-[60%] z-0 opacity-80" />

            <div className="relative w-[22rem] h-[32rem] lg:w-[24rem] lg:h-[36rem] -top-8 z-10">
                <NextImage fill priority alt="profile" src="/hero/me.png" />
            </div>

            <AnimatedShape
                className="absolute top-0 left-0 w-24 h-24 lg:w-32 lg:h-32 rounded-full bg-gradient-to-r from-amber-500/80 to-orange-500/50"
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
