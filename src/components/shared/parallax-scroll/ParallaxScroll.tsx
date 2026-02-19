import { cubicBezier, useScroll, useSpring, useTransform } from "motion/react";
import { useEffect, useMemo, useState } from "react";
import type { AboutMeImage } from "@/config/AboutMe.Images";
import { getRandomImages } from "@/helpers/getRandomImages";
import { cn } from "@/helpers/mergeClassName";
import { ImageColumn } from "./ParallaxScroll.ImageColumn";

export interface ParallaxScrollProps {
    className?: string;
    images: AboutMeImage[];
}

export function ParallaxScroll({ images, className }: ParallaxScrollProps) {
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
                <ImageColumn
                    images={firstColumn}
                    columnKey="first-column"
                    imageHeight={imageHeight}
                    translate={translateFirst}
                />
                <ImageColumn
                    images={secondColumn}
                    columnKey="second-column"
                    imageHeight={imageHeight}
                    translate={translateSecond}
                />
            </div>
        </div>
    );
}
