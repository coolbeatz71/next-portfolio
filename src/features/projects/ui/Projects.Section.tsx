import { motion, type Variants } from "motion/react";
import { useInView } from "react-intersection-observer";
import type { IProjectByStack } from "@/features/projects/data/projects.tabs";
import { ProjectCard } from "@/shared/ui/cards/project/Project.Card";

/**
 * @interface ProjectSectionProps
 * @property {IProjectByStack[]} projects - List of projects grouped by tech stack to display
 */
export interface ProjectSectionProps {
    projects: IProjectByStack[];
}

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
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.1
    });

    const variants: Variants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.45, ease: "backInOut" }
        }
    };

    return (
        <section ref={ref}>
            <motion.div
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={variants}
                className="py-8"
            >
                <div className="grid lg:grid-cols-2 gap-4">
                    {projects.map((project, index) => (
                        <ProjectCard
                            index={index}
                            key={project.name}
                            project={project}
                        />
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
