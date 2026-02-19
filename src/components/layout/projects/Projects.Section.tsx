import { motion, type Variants } from "motion/react";
import { useInView } from "react-intersection-observer";

import { ProjectCard } from "@/components/shared/cards/project-card/Project.Card";
import type { ProjectByStack } from "@/config/Projects";

export interface ProjectSectionProps {
    projects: ProjectByStack[];
}
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
