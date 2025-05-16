import Image from "next/image";
import type { ProjectImageProps } from "./types";

/**
 * Project card image component.
 *
 * @component
 *
 * @description
 * Renders the thumbnail image of a project card.
 * Shows a dark gradient overlay on hover and scales the image slightly.
 * Clicking the image triggers the parent modal.
 *
 * @param {ProjectImageProps} props - Component props
 * @param {string} props.src - Image source URL
 * @param {string} props.alt - Accessible alt text for the image
 * @param {string} props.blurDataURL - Base64 blur placeholder shown while the image loads
 * @param {() => void} props.onClick - Handler called when the image is clicked
 *
 * @returns The project card image element
 */
export function ProjectCardImage({
    src,
    alt,
    onClick,
    blurDataURL
}: ProjectImageProps) {
    return (
        <div
            onClick={onClick}
            onKeyDown={onClick}
            className="w-full md:w-1/2 h-56 md:h-auto relative overflow-hidden cursor-pointer"
        >
            <Image
                fill
                alt={alt}
                src={src}
                sizes="100%"
                quality={55}
                placeholder="blur"
                blurDataURL={blurDataURL}
                className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div
                className={`
                    absolute inset-0 bg-linear-to-t from-black/50 to-transparent
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300
                `}
            />
        </div>
    );
}
