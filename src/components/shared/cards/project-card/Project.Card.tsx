import LitUpBorderButton from "@/components/shared/buttons/litup-border/LitUpBorder.Button";
import type { ProjectByStack } from "@/config/Projects";
import { cn } from "@/helpers/mergeClassName";
import { type Variants, motion } from "framer-motion";
import NextImage from "next/image";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

export interface ProjectCardProps {
    project: ProjectByStack;
    index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
    const variants: Variants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5, ease: "easeOut", delay: index * 0.25 }
        }
    };

    return (
        <motion.div
            initial="hidden"
            className="group"
            animate="visible"
            variants={variants}
        >
            <div className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden transition-all duration-300 group-hover:shadow-xl">
                <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/2 relative overflow-hidden cursor-pointer">
                        <NextImage
                            fill
                            quality={55}
                            placeholder="blur"
                            alt={project.name}
                            src={project.images[0]}
                            blurDataURL={project.blurURL}
                            className="object-cover transition-all duration-300 group-hover:scale-110"
                        />
                        <div
                            className={cn(
                                "absolute inset-0 bg-gradient-to-t from-black/50 dark:from-white/50 to-transparent",
                                "opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            )}
                        />
                    </div>
                    <div className="md:w-1/2 p-4 flex flex-col justify-between cursor-pointer">
                        <div>
                            <h3 className="cursor-text text-xl font-semibold mb-2 text-slate-700 dark:text-slate-300 transition-colors duration-300">
                                {project.name}
                            </h3>
                            <p className="cursor-text text-gray-500 dark:text-gray-400 mb-4 line-clamp-4 text-[10pt]">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-1 mb-4">
                                {project.stack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="cursor-pointer bg-indigo-100 text-indigo-800 dark:bg-gray-700 dark:text-indigo-400 border border-indigo-400 text-[8pt] font-semibold px-2.5 py-0.5 rounded transition-colors duration-100"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <a
                            target="_blank"
                            href={project.link}
                            rel="noopener noreferrer"
                            className={cn(!project.hasLink && "invisible")}
                        >
                            <LitUpBorderButton className="w-32 p-[2.5px]">
                                <div className="flex justify-center items-center text-sm">
                                    Visit
                                    <FaArrowUpRightFromSquare className="ml-2 h-3 w-3" />
                                </div>
                            </LitUpBorderButton>
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
