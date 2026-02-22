import { domAnimation, LazyMotion } from "motion/react";
import * as m from "motion/react-m";
import NextImage from "next/image";
import type { ProjectImageSliderSlideProps } from "./types";

/**
 * Project image slider slide component.
 *
 * @component
 *
 * @description
 * Renders a single animated slide card inside the project image slider.
 * The active slide supports zoom-on-click with cursor-tracked panning.
 * Non-active slides are stacked behind with reduced width.
 *
 * @param {ProjectImageSliderSlideProps} props - Component props
 *
 * @returns The animated slide card element
 */
export function ProjectImageSliderSlide({
    src,
    alt,
    width,
    left,
    zIndex,
    isCurrent,
    isZoomed,
    mousePosition,
    onClick,
    onMouseLeave
}: ProjectImageSliderSlideProps) {
    return (
        <LazyMotion features={domAnimation}>
            <m.div
                key={alt}
                initial={false}
                animate={{
                    width: isCurrent && isZoomed ? "100%" : width,
                    height: "100%",
                    left: isCurrent && isZoomed ? 0 : left,
                    zIndex
                }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="absolute top-0 overflow-hidden"
                onClick={onClick}
                onMouseLeave={onMouseLeave}
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
                        src={src}
                        alt={alt}
                        priority={isCurrent}
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>
            </m.div>
        </LazyMotion>
    );
}
