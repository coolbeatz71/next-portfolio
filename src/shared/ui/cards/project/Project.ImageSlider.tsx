import { AnimatePresence } from "motion/react";
import type { MouseEvent } from "react";
import { useCallback, useMemo, useRef, useState } from "react";
import { useInterval, useMedia } from "react-use";
import { MOBILE_DEVICE, XS_MOBILE_DEVICE } from "@/shared/config/style";
import { ProjectImageSliderBackground } from "./Project.ImageSlider.Background";
import { ProjectImageSliderSlide } from "./Project.ImageSlider.Slide";
import type { ProjectImageSliderProps } from "./types";

/**
 * Project image slider component.
 *
 * @component
 *
 * @description
 * Renders an animated image carousel for a project's screenshots.
 * Supports auto-play with a 5-second interval, pause on hover, zoom on click,
 * and staggered card layout with responsive sizing.
 *
 * @param {ProjectImageSliderProps} props - Component props
 * @param {IImage[]} props.images - List of project images; the first is used as the blurred background
 * @param {string} props.imagePlaceholder - Base64 blur placeholder for the background image
 *
 * @returns The project image slider element
 */
export function ProjectImageSlider({
    images,
    imagePlaceholder
}: ProjectImageSliderProps) {
    const imageWithoutPreview = useMemo(() => images.slice(1), [images]);

    const [sliderState, setSliderState] = useState({
        isPlaying: true,
        currentIndex: 0
    });
    const { isPlaying, currentIndex } = sliderState;

    const [isZoomed, setIsZoomed] = useState(false);
    const mousePositionRef = useRef({ x: 0, y: 0 });
    const [isCursorInside, setIsCursorInside] = useState(false);
    const isZoomedRef = useRef(isZoomed);
    isZoomedRef.current = isZoomed;

    const isMobile = useMedia(MOBILE_DEVICE, false);
    const isXSMobile = useMedia(XS_MOBILE_DEVICE, false);

    const handleNext = useCallback(() => {
        setSliderState((state) => ({
            ...state,
            currentIndex: (state.currentIndex + 1) % imageWithoutPreview.length
        }));
    }, [imageWithoutPreview]);

    useInterval(() => handleNext(), isPlaying && !isCursorInside ? 5000 : null);

    const togglePlayPause = useCallback(() => {
        setSliderState((state) => ({
            ...state,
            isPlaying: !state.isPlaying
        }));
    }, []);

    const handleMouseMove = useCallback((e: MouseEvent<HTMLDivElement>) => {
        if (!isZoomedRef.current) return;

        const parentDiv = e.currentTarget.querySelector(
            ".image-slider-container"
        );
        if (!parentDiv) return;

        const rect = parentDiv.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;

        mousePositionRef.current = { x, y };
    }, []);

    const currentIndexRef = useRef(currentIndex);
    currentIndexRef.current = currentIndex;

    const clickHandlersRef = useRef<Record<number, () => void>>({});

    const getClickHandler = useCallback((index: number) => {
        if (!clickHandlersRef.current[index]) {
            clickHandlersRef.current[index] = () => {
                if (index === currentIndexRef.current) {
                    setIsZoomed(true);
                    setIsCursorInside(true);
                }
            };
        }
        return clickHandlersRef.current[index];
    }, []);

    const handleMouseLeave = useCallback(() => {
        setIsZoomed(false);
        setIsCursorInside(false);
    }, []);

    const slideStyles = useMemo(
        () =>
            imageWithoutPreview.map((_, index) => {
                const position =
                    (index - currentIndex + imageWithoutPreview.length) %
                    imageWithoutPreview.length;
                const isActive = position === 0;
                const minWidth = 100;
                const widthReduction = 95;
                const baseWidth = isMobile ? 320 : isXSMobile ? 240 : 520;

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
        [currentIndex, imageWithoutPreview, isMobile, isXSMobile]
    );

    return (
        <div className="flex items-center justify-center">
            <div
                onKeyDown={togglePlayPause}
                onClick={togglePlayPause}
                onMouseMove={handleMouseMove}
                className={`relative w-full max-w-6xl h-56 md:h-72 duration-moderate ${isZoomed ? "p-0" : "px-4 py-4 pr-0"}`}
            >
                <ProjectImageSliderBackground
                    src={images[0].src}
                    alt={images[0].alt}
                    isZoomed={isZoomed}
                    imagePlaceholder={imagePlaceholder}
                />

                <div className="image-slider-container w-full h-full relative overflow-hidden">
                    <AnimatePresence initial={false}>
                        {imageWithoutPreview.map((img, index) => {
                            const style = slideStyles[index];
                            if (style.opacity === 0) return null;

                            const isCurrent = index === currentIndex;

                            return (
                                <ProjectImageSliderSlide
                                    key={img.alt}
                                    src={img.src}
                                    alt={img.alt}
                                    width={style.width}
                                    left={style.left}
                                    zIndex={style.zIndex}
                                    isCurrent={isCurrent}
                                    isZoomed={isCurrent ? isZoomed : false}
                                    mousePositionRef={mousePositionRef}
                                    onClick={getClickHandler(index)}
                                    onMouseLeave={handleMouseLeave}
                                />
                            );
                        })}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
