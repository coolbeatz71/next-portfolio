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
        <div className="bg-gray-900 text-white flex items-center justify-center">
            <div className="w-full max-w-6xl p-4">
                <div className="relative h-[200px] overflow-hidden">
                    <AnimatePresence initial={false}>
                        {images.map((img, index) => (
                            <motion.div
                                key={img.alt}
                                className="absolute top-0 rounded-lg overflow-hidden shadow-lg"
                                style={{
                                    height: 200
                                }}
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
                                    className="w-full h-full object-cover"
                                />
                                {index === currentIndex && (
                                    <motion.div
                                        className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 20 }}
                                    >
                                        <p className="mt-2">
                                            {img.description}
                                        </p>
                                    </motion.div>
                                )}
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                <div className="flex justify-between items-center mt-8">
                    <button
                        type="button"
                        onClick={handlePrev}
                        className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                        aria-label="Previous img"
                    >
                        <FaChevronCircleLeft className="w-6 h-6" />
                    </button>
                    <button
                        type="button"
                        onClick={togglePlayPause}
                        className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                        aria-label={
                            isPlaying ? "Pause autoplay" : "Resume autoplay"
                        }
                    >
                        {isPlaying ? (
                            <FaPauseCircle className="w-6 h-6" />
                        ) : (
                            <FaPlayCircle className="w-6 h-6" />
                        )}
                    </button>
                    <button
                        type="button"
                        onClick={handleNext}
                        className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                        aria-label="Next img"
                    >
                        <FaChevronCircleRight className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </div>
    );
}
