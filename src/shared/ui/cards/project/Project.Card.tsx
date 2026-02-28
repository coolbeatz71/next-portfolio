import { domAnimation, LazyMotion, type Variants } from "motion/react";
import * as m from "motion/react-m";
import dynamic from "next/dynamic";
import { Fragment, memo, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useProjectCardModal } from "./hooks/useProjectCardModal";
import { ProjectCardContent } from "./Project.Card.Content";
import { ProjectCardImage } from "./Project.Card.Image";
import { ProjectModal } from "./Project.Modal";

import type { ProjectCardProps } from "./types";

export const DynamicModal = dynamic(
    async () => {
        const mod = await import(
            /* webpackChunkName: "Modal" */
            "../../popup/modal/Modal"
        );
        return mod.Modal;
    },
    { ssr: false }
);

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
 * Opens a detail modal when the image or action button is clicked.
 *
 * @param {ProjectCardProps} props - Component props
 * @param {number} props.index - Card position in the list, used for staggered animation
 * @param {IProjectByStack} props.project - Project data to display
 *
 * @returns The project card element
 */
function ProjectCardComponent({ project, index }: ProjectCardProps) {
    const { t } = useTranslation();
    const { isOpen, toggleModal } = useProjectCardModal();

    const modalHeader = useMemo(
        () => <h2 className="text-xl font-semibold">{project.name}</h2>,
        [project]
    );

    return (
        <Fragment>
            {isOpen && (
                <DynamicModal
                    isOpen={isOpen}
                    className="max-w-2xl"
                    onToggle={toggleModal}
                    header={modalHeader}
                >
                    <ProjectModal project={project} />
                </DynamicModal>
            )}

            <LazyMotion features={domAnimation}>
                <m.div
                    custom={index}
                    initial="hidden"
                    animate="visible"
                    className="group"
                    variants={animationVariants}
                >
                    <div
                        className={`md:min-h-64 lg:min-h-72 bg-surface-elevated rounded-lg
                        overflow-hidden duration-moderate group-hover:shadow-xl
                    `}
                    >
                        <div className="flex flex-col md:flex-row md:min-h-64 lg:min-h-72">
                            <ProjectCardImage
                                alt={project.name}
                                onClick={toggleModal}
                                src={project.images[0].src}
                                blurDataURL={project.blurURL}
                            />
                            <ProjectCardContent
                                label={t("open")}
                                project={project}
                                onClick={toggleModal}
                                translatedDescription={t(project.description)}
                            />
                        </div>
                    </div>
                </m.div>
            </LazyMotion>
        </Fragment>
    );
}

export const ProjectCard = memo(ProjectCardComponent);
