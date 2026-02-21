import NextImage from "next/image";
import type { ProjectImageSliderBackgroundProps } from "./types";

/**
 * Project image slider background component.
 *
 * @component
 *
 * @description
 * Renders the fixed blurred background layer of the image slider.
 * Displays the first project image behind a frosted glass overlay.
 * Border radius is removed when the slider is in zoomed mode.
 *
 * @param {ProjectImageSliderBackgroundProps} props - Component props
 * @param {string} props.src - Image source URL
 * @param {string} props.alt - Image alt text
 * @param {string} props.imagePlaceholder - Base64 blur placeholder for the image
 * @param {boolean} props.isZoomed - Whether the slider is currently in zoomed mode
 *
 * @returns The blurred background layer element
 */
export function ProjectImageSliderBackground({
    src,
    alt,
    isZoomed,
    imagePlaceholder
}: ProjectImageSliderBackgroundProps) {
    const roundedClass = isZoomed ? "rounded-none" : "rounded-lg";

    return (
        <div
            className={`absolute top-0 left-0 w-full h-full z-0 transition-all duration-moderate ${roundedClass}`}
        >
            <div
                className={`absolute z-20 w-full h-full bg-slider-overlay backdrop-blur-lg transition-all duration-moderate ${roundedClass}`}
            />
            <NextImage
                fill
                loading="lazy"
                placeholder="blur"
                src={src}
                alt={alt}
                blurDataURL={imagePlaceholder}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className={`object-cover transition-all duration-moderate ${roundedClass}`}
            />
        </div>
    );
}
