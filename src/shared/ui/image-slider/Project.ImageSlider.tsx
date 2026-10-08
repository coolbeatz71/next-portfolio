import { AnimatePresence } from "motion/react";
import type { MouseEvent } from "react";
import { useCallback, useMemo, useRef, useState } from "react";
import { useInterval, useMedia } from "react-use";
import {
    LAPTOP_DEVICE,
    MOBILE_DEVICE,
    TABLET_DEVICE,
    XS_MOBILE_DEVICE
} from "@/shared/config/style";
import { ProjectImageSliderBackground } from "./Project.ImageSlider.Background";
import { ProjectImageSliderControls } from "./Project.ImageSlider.Controls";
import { ProjectImageSliderSlide } from "./Project.ImageSlider.Slide";
import type { ProjectImageSliderProps } from "./types";

const AUTOPLAY_INTERVAL = 5000;
const SLIDE_MIN_WIDTH = 100;
const SLIDE_WIDTH_REDUCTION = 95;
const SLIDE_GUTTER = 10;
const MAX_VISIBLE_SLIDES = 4;
const ZOOM_SCALE = 1.5;

const SLIDE_BASE_WIDTH = {
    xsMobile: 240,
    mobile: 320,
    tablet: 420,
    laptop: 560,
    desktop: 720
};

/**
 * Project image slider component.
 *
 * @component
 *
 * @description
 * Renders a full-width animated carousel of a project's screenshots.
 * Supports auto-play, pause on hover, zoom on click, and a staggered card layout
 * whose card width adapts to the viewport. A control row below the stage exposes
 * a dot per slide, the slide counter, and previous and next arrows.
 *
 * @param {ProjectImageSliderProps} props - Component props
 * @param {IImage[]} props.images - List of project images; the first is used as the blurred background
 * @param {string} props.imagePlaceholder - Base64 blur placeholder for the background image
 *
 * @returns The project image slider element
 */
export function ProjectImageSlider({ images, imagePlaceholder }: ProjectImageSliderProps) {
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
    const isTablet = useMedia(TABLET_DEVICE, false);
    const isLaptop = useMedia(LAPTOP_DEVICE, false);

    const handleNext = useCallback(() => {
        setSliderState((state) => ({
            ...state,
            currentIndex: (state.currentIndex + 1) % imageWithoutPreview.length
        }));
    }, [imageWithoutPreview]);

    const handlePrevious = useCallback(() => {
        setSliderState((state) => ({
            ...state,
            currentIndex:
                (state.currentIndex - 1 + imageWithoutPreview.length) % imageWithoutPreview.length
        }));
    }, [imageWithoutPreview]);

    const handleSelect = useCallback((index: number) => {
        setSliderState((state) => ({ ...state, currentIndex: index }));
    }, []);

    useInterval(() => handleNext(), isPlaying && !isCursorInside ? AUTOPLAY_INTERVAL : null);

    const togglePlayPause = useCallback(() => {
        setSliderState((state) => ({
            ...state,
            isPlaying: !state.isPlaying
        }));
    }, []);

    const handleMouseMove = useCallback((e: MouseEvent<HTMLDivElement>) => {
        if (!isZoomedRef.current) return;

        const parentDiv = e.currentTarget.querySelector(".image-slider-container");
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

    const baseWidth = useMemo(() => {
        if (isXSMobile) return SLIDE_BASE_WIDTH.xsMobile;
        if (isMobile) return SLIDE_BASE_WIDTH.mobile;
        if (isTablet) return SLIDE_BASE_WIDTH.tablet;
        if (isLaptop) return SLIDE_BASE_WIDTH.laptop;
        return SLIDE_BASE_WIDTH.desktop;
    }, [isXSMobile, isMobile, isTablet, isLaptop]);

    const slideStyles = useMemo(
        () =>
            imageWithoutPreview.map((_, index) => {
                const position =
                    (index - currentIndex + imageWithoutPreview.length) %
                    imageWithoutPreview.length;
                const isActive = position === 0;

                const width = isActive
                    ? baseWidth
                    : Math.max(baseWidth - position * SLIDE_WIDTH_REDUCTION, SLIDE_MIN_WIDTH);
                let left = 0;

                if (position > 0) {
                    for (let i = 0; i < position; i++) {
                        left +=
                            Math.max(baseWidth - i * SLIDE_WIDTH_REDUCTION, SLIDE_MIN_WIDTH) +
                            SLIDE_GUTTER;
                    }
                }

                return {
                    width,
                    left,
                    zIndex: imageWithoutPreview.length - position,
                    opacity: position < MAX_VISIBLE_SLIDES ? 1 : 0
                };
            }),
        [currentIndex, imageWithoutPreview, baseWidth]
    );

    return (
        <div className="flex flex-col gap-6">
            <div className="flex items-center justify-center">
                <div
                    onClick={togglePlayPause}
                    onKeyDown={togglePlayPause}
                    onMouseMove={handleMouseMove}
                    className={`relative w-full h-64 md:h-80 lg:h-96 duration-moderate ${isZoomed ? "p-0" : "p-6 pr-0"}`}
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
                                        zoomScale={ZOOM_SCALE}
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

            <ProjectImageSliderControls
                onNext={handleNext}
                currentIndex={currentIndex}
                onSelect={handleSelect}
                slides={imageWithoutPreview}
                onPrevious={handlePrevious}
            />
        </div>
    );
}
