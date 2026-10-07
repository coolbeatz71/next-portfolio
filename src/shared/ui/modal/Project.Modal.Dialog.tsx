import dynamic from "next/dynamic";
import { ProjectModal } from "./Project.Modal";
import { ProjectModalHeader } from "./Project.Modal.Header";
import { ProjectModalNav } from "./Project.Modal.Nav";
import type { ProjectModalDialogProps } from "./types";

const DynamicModal = dynamic(
    async () => {
        const mod = await import(
            /* webpackChunkName: "Modal" */
            "@/shared/ui/popup/modal/Modal"
        );
        return mod.Modal;
    },
    { ssr: false }
);

const FIRST_PROJECT_POSITION = 1;

/**
 * Project modal dialog component.
 *
 * @component
 *
 * @description
 * Hosts the project case study modal for a whole project list, so the reader can move from
 * one project to the next without returning to the grid. The underlying modal is loaded
 * on demand and only mounts once a project is selected.
 *
 * @param {ProjectModalDialogProps} props - Component props
 * @param {IProjectByStack[]} props.projects - Projects the dialog can navigate through
 * @param {number | null} props.activeIndex - Index of the project on display, or null when closed
 * @param {() => void} props.onClose - Handler to dismiss the dialog
 * @param {() => void} props.onPrevious - Handler to show the previous project
 * @param {() => void} props.onNext - Handler to show the next project
 *
 * @returns The project modal dialog element, or null when no project is selected
 */
export function ProjectModalDialog({
    projects,
    activeIndex,
    onClose,
    onPrevious,
    onNext
}: ProjectModalDialogProps) {
    if (activeIndex === null) return null;

    const project = projects[activeIndex];

    return (
        <DynamicModal
            isOpen
            className="max-w-4xl"
            onToggle={onClose}
            header={
                <ProjectModalHeader
                    onBack={onClose}
                    total={projects.length}
                    current={activeIndex + FIRST_PROJECT_POSITION}
                />
            }
            footer={<ProjectModalNav onPrevious={onPrevious} onNext={onNext} />}
        >
            <ProjectModal key={project.name} project={project} />
        </DynamicModal>
    );
}
