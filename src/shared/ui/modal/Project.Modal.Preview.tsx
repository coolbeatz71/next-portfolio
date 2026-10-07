import dynamic from "next/dynamic";
import NextImage from "next/image";
import type { ProjectModalPreviewProps } from "./types";

const ProjectImageSlider = dynamic(async () => {
    const mod = await import(
        /* webpackChunkName: "ProjectImageSlider" */
        "@/shared/ui/image-slider/Project.ImageSlider"
    );
    return mod.ProjectImageSlider;
});

/**
 * Project modal preview component.
 *
 * @component
 *
 * @description
 * Renders the full-width media block at the top of the project case study.
 * Shows the screenshot carousel when the project has previews, or a single image otherwise,
 * with the project category labelled over the top-left corner of the stage.
 *
 * @param {ProjectModalPreviewProps} props - Component props
 * @param {IProjectByStack} props.project - Project data providing the images
 * @param {IProjectCaseStudy} props.caseStudy - Translated case study content
 *
 * @returns The project modal preview element
 */
export function ProjectModalPreview({ project }: ProjectModalPreviewProps) {
    return (
        <div className="relative">
            {project.hasPreviewImage ? (
                <ProjectImageSlider images={project.images} imagePlaceholder={project.blurURL} />
            ) : (
                <NextImage
                    unoptimized
                    width={300}
                    height={300}
                    loading="lazy"
                    src={project.images[0].src}
                    alt={project.images[0].alt}
                    sizes="(max-width: 768px) 100vw, 100vw"
                    className="object-cover rounded-lg w-full h-64 md:h-80 lg:h-96"
                />
            )}
        </div>
    );
}
