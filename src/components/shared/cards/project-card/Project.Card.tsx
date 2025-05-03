import type { ProjectByStack } from "@/config/Projects";
import { type Variants, motion } from "framer-motion";
import dynamic from "next/dynamic";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ProjectCardImage } from "./Project.Card.Image";
import { ProjectModal } from "./Project.Modal";
import { ProjectCardContent } from "./project.Card.Content";

const DynamicModal = dynamic(
    () => import("../../popup/modal/Modal").then((mod) => mod.Modal),
    { ssr: false }
);

export interface ProjectCardProps {
    index: number;
    project: ProjectByStack;
}

const animationVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut",
            delay: index * 0.25
        }
    })
};

export function ProjectCard({ project, index }: ProjectCardProps) {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => setIsOpen((prev) => !prev);

    return (
        <>
            {isOpen && (
                <DynamicModal
                    isOpen={isOpen}
                    className="max-w-2xl"
                    onToggle={toggleModal}
                    header={
                        <h2 className="text-xl font-semibold">
                            {project.name}
                        </h2>
                    }
                >
                    <ProjectModal project={project} />
                </DynamicModal>
            )}

            <motion.div
                className="group"
                custom={index}
                initial="hidden"
                animate="visible"
                variants={animationVariants}
            >
                <div className="md:min-h-64 lg:min-h-72 bg-white dark:bg-gray-900 rounded-lg overflow-hidden transition-shadow duration-300 group-hover:shadow-xl">
                    <div className="flex flex-col md:flex-row md:min-h-64 lg:min-h-72">
                        <ProjectCardImage
                            src={project.images[0].src}
                            alt={project.name}
                            blurDataURL={project.blurURL}
                            onClick={toggleModal}
                        />
                        <ProjectCardContent
                            project={project}
                            onClick={toggleModal}
                            translatedDescription={t(project.description)}
                            label={t("open")}
                        />
                    </div>
                </div>
            </motion.div>
        </>
    );
}
