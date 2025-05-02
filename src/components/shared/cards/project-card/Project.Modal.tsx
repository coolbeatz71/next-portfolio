import NextImage from "next/image";
import { Fragment } from "react";
import type { ReactNode } from "react";
import { FaArrowUpRightFromSquare, FaCodeBranch } from "react-icons/fa6";

import { BadgeSpan } from "@/components/shared/badge/Badge.Span";
import { LitUpBorderButton } from "@/components/shared/buttons/litup-border/LitUpBorder.Button";
import type { ProjectByStack } from "@/config/Projects";
import { useTranslation } from "react-i18next";
import { ProjectImageSlider } from "./Project.ImageSlider";

export interface ProjectModalProps {
    project: ProjectByStack;
}

interface LinkProps {
    href?: string;
    isVisible: boolean;
    children: ReactNode;
}
const Link = ({ href, isVisible, children }: LinkProps): JSX.Element =>
    isVisible ? (
        <a target="_blank" rel="noopener noreferrer" href={href || ""}>
            <div>{children}</div>
        </a>
    ) : (
        <div className="hidden" />
    );

export function ProjectModal({ project }: ProjectModalProps): JSX.Element {
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
                        width={300}
                        height={300}
                        src={project.images[0].src}
                        alt={project.images[0].alt}
                        className="object-cover rounded-lg w-full h-56 md:h-72"
                        loading="lazy"
                        unoptimized
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

            {hasLinks && (
                <div className="border border-b-0 border-x-0 border-t-1 border-slate-300 dark:border-slate-700">
                    <div className="flex justify-end gap-4 items-center pt-4">
                        <Link
                            href={project.sourceCodeLink}
                            isVisible={project.hasSourceCode}
                        >
                            <button
                                type="button"
                                className="py-2 text-sm font-medium text-gray-500 focus:outline-none rounded-lg hover:text-slate-900 dark:text-gray-400 dark:hover:text-white"
                            >
                                <div className="flex justify-center items-center text-sm font-medium">
                                    <FaCodeBranch className="mr-1 h-3 w-3" />
                                    {t("source_code")}
                                </div>
                            </button>
                        </Link>

                        <Link
                            href={project.liveLink}
                            isVisible={project.hasLiveLink}
                        >
                            <LitUpBorderButton className="w-32 p-[3.5px]">
                                <div className="flex justify-center items-center text-[10pt] font-medium">
                                    <FaArrowUpRightFromSquare className="mr-2 h-3 w-3" />
                                    {t("open")}
                                </div>
                            </LitUpBorderButton>
                        </Link>
                    </div>
                </div>
            )}
        </Fragment>
    );
}
