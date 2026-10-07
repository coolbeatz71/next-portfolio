import { useScrollReveal } from "@/shared/hooks/useScrollReveal";
import { cn } from "@/shared/lib/cn";
import { ProjectCard } from "@/shared/ui/cards/project/Project.Card";
import { useProjectModal } from "@/shared/ui/modal/hooks/useProjectModal";
import { ProjectModalDialog } from "@/shared/ui/modal/Project.Modal.Dialog";

import type { ProjectSectionProps } from "./types";

/**
 * Project section grid component.
 *
 * @component
 *
 * @description
 * Renders a responsive grid of project cards with an entrance animation triggered
 * when the section scrolls into view. Owns the case study modal for the whole grid,
 * so a reader can move from one project to the next without closing it.
 *
 * @param {ProjectSectionProps} props - Component props
 * @param {IProjectByStack[]} props.projects - List of projects to display in the grid
 *
 * @returns The project section grid element
 */
export function ProjectSection({ projects }: ProjectSectionProps) {
    const { ref, isVisible } = useScrollReveal();
    const { activeIndex, open, close, goToPrevious, goToNext } = useProjectModal(projects.length);

    return (
        <section ref={ref}>
            <ProjectModalDialog
                onNext={goToNext}
                onClose={close}
                projects={projects}
                activeIndex={activeIndex}
                onPrevious={goToPrevious}
            />

            <div
                className={cn(
                    "py-8 transition-all duration-moderate ease-[cubic-bezier(0.36,0.66,0.04,1)]",
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                )}
            >
                <div className="grid lg:grid-cols-2 gap-4">
                    {projects.map((project, index) => (
                        <ProjectCard
                            index={index}
                            onOpen={open}
                            key={project.name}
                            project={project}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
