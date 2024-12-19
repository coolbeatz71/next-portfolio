import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NextImage from "next/image";

import {
    FaPauseCircle,
    FaPlayCircle,
    FaChevronCircleLeft,
    FaChevronCircleRight
} from "react-icons/fa";

interface Image {
    alt: string;
    src: string;
    description: string;
}

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
        const baseWidth = 400; // Base width for the active img
        const minWidth = 100; // Minimum width for the last visible img
        const widthReduction = 75; // Width reduction for each step

        const width = isActive
            ? baseWidth
            : Math.max(baseWidth - position * widthReduction, minWidth);
        let left = 0;

        if (position > 0) {
            for (let i = 0; i < position; i++) {
                left += Math.max(baseWidth - i * widthReduction, minWidth) + 20; // 20px gap
            }
        }

        return {
            width,
            left,
            zIndex: images.length - position,
            opacity: position < 4 ? 1 : 0 // Show only 4 imgs
        };
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
            <div className="w-full max-w-6xl px-4">
                <div className="relative h-[600px] overflow-hidden">
                    <AnimatePresence initial={false}>
                        {images.map((img, index) => (
                            <motion.div
                                key={img.alt}
                                className="absolute top-0 rounded-3xl overflow-hidden shadow-lg"
                                style={{
                                    height: 600
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

                {/* Navigation and Control Buttons */}
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
