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
        </Fragment>
    );
}
