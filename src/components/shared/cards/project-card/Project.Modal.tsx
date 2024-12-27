import NextImage from "next/image";
import { Fragment } from "react";
import type { ReactNode } from "react";
import { FaArrowUpRightFromSquare, FaCodeBranch } from "react-icons/fa6";

import BadgeSpan from "@/components/shared/badge/Badge.Span";
import LitUpBorderButton from "@/components/shared/buttons/litup-border/LitUpBorder.Button";
import type { ProjectByStack } from "@/config/Projects";
import { cn } from "@/helpers/mergeClassName";
import ProjectImageSlider from "./Project.ImageSlider";

export interface ProjectModalProps {
    project: ProjectByStack;
}

interface SectionProps {
    title: string;
    children: ReactNode;
}
const Section = ({ title, children }: SectionProps): JSX.Element => (
    <div className="py-2">
        <h3 className="block text-lg font-bold text-neutral-600 dark:text-neutral-300 !leading-loose">
            {title}
        </h3>
        <p className="text-neutral-600 dark:text-neutral-400">{children}</p>
    </div>
);

interface LinkProps {
    href: string;
    isVisible: boolean;
    children: ReactNode;
}
const Link = ({ href, isVisible, children }: LinkProps): JSX.Element => (
    <a
        target="_blank"
        rel="noopener noreferrer"
        href={href}
        className={cn(!isVisible && "invisible")}
    >
        <div>{children}</div>
    </a>
);

export default function ProjectModal({
    project
}: ProjectModalProps): JSX.Element {
    const hasLinks = project.hasLiveLink || project.hasSourceCode;

    return (
        <Fragment>
            <div>
                {project.hasPreviewImage ? (
                    <ProjectImageSlider images={project.images} />
                ) : (
                    <NextImage
                        width={300}
                        height={300}
                        src={project.images[0].src}
                        alt={project.images[0].alt}
                        className="object-cover rounded-md w-full h-72"
                        loading="lazy"
                        unoptimized
                    />
                )}
            </div>

            <Section title="Role">{project.role}</Section>
            <Section title="Description">{project.description}</Section>

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
                                className="py-2 text-sm font-medium text-gray-500 focus:outline-none rounded hover:text-slate-900 dark:text-gray-400 dark:hover:text-white"
                            >
                                <div className="flex justify-center items-center text-sm font-medium">
                                    <FaCodeBranch className="mr-2 h-3 w-3" />
                                    View Source
                                </div>
                            </button>
                        </Link>

                        <Link
                            href={project.liveLink}
                            isVisible={project.hasLiveLink}
                        >
                            <LitUpBorderButton className="w-32 p-0.5">
                                <div className="flex justify-center items-center text-sm font-medium">
                                    <FaArrowUpRightFromSquare className="mr-2 h-3 w-3" />
                                    Visit
                                </div>
                            </LitUpBorderButton>
                        </Link>
                    </div>
                </div>
            )}
        </Fragment>
    );
}
