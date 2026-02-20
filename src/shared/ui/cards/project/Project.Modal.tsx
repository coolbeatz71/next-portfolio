import NextImage from "next/image";
import { Fragment } from "react";
import { useTranslation } from "react-i18next";
import { BadgeSpan } from "@/shared/ui/badge/Badge.Span";
import { ProjectImageSlider } from "./Project.ImageSlider";
import { ProjectModalLinks } from "./Project.Modal.Links";

import type { ProjectModalProps } from "./types";

/**
 * Project modal content component.
 *
 * @component
 *
 * @description
 * Renders the full detail view of a project inside a modal.
 * Displays an image slider or a single preview image, description, role,
 * tech stack badges, and optional source code or live link buttons.
 *
 * @param {ProjectModalProps} props - Component props
 * @param {IProjectByStack} props.project - Project data to render in the modal
 *
 * @returns The project modal content element
 */
export function ProjectModal({ project }: ProjectModalProps) {
    const { t } = useTranslation();
    const hasLinks = project.hasLiveLink || project.hasSourceCode;

    return (
        <Fragment>
            <div>
                {project.hasPreviewImage ? (
                    <ProjectImageSlider
                        images={project.images}
                        imagePlaceholder={project.blurURL}
                    />
                ) : (
                    <NextImage
                        unoptimized
                        width={300}
                        height={300}
                        loading="lazy"
                        src={project.images[0].src}
                        alt={project.images[0].alt}
                        className="object-cover rounded-lg w-full h-56 md:h-72"
                    />
                )}
            </div>

            <div className="flex flex-col gap-4 mt-4">
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    {t(project.description)}
                </p>

                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    <span className="font-semibold">Role: </span>
                    {t(project.role)}
                </p>
            </div>

            <div
                className={`flex flex-wrap gap-1 pt-4 ${hasLinks ? "pb-8" : ""}`}
            >
                {project.stack.map((tech) => (
                    <BadgeSpan key={tech} text={tech} />
                ))}
            </div>

            <ProjectModalLinks project={project} />
        </Fragment>
    );
}
