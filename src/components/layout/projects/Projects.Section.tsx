import { type Variants, motion, useAnimation } from "framer-motion";
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

    const variants: Variants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5, ease: "backInOut", delay: 0.1 }
        }
    };

    return (
        <section ref={ref}>
            <motion.div
                initial="hidden"
                animate={controls}
                variants={variants}
                className="py-8"
            >
                <div className="grid md:grid-cols-2 gap-4">
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
