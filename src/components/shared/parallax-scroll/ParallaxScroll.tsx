import type { AboutMeImage } from "@/config/AboutMe.Images";
import { getRandomImages } from "@/helpers/getRandomImages";
import { cn } from "@/helpers/mergeClassName";
import {
    cubicBezier,
    motion,
    useScroll,
    useSpring,
    useTransform
} from "framer-motion";
import NextImage from "next/image";
import { useEffect, useMemo, useState } from "react";

export interface ParallaxScrollProps {
    className?: string;
    images: AboutMeImage[];
}

export default function ParallaxScroll({
    images,
    className
}: ParallaxScrollProps): JSX.Element {
    const { scrollYProgress } = useScroll();

    const cubicEase = cubicBezier(0.5, 0, 0.2, 1);

    const smoothScroll = useSpring(scrollYProgress, {
        damping: 30,
        stiffness: 100,
        restDelta: 0.001
    });

    const translateFirst = useTransform(smoothScroll, [0, 1], [0, -600], {
        ease: cubicEase
    });
    const translateSecond = useTransform(smoothScroll, [0, 1], [0, 600], {
        ease: cubicEase
    });

    const [selectedImages, setSelectedImages] = useState(() =>
        getRandomImages(images, 5)
    );

    useEffect(() => {
        const interval = setInterval(() => {
            setSelectedImages((prevImages) =>
                getRandomImages(images, 5, prevImages)
            );
        }, 5000);

        return () => clearInterval(interval);
    }, [images]);

    const divider = useMemo(
        () => Math.ceil(selectedImages.length / 2),
        [selectedImages]
    );
    const firstColumn = useMemo(
        () => selectedImages.slice(0, divider),
        [selectedImages, divider]
    );
    const secondColumn = useMemo(
        () => selectedImages.slice(divider),
        [selectedImages, divider]
    );

    const gridHeight = 250;
    const imageHeight = gridHeight / divider;

    return (
        <div className={cn("w-full pt-12", className)}>
            <div className="grid grid-cols-2 items-start max-w-5xl mx-auto gap-2 md:gap-4">
                <div className="grid gap-2 md:gap-4">
                    {firstColumn.map((img) => (
                        <motion.div
                            className="relative"
                            key={`grid-1 ${img.alt}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                            style={{ y: translateFirst }}
                        >
                            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-indigo-400 to-indigo-900 transform scale-[0.75] rounded-full blur-2xl" />
                            <div className="h-[14rem] md:h-[20rem] lg:h-[16rem] 2xl:h-[22rem] relative shadow-xl bg-indigo-500/[0.2] border border-gray-800/[0.1] p-1 overflow-hidden rounded-lg flex flex-col justify-end items-start">
                                <NextImage
                                    src={img.src}
                                    alt={img.alt}
                                    width={360}
                                    height={imageHeight}
                                    className="h-full object-cover object-left-top rounded-lg"
                                    blurDataURL={img.blurData}
                                    placeholder="blur"
                                    loading="lazy"
                                    quality={90}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
                <div className="grid gap-2 md:gap-4">
                    {secondColumn.map((img) => (
                        <motion.div
                            className="relative"
                            key={`grid-2 ${img.alt}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                            style={{ y: translateSecond }}
                        >
                            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-indigo-400 to-indigo-900 transform scale-[0.75] rounded-full blur-2xl" />
                            <div className="h-[14rem] md:h-[20rem] lg:h-[16rem] 2xl:h-[22rem] relative shadow-xl bg-indigo-500/[0.2] border border-gray-800/[0.1] p-1 overflow-hidden rounded-lg flex flex-col justify-end items-start">
                                <NextImage
                                    src={img.src}
                                    alt={img.alt}
                                    width={360}
                                    height={imageHeight}
                                    className="h-full object-cover object-left-top rounded-lg"
                                    blurDataURL={img.blurData}
                                    placeholder="blur"
                                    loading="lazy"
                                    quality={90}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
