import { AnimatePresence, motion } from "framer-motion";
import NextImage from "next/image";
import { useCallback, useMemo, useState } from "react";
import { useInterval } from "react-use";

import type { Image } from "@/config/Projects";

export interface ProjectImageSliderProps {
    images: Image[];
    imagePlaceholder: string;
}

export default function ProjectImageSlider({
    images,
    imagePlaceholder
}: ProjectImageSliderProps): JSX.Element {
    const imageWithoutPreview = images.slice(1);

    const [sliderState, setSliderState] = useState({
        isPlaying: true,
        currentIndex: 0
    });
    const { isPlaying, currentIndex } = sliderState;

    const [isZoomed, setIsZoomed] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isCursorInside, setIsCursorInside] = useState(false);

    const handleNext = useCallback(() => {
        setSliderState((state) => ({
            ...state,
            currentIndex: (state.currentIndex + 1) % imageWithoutPreview.length
        }));
    }, [imageWithoutPreview]);

    useInterval(() => handleNext(), isPlaying && !isCursorInside ? 5000 : null);

    const togglePlayPause = () => {
        setSliderState((state) => ({
            ...state,
            isPlaying: !state.isPlaying
        }));
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const parentDiv = e.currentTarget.querySelector(
            ".image-slider-container"
        );
        if (!parentDiv) return;

        const rect = parentDiv.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;

        setMousePosition({ x, y });
    };

    const handleMouseEnter = (index: number) => {
        if (index === currentIndex) {
            setIsZoomed(true);
            setIsCursorInside(true);
        }
    };

    const handleMouseLeave = () => {
        setIsZoomed(false);
        setIsCursorInside(false);
    };

    const slideStyles = useMemo(
        () =>
            imageWithoutPreview.map((_, index) => {
                const position =
                    (index - currentIndex + imageWithoutPreview.length) %
                    imageWithoutPreview.length;
                const isActive = position === 0;
                const baseWidth = 520;
                const minWidth = 100;
                const widthReduction = 95;

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
                    zIndex: imageWithoutPreview.length - position,
                    opacity: position < 4 ? 1 : 0
                };
            }),
        [currentIndex, imageWithoutPreview]
    );

    return (
        <div className="flex items-center justify-center">
            <div
                onKeyDown={togglePlayPause}
                onClick={togglePlayPause}
                onMouseMove={handleMouseMove}
                className={`relative w-full max-w-6xl h-[380px] transition-all duration-300 ${isZoomed ? "p-0" : "px-4 py-4 pr-0"}`}
            >
                <div
                    className={`absolute top-0 left-0 w-full h-full z-0 transition-all duration-300 ${isZoomed ? "rounded-none" : "rounded"}`}
                >
                    <div
                        className={`absolute z-20 w-full h-full bg-slate-200/[0.7] dark:bg-slate-700/[0.7] backdrop-blur-lg transition-all duration-300 ${isZoomed ? "rounded-none" : "rounded"}`}
                    />
                    <NextImage
                        fill
                        src={images[0].src}
                        alt={images[0].alt}
                        className={`object-cover transition-all duration-300 ${isZoomed ? "rounded-none" : "rounded"}`}
                        blurDataURL={imagePlaceholder}
                        placeholder="blur"
                        loading="lazy"
                    />
                </div>
                <div className="image-slider-container w-full h-full relative overflow-hidden">
                    <AnimatePresence initial={false}>
                        {imageWithoutPreview.map((img, index) => {
                            const style = slideStyles[index];
                            if (style.opacity === 0) return null;

                            const isCurrent = index === currentIndex;

                            return (
                                <motion.div
                                    key={img.alt}
                                    initial={false}
                                    animate={{
                                        ...style,
                                        width:
                                            isCurrent && isZoomed
                                                ? "100%"
                                                : style.width,
                                        height: "100%",
                                        left:
                                            isCurrent && isZoomed
                                                ? 0
                                                : style.left
                                    }}
                                    transition={{
                                        duration: 0.2,
                                        ease: "easeInOut"
                                    }}
                                    className="absolute top-0 overflow-hidden"
                                    onClick={() => handleMouseEnter(index)}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <div
                                        className={`relative w-full h-full overflow-hidden ${isCurrent ? "cursor-zoom-in" : "cursor-grab"}`}
                                        style={{
                                            transform:
                                                isCurrent && isZoomed
                                                    ? `scale(1.5) translate(${(0.5 - mousePosition.x) * 100}%, ${(0.5 - mousePosition.y) * 100}%)`
                                                    : "scale(1) translate(0%, 0%)"
                                        }}
                                    >
                                        <NextImage
                                            fill
                                            src={img.src}
                                            alt={img.alt}
                                            className="object-contain"
                                            priority={isCurrent}
                                        />
                                    </div>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
