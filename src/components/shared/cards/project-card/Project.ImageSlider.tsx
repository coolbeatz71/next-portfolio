import { AnimatePresence, motion } from "framer-motion";
import NextImage from "next/image";
import { useCallback, useMemo, useRef, useState } from "react";
import { useInterval, useMouse, useThrottle } from "react-use";

import type { Image } from "@/config/Projects";

export interface ProjectImageSliderProps {
    images: Image[];
}

export default function ProjectImageSlider({
    images
}: ProjectImageSliderProps): JSX.Element {
    const ref = useRef();
    const { elX: elementX } = useMouse(ref);
    const throttledElementX = useThrottle(elementX, 50);
    const [startX, setStartX] = useState<number | null>(null);

    const [sliderState, setSliderState] = useState({
        isPlaying: true,
        currentIndex: 0
    });
    const { isPlaying, currentIndex } = sliderState;

    const handleNext = useCallback(() => {
        setSliderState((state) => ({
            ...state,
            currentIndex: (state.currentIndex + 1) % images.length
        }));
    }, [images.length]);

    const handlePrev = useCallback(() => {
        setSliderState((state) => ({
            ...state,
            currentIndex:
                (state.currentIndex - 1 + images.length) % images.length
        }));
    }, [images.length]);

    useInterval(() => handleNext(), isPlaying ? 5000 : null);

    const togglePlayPause = () => {
        setSliderState((state) => ({
            ...state,
            isPlaying: !state.isPlaying
        }));
    };

    const handleMouseUp = () => {
        if (startX !== null) {
            const diffX = throttledElementX - startX;
            if (diffX > 50) handlePrev();
            else if (diffX < -50) handleNext();
            setStartX(null);
        }
    };
    const handleMouseDown = () => setStartX(throttledElementX);

    const slideStyles = useMemo(
        () =>
            images.map((_, index) => {
                const position =
                    (index - currentIndex + images.length) % images.length;
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
                        left +=
                            Math.max(baseWidth - i * widthReduction, minWidth) +
                            10;
                    }
                }

                return {
                    width,
                    left,
                    zIndex: images.length - position,
                    opacity: position < 4 ? 1 : 0
                };
            }),
        [currentIndex, images]
    );

    return (
        <div className="flex items-center justify-center">
            <div
                ref={ref}
                onMouseUp={handleMouseUp}
                onClick={togglePlayPause}
                onKeyDown={togglePlayPause}
                onMouseDown={handleMouseDown}
                className="relative w-full max-w-6xl px-4 py-16 pr-0 h-[350px] cursor-grab"
            >
                <div className="absolute top-0 left-0 w-full h-full z-0">
                    <div className="absolute z-20 w-full h-full bg-slate-700/[0.7] backdrop-blur-lg rounded-md" />
                    <NextImage
                        fill
                        src={images[0].src}
                        alt={images[0].alt}
                        className="object-cover rounded-md"
                        loading="lazy"
                    />
                </div>
                <div className="w-full h-full relative overflow-hidden">
                    <AnimatePresence initial={false}>
                        {images.map((img, index) => {
                            const style = slideStyles[index];
                            if (style.opacity === 0) return null;
                            return (
                                <motion.div
                                    key={img.alt}
                                    initial={false}
                                    animate={style}
                                    transition={{
                                        duration: 0.5,
                                        ease: "easeInOut"
                                    }}
                                    className="absolute top-0 overflow-hidden shadow-lg h-full"
                                >
                                    <NextImage
                                        fill
                                        src={img.src}
                                        alt={img.alt}
                                        className="object-contain"
                                        priority={index === currentIndex}
                                    />
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
