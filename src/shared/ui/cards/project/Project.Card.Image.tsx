import Image from "next/image";
import { memo, useCallback } from "react";
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
function ProjectCardImageComponent({ src, alt, onClick, blurDataURL }: ProjectImageProps) {
    const handleKeyDown = useCallback(
        (e: React.KeyboardEvent) => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onClick();
            }
        },
        [onClick]
    );

    return (
        <div
            onClick={onClick}
            onKeyDown={handleKeyDown}
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
                className="object-cover duration-slow group-hover:scale-110"
            />
            <div
                className={`
                    absolute inset-0 bg-linear-to-t from-black/50 to-transparent
                    opacity-0 group-hover:opacity-100 duration-moderate
                `}
            />
        </div>
    );
}

export const ProjectCardImage = memo(ProjectCardImageComponent);
