import { domAnimation, LazyMotion, type Variants } from "motion/react";
import * as m from "motion/react-m";
import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { ProjectCardContent } from "./Project.Card.Content";
import { ProjectCardImage } from "./Project.Card.Image";

import type { ProjectCardProps } from "./types";

const animationVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (index: number) => ({
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: "easeOut",
            delay: index * 0.25
        }
    })
};

/**
 * Project card component.
 *
 * @component
 *
 * @description
 * Displays a project entry with a thumbnail image and content summary.
 * Animates in on mount with a staggered delay based on its index.
 * Asks the parent to open the case study modal when the image or content area is clicked.
 *
 * @param {ProjectCardProps} props - Component props
 * @param {number} props.index - Card position in the list, used for staggered animation
 * @param {IProjectByStack} props.project - Project data to display
 * @param {(index: number) => void} props.onOpen - Handler called with the card index when the card is activated
 *
 * @returns The project card element
 */
function ProjectCardComponent({ project, index, onOpen }: ProjectCardProps) {
    const { t } = useTranslation();

    const handleOpen = useCallback(() => onOpen(index), [onOpen, index]);

    return (
        <LazyMotion features={domAnimation}>
            <m.div
                custom={index}
                initial="hidden"
                animate="visible"
                className="group h-full"
                variants={animationVariants}
            >
                <div
                    className={`flex h-full flex-col overflow-hidden rounded-xl border p-4
                        border-outlined/50 bg-surface-elevated/25 duration-moderate
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
            </m.div>
        </LazyMotion>
    );
}

export const ProjectCard = memo(ProjectCardComponent);
