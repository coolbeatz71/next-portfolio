import { Fragment } from "react";

import type { ProjectByStack } from "@/config/Projects";
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
        </Fragment>
    );
}
