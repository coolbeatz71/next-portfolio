import { AnimatePresence, motion } from "framer-motion";
import NextImage from "next/image";
import { useCallback, useEffect, useState } from "react";

import type { Image } from "@/config/Projects";

import {
    FaChevronCircleLeft,
    FaChevronCircleRight,
    FaPauseCircle,
    FaPlayCircle
} from "react-icons/fa";

export interface ProjectImageSliderProps {
    images: Image[];
}

export default function ProjectImageSlider({
    images
}: ProjectImageSliderProps): JSX.Element {
    const [isPlaying, setIsPlaying] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    }, [images.length]);

    const handlePrev = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    }, [images.length]);

    const togglePlayPause = () => {
        setIsPlaying((prev) => !prev);
    };

    useEffect(() => {
        let intervalId: NodeJS.Timeout | null = null;
        if (isPlaying) {
            intervalId = setInterval(() => {
                handleNext();
            }, 3000);
        }
        return () => {
            if (intervalId) clearInterval(intervalId);
        };
    }, [isPlaying, handleNext]);

    const getSlideStyle = (index: number) => {
        const position = (index - currentIndex + images.length) % images.length;
        const isActive = position === 0;
        const baseWidth = 400;
        const minWidth = 100;
        const widthReduction = 75;

        const width = isActive
            ? baseWidth
            : Math.max(baseWidth - position * widthReduction, minWidth);
        let left = 0;

        if (position > 0) {
            for (let i = 0; i < position; i++) {
                left += Math.max(baseWidth - i * widthReduction, minWidth) + 10;
            }
        }

        return {
            width,
            left,
            zIndex: images.length - position,
            opacity: position < 4 ? 1 : 0
        };
    };

    return (
        <div className="flex items-center justify-center">
            <div className="relative w-full max-w-6xl px-4 py-16 pr-0 h-[350px]">
                <div className="absolute top-0 left-0 w-full h-full z-0">
                    <div className="absolute z-20 w-full h-full bg-slate-700/[0.7] backdrop-blur-lg rounded-md" />
                    <NextImage
                        fill
                        src={images[0].src}
                        alt={images[0].alt}
                        className="object-cover rounded-md"
                    />
                </div>
                <div className="w-full h-full relative overflow-hidden">
                    <AnimatePresence initial={false}>
                        {images.map((img, index) => (
                            <motion.div
                                key={img.alt}
                                className="absolute top-0 overflow-hidden shadow-lg h-full"
                                initial={false}
                                animate={getSlideStyle(index)}
                                transition={{
                                    duration: 0.5,
                                    ease: "easeInOut"
                                }}
                            >
                                <NextImage
                                    fill
                                    src={img.src}
                                    alt={img.alt}
                                    className="object-contain"
                                />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
