import { cubicBezier, useScroll, useSpring, useTransform } from "motion/react";
import { useEffect, useMemo, useState } from "react";
import { cn } from "@/shared/lib/cn";
import { getRandomImages } from "@/shared/lib/getRandomImages";
import { ImageColumn } from "./ParallaxScroll.ImageColumn";
import type { ParallaxScrollProps } from "./types";

/**
 * Parallax scroll component.
 *
 * @component
 *
 * @description
 * Displays a two-column image grid where each column scrolls at different speeds
 * based on the page scroll position. Images are randomly selected every 5 seconds
 * without repeating the previous set.
 *
 * @param {ParallaxScrollProps} props - Component props
 * @param {IAboutMeImage[]} props.images - Full list of images to randomly pick from
 * @param {string} [props.className] - Additional class names for the outer container
 *
 * @returns The parallax scroll image grid element
 */
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
