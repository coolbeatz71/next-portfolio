import { useScrollReveal } from "@/shared/hooks/useScrollReveal";
import { cn } from "@/shared/lib/cn";
import { ProjectCard } from "@/shared/ui/cards/project/Project.Card";

import type { ProjectSectionProps } from "./types";

/**
 * Project section grid component.
 *
 * @component
 *
 * @description
 * Renders a responsive grid of project cards with an entrance animation triggered
 * when the section scrolls into view.
 *
 * @param {ProjectSectionProps} props - Component props
 * @param {IProjectByStack[]} props.projects - List of projects to display in the grid
 *
 * @returns The project section grid element
 */
export function ProjectSection({ projects }: ProjectSectionProps) {
    const { ref, isVisible } = useScrollReveal();

    return (
        <section ref={ref}>
            <div
                className={cn(
                    "py-8 transition-all duration-moderate ease-[cubic-bezier(0.36,0.66,0.04,1)]",
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                )}
            >
                <div className="grid lg:grid-cols-2 gap-4">
                    {projects.map((project, index) => (
                        <ProjectCard index={index} key={project.name} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}
