import type { ProjectByStack } from "@/config/Projects";
import { type Variants, motion } from "framer-motion";
import dynamic from "next/dynamic";

import { memo, useState } from "react";
import { useTranslation } from "react-i18next";
import { ProjectCardImage } from "./Project.Card.Image";
import { ProjectModal } from "./Project.Modal";
import { ProjectCardContent } from "./project.Card.Content";

export const DynamicModal = dynamic(
    async () => {
        const mod = await import(
            /* webpackChunkName: "Modal" */
            "../../popup/modal/Modal"
        );
        return mod.Modal;
    },
    { ssr: false }
);

export interface ProjectCardProps {
    index: number;
    project: ProjectByStack;
}

const animationVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (index: number) => ({
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: "easeOut",
            delay: index * 0.25
        }
    })
};

function ProjectCardComponent({ project, index }: ProjectCardProps) {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen((prev) => !prev);
    };

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
                custom={index}
                initial="hidden"
                animate="visible"
                className="group"
                variants={animationVariants}
            >
                <div
                    className={`md:min-h-64 lg:min-h-72 bg-white dark:bg-gray-900 rounded-lg 
                        overflow-hidden transition-shadow duration-300 group-hover:shadow-xl
                    `}
                >
                    <div className="flex flex-col md:flex-row md:min-h-64 lg:min-h-72">
                        <ProjectCardImage
                            alt={project.name}
                            onClick={toggleModal}
                            src={project.images[0].src}
                            blurDataURL={project.blurURL}
                        />
                        <ProjectCardContent
                            label={t("open")}
                            project={project}
                            onClick={toggleModal}
                            translatedDescription={t(project.description)}
                        />
                    </div>
                </div>
            </motion.div>
        </>
    );
}

export const ProjectCard = memo(ProjectCardComponent);
