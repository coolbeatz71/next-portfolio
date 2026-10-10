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
 * Renders a responsive grid of project cards, each revealing itself as it scrolls into
 * view. Owns the case study modal for the whole grid, so a reader can move from one
 * project to the next without closing it.
 *
 * @param {ProjectSectionProps} props - Component props
 * @param {IProjectByStack[]} props.projects - List of projects to display in the grid
 *
 * @returns The project section grid element
 */
export function ProjectSection({ projects }: ProjectSectionProps) {
    const { activeIndex, open, close, goToPrevious, goToNext } = useProjectModal(projects.length);

    return (
        <section>
            <ProjectModalDialog
                onNext={goToNext}
                onClose={close}
                projects={projects}
                activeIndex={activeIndex}
                onPrevious={goToPrevious}
            />

            <div className="py-8">
                <div className="grid gap-6 lg:grid-cols-2">
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
