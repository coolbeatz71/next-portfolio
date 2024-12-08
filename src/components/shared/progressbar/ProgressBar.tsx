import type { SkillsByStack } from "@/config/DevStack";
import { motion } from "framer-motion";
import NextImage from "next/image";
import { useInView } from "react-intersection-observer";

export default function ProgressBar({
    title,
    lightImage,
    darkImage,
    progress
}: SkillsByStack): JSX.Element {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    return (
        <section ref={ref}>
            <div className="flex items-end justify-between">
                <span className="cursor-pointer bg-indigo-100 dark:bg-indigo-800 text-indigo-800 dark:text-indigo-100 text-[8pt] font-semibold px-2.5 py-0.5 rounded transition-colors duration-200 hover:bg-indigo-200 hover:text-indigo-900 dark:hover:bg-indigo-600 dark:hover:text-indigo-200">
                    {title}
                </span>
                <span className="h-8 w-8 rounded relative">
                    <NextImage
                        layout="fill"
                        className="hidden dark:block"
                        src={darkImage}
                        objectFit="contain"
                        alt={title}
                    />
                    <NextImage
                        layout="fill"
                        className="block dark:hidden"
                        src={lightImage}
                        objectFit="contain"
                        alt={title}
                    />
                </span>
            </div>

            <div className="w-full bg-indigo-300/20 h-6 mb-6 mt-2 rounded-md">
                <motion.div
                    className="bg-indigo-700 h-6 rounded-md"
                    initial={{ width: 0 }}
                    animate={{ width: inView ? `${progress}%` : 0 }}
                    transition={{ duration: 0.5 }}
                />
            </div>
        </section>
    );
}
