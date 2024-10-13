import type { ProjectByStack } from "@/config/Projects";
import { cn } from "@/helpers/mergeClassName";
import { type AnimationControls, type Variants, motion } from "framer-motion";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

export interface ProjectCardProps {
    project: ProjectByStack;
    index: number;
    controls: AnimationControls;
}
export function ProjectCard({ project, index, controls }: ProjectCardProps) {
    const variants: Variants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    return (
        <motion.div
            initial="hidden"
            className="group"
            animate={controls}
            variants={variants}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 group-hover:shadow-xl">
                <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/2 relative overflow-hidden">
                        <img
                            alt={project.name}
                            src={project.images[0]}
                            className="w-full h-64 md:h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div
                            className={cn(
                                "absolute inset-0 bg-gradient-to-t from-black/60 to-transparent",
                                "opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            )}
                        />
                    </div>
                    <div className="md:w-1/2 p-6 flex flex-col justify-between">
                        <div>
                            <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors duration-300">
                                {project.name}
                            </h3>
                            <p className="text-gray-600 mb-4 truncate">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.stack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded transition-colors duration-300 group-hover:bg-blue-200 group-hover:text-blue-900"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        {project.hasLink && (
                            <a
                                target="_blank"
                                href={project.link}
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 ease-in-out"
                            >
                                Visit
                                <FaArrowUpRightFromSquare className="ml-2 h-4 w-4" />
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
