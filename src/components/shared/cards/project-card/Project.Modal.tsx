import { Fragment } from "react";
import { FaArrowUpRightFromSquare, FaCodeBranch } from "react-icons/fa6";

import BadgeSpan from "@/components/shared/badge/Badge.Span";
import LitUpBorderButton from "@/components/shared/buttons/litup-border/LitUpBorder.Button";
import type { ProjectByStack } from "@/config/Projects";
import { cn } from "@/helpers/mergeClassName";
import ProjectImageSlider from "./Project.ImageSlider";

export interface ProjectModalProps {
    project: ProjectByStack;
}

export default function ProjectModal({
    project
}: ProjectModalProps): JSX.Element {
    return (
        <Fragment>
            <ProjectImageSlider images={project.images} />
            <div className="py-2">
                <h3 className="block text-lg font-bold text-neutral-600 dark:text-neutral-300 !leading-loose">
                    Role
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                    {project.role}
                </p>
            </div>
            <div className="py-2">
                <h3 className="block text-lg font-bold text-neutral-600 dark:text-neutral-300 !leading-loose">
                    Description
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                    {project.description}
                </p>
            </div>
            <div className="flex flex-wrap gap-1 pt-4 pb-8">
                {project.stack.map((tech) => (
                    <BadgeSpan key={tech} text={tech} />
                ))}
            </div>
            <div className="border border-b-0 border-x-0 border-t-1 border-slate-300 dark:border-slate-700">
                <div className="flex justify-end gap-4 items-center pt-4">
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={project.sourceCodeLink}
                        className={cn(!project.hasSourceCode && "invisible")}
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
                    </a>
                    <a
                        target="_blank"
                        href={project.liveLink}
                        rel="noopener noreferrer"
                        className={cn(!project.hasLiveLink && "invisible")}
                    >
                        <LitUpBorderButton className="w-32 p-0.5">
                            <div className="flex justify-center items-center text-sm font-medium">
                                <FaArrowUpRightFromSquare className="mr-2 h-3 w-3" />
                                Visit
                            </div>
                        </LitUpBorderButton>
                    </a>
                </div>
            </div>
        </Fragment>
    );
}
