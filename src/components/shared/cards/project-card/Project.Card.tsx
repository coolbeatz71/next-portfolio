import { BadgeSpan } from "@/components/shared/badge/Badge.Span";
import { LitUpBorderButton } from "@/components/shared/buttons/litup-border/LitUpBorder.Button";
import type { ProjectByStack } from "@/config/Projects";
import { type Variants, motion } from "framer-motion";
import dynamic from "next/dynamic";
import NextImage from "next/image";
import { Fragment, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { ProjectModal } from "./Project.Modal";

const DynamicModal = dynamic(
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

function HeaderModal({ title }: { title: string }): JSX.Element {
    return <h2 className="text-xl font-semibold">{title}</h2>;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    const variants: Variants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5, ease: "easeOut", delay: index * 0.25 }
        }
    };

    return (
        <Fragment>
            {isOpen && (
                <DynamicModal
                    isOpen={isOpen}
                    className="max-w-2xl"
                    onToggle={toggleModal}
                    key={`${index}-modal`}
                    header={<HeaderModal title={project.name} />}
                >
                    <ProjectModal project={project} />
                </DynamicModal>
            )}
            <motion.div
                initial="hidden"
                className="group"
                animate="visible"
                variants={variants}
            >
                <div className="md:min-h-64 lg:min-h-72 bg-white dark:bg-gray-900 rounded-lg overflow-hidden transition-all duration-300 group-hover:shadow-xl">
                    <div className="flex flex-col md:flex-row md:min-h-64 lg:min-h-72">
                        <div
                            onClick={toggleModal}
                            onKeyDown={toggleModal}
                            className="w-full md:w-1/2 h-56 md:h-auto relative overflow-hidden cursor-pointer"
                        >
                            <NextImage
                                fill
                                sizes="100%"
                                quality={55}
                                placeholder="blur"
                                alt={project.name}
                                src={project.images[0].src}
                                blurDataURL={project.blurURL}
                                className="object-cover transition-all duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent, opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                        <div className="md:w-1/2 p-4 flex flex-col justify-between cursor-pointer">
                            <div onClick={toggleModal} onKeyDown={toggleModal}>
                                <h3 className="cursor-text text-lg font-semibold mb-2 text-slate-700 dark:text-slate-300 transition-colors duration-200">
                                    {project.name}
                                </h3>
                                <p className="cursor-text text-neutral-500 dark:text-neutral-400 mb-4 line-clamp-4 text-[10pt]">
                                    {t(project.description)}
                                </p>
                                <div className="flex flex-wrap gap-1 mb-4">
                                    {project.stack.map((tech) => (
                                        <BadgeSpan key={tech} text={tech} />
                                    ))}
                                </div>
                            </div>
                            {project.hasLiveLink ? (
                                <a
                                    target="_blank"
                                    href={project.liveLink}
                                    rel="noopener noreferrer"
                                    className="flex justify-end"
                                >
                                    <LitUpBorderButton className="w-32 p-[3.5px]">
                                        <div className="flex justify-center items-center text-[10pt] font-medium">
                                            <FaArrowUpRightFromSquare className="mr-2 h-3 w-3" />
                                            {t("open")}
                                        </div>
                                    </LitUpBorderButton>
                                </a>
                            ) : (
                                <div className="invisible p-[1.1rem]" />
                            )}
                        </div>
                    </div>
                </div>
            </motion.div>
        </Fragment>
    );
}
