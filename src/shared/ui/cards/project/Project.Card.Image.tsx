import Image from "next/image";
import { memo, useCallback } from "react";
import { NO_PREVIEW_IMAGE } from "@/shared/config/project";
import { NoPreview } from "@/shared/ui/no-preview/NoPreview";
import type { ProjectImageProps } from "./types";

/**
 * Project card image component.
 *
 * @component
 *
 * @description
 * Renders the cover image at the top of a project card, in a fixed aspect ratio so every
 * card in a row shares the same media height. Projects without screenshots fall back to
 * the drawn placeholder instead of a stand in file. Clicking it opens the case study.
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
            className="relative w-full aspect-16/10 overflow-hidden rounded-lg cursor-pointer"
        >
            {src === NO_PREVIEW_IMAGE ? (
                <NoPreview />
            ) : (
                <Image
                    fill
                    alt={alt}
                    src={src}
                    quality={55}
                    placeholder="blur"
                    blurDataURL={blurDataURL}
                    sizes="(max-width: 992px) 100vw, 50vw"
                    className="object-cover object-top"
                />
            )}
        </div>
    );
}

export const ProjectCardImage = memo(ProjectCardImageComponent);
