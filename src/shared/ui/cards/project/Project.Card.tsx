import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Reveal } from "@/shared/ui/scroll-reveal/Reveal";
import { ProjectCardContent } from "./Project.Card.Content";
import { ProjectCardImage } from "./Project.Card.Image";

import type { ProjectCardProps } from "./types";

/**
 * Project card component.
 *
 * @component
 *
 * @description
 * Displays a project entry with a thumbnail image and content summary.
 * Reveals itself the first time it scrolls into view, staggered by its position in the grid.
 * Asks the parent to open the case study modal when the image or content area is clicked.
 *
 * @param {ProjectCardProps} props - Component props
 * @param {number} props.index - Card position in the list, used to stagger the reveal
 * @param {IProjectByStack} props.project - Project data to display
 * @param {(index: number) => void} props.onOpen - Handler called with the card index when the card is activated
 *
 * @returns The project card element
 */
function ProjectCardComponent({ project, index, onOpen }: ProjectCardProps) {
    const { t } = useTranslation();

    const handleOpen = useCallback(() => onOpen(index), [onOpen, index]);

    return (
        <Reveal index={index} className="group h-full">
            <div
                className={`flex h-full flex-col overflow-hidden rounded-xl border p-4
                    border-outlined/50 bg-surface-elevated/25 transition-surface
                    group-hover:shadow-xl`}
            >
                <ProjectCardImage
                    alt={project.name}
                    onClick={handleOpen}
                    src={project.images[0].src}
                    blurDataURL={project.blurURL}
                />
                <ProjectCardContent
                    project={project}
                    onClick={handleOpen}
                    translatedDescription={t(project.description)}
                />
            </div>
        </Reveal>
    );
}

export const ProjectCard = memo(ProjectCardComponent);
