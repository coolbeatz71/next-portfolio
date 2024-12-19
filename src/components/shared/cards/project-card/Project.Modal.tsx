import { Fragment } from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

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
            <div className="py-4">
                <p className="font-medium text-neutral-500 dark:text-neutral-300">
                    {project.description}
                </p>
            </div>
            <div className="flex flex-wrap gap-1 mb-4">
                {project.stack.map((tech) => (
                    <BadgeSpan key={tech} text={tech} />
                ))}
            </div>
            <a
                target="_blank"
                href={project.link}
                rel="noopener noreferrer"
                className={cn(!project.hasLink && "invisible")}
            >
                <LitUpBorderButton className="w-32 p-[2.5px]">
                    <div className="flex justify-center items-center text-sm">
                        Visit
                        <FaArrowUpRightFromSquare className="ml-2 h-3 w-3" />
                    </div>
                </LitUpBorderButton>
            </a>
        </Fragment>
    );
}
