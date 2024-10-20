import type { ProjectByStack } from "@/config/Projects";
import { cn } from "@/helpers/mergeClassName";
import { type Variants, motion } from "framer-motion";
import Image from "next/image";
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
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 group-hover:shadow-xl">
                <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/2 relative overflow-hidden">
                        <Image
                            fill
                            quality={55}
                            alt={project.name}
                            src={project.images[0]}
                            className="object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div
                            className={cn(
                                "absolute inset-0 bg-gradient-to-t from-black/60 to-transparent",
                                "opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            )}
                        />
                    </div>
                    <div className="md:w-1/2 p-4 flex flex-col justify-between">
                        <div>
                            <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors duration-300">
                                {project.name}
                            </h3>
                            <p className="text-gray-600 mb-4 line-clamp-4 text-sm">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-1 mb-4">
                                {project.stack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="bg-blue-100 text-blue-800 text-[8pt] font-semibold px-2.5 py-0.5 rounded transition-colors duration-300 group-hover:bg-blue-200 group-hover:text-blue-900"
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
                            className={cn(
                                "inline-flex items-center justify-center p-2 w-32 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors duration-300 ease-in-out",
                                !project.hasLink && "invisible"
                            )}
                        >
                            Visit
                            <FaArrowUpRightFromSquare className="ml-2 h-4 w-4" />
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
