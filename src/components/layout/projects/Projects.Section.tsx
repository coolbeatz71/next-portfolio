import { useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { ProjectCard } from "@/components/shared/cards/project-card/Project.Card";
import type { ProjectByStack } from "@/config/Projects";

export interface ProjectSectionProps {
    projects: ProjectByStack[];
}
export default function ProjectSection({ projects }: ProjectSectionProps) {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    return (
        <section ref={ref}>
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard
                            index={index}
                            key={project.name}
                            project={project}
                            controls={controls}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
