import { cn } from "@/helpers/mergeClassName";
import {
    cubicBezier,
    motion,
    useScroll,
    useSpring,
    useTransform
} from "framer-motion";
import NextImage from "next/image";

export interface ParallaxScrollProps {
    className?: string;
    images: {
        src: string;
        alt: string;
    }[];
}

export function ParallaxScroll({
    images,
    className
}: ParallaxScrollProps): JSX.Element {
    const { scrollYProgress } = useScroll();

    const smoothScroll = useSpring(scrollYProgress, {
        damping: 30,
        stiffness: 100,
        restDelta: 0.001
    });

    const cubicEase = cubicBezier(0.5, 0, 0.2, 1);

    const translateFirst = useTransform(smoothScroll, [0, 1], [0, -500], {
        ease: cubicEase
    });
    const translateSecond = useTransform(smoothScroll, [0, 1], [0, 500], {
        ease: cubicEase
    });

    const columns = Math.ceil(images.length / 2);
    const firstPart = images.slice(0, columns);
    const secondPart = images.slice(columns, 2 * columns);

    return (
        <div className={cn("w-full", className)}>
            <div className="grid grid-cols-2 items-start max-w-5xl mx-auto gap-4">
                <div className="grid gap-4">
                    {firstPart.map((img) => (
                        <motion.div
                            className="relative"
                            key={`grid-1 ${img.alt}`}
                            style={{ y: translateFirst }}
                        >
                            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-indigo-400 t0-violet-500 transform scale-[0.75] rounded-full blur-3xl" />
                            <div className="relative shadow-xl bg-indigo-500/[0.2] border border-gray-800/[0.1] p-1 overflow-hidden rounded-xl flex flex-col justify-end items-start">
                                <NextImage
                                    width={250}
                                    height={350}
                                    src={img.src}
                                    alt={img.alt}
                                    className="h-50 w-full object-cover object-left-top rounded-xl"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
                <div className="grid gap-4">
                    {secondPart.map((img) => (
                        <motion.div
                            className="relative"
                            key={`grid-2 ${img.alt}`}
                            style={{
                                y: translateSecond
                            }}
                        >
                            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-violet-400 to-indigo-500 transform scale-[0.75] rounded-full blur-3xl" />
                            <div className="relative shadow-xl bg-indigo-500/[0.2] border border-gray-800/[0.1] p-1 overflow-hidden rounded-xl flex flex-col justify-end items-start">
                                <NextImage
                                    width={250}
                                    height={350}
                                    src={img.src}
                                    alt={img.alt}
                                    className="h-50 w-full object-cover object-left-top rounded-lg"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
