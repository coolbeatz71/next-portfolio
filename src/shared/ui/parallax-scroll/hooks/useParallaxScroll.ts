import { cubicBezier, useScroll, useSpring, useTransform } from "motion/react";
import { useEffect, useMemo, useState } from "react";
import type { IAboutMeImage } from "@/features/about/data/types";
import { getRandomImages } from "@/shared/lib/getRandomImages";

const GRID_HEIGHT = 250;
const IMAGE_COUNT = 5;
const ROTATE_INTERVAL_MS = 5000;

/**
 * Drives the parallax scroll image grid state and animations.
 *
 * @param images - Full list of images to randomly pick from
 * @returns Column image splits, per-column motion translate values, and computed image height
 */
export function useParallaxScroll(images: IAboutMeImage[]) {
    const { scrollYProgress } = useScroll();
    const cubicEase = useMemo(() => cubicBezier(0.5, 0, 0.2, 1), []);

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
        getRandomImages(images, IMAGE_COUNT)
    );

    useEffect(() => {
        const interval = setInterval(() => {
            setSelectedImages((prevImages) =>
                getRandomImages(images, IMAGE_COUNT, prevImages)
            );
        }, ROTATE_INTERVAL_MS);

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

    const imageHeight = useMemo(() => GRID_HEIGHT / divider, [divider]);

    return {
        firstColumn,
        secondColumn,
        imageHeight,
        translateFirst,
        translateSecond
    };
}
