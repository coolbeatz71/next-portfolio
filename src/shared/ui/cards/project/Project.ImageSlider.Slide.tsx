import { domAnimation, LazyMotion } from "motion/react";
import * as m from "motion/react-m";
import NextImage from "next/image";
import { memo, useEffect, useRef } from "react";
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
function ProjectImageSliderSlideComponent({
    src,
    alt,
    width,
    left,
    zIndex,
    isCurrent,
    isZoomed,
    mousePositionRef,
    onClick,
    onMouseLeave
}: ProjectImageSliderSlideProps) {
    const innerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = innerRef.current;
        if (!el) return;

        if (!isCurrent || !isZoomed) {
            el.style.transform = "scale(1) translate(0%, 0%)";
            return;
        }

        let rafId: number;
        const update = () => {
            const { x, y } = mousePositionRef.current;
            el.style.transform = `scale(1.5) translate(${(0.5 - x) * 100}%, ${(0.5 - y) * 100}%)`;
            rafId = requestAnimationFrame(update);
        };
        rafId = requestAnimationFrame(update);

        return () => cancelAnimationFrame(rafId);
    }, [isCurrent, isZoomed, mousePositionRef]);

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
                    ref={innerRef}
                    className={`relative w-full h-full overflow-hidden ${isCurrent ? "cursor-zoom-in" : "cursor-grab"}`}
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

export const ProjectImageSliderSlide = memo(ProjectImageSliderSlideComponent);
