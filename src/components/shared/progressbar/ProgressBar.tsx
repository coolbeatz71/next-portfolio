import { BadgeSpan } from "@/components/shared/badge/Badge.Span";
import type { SkillsByStack } from "@/config/DevStack";
import { motion } from "framer-motion";
import NextImage from "next/image";
import { useInView } from "react-intersection-observer";

export function ProgressBar({
    title,
    lightImage,
    darkImage,
    progress
}: SkillsByStack): JSX.Element {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.1
    });

    return (
        <section ref={ref}>
            <div className="flex items-end justify-between">
                <BadgeSpan text={title} />
                <span className="h-8 w-8 rounded-lg relative">
                    {/* dark image */}
                    <NextImage
                        fill
                        alt={title}
                        src={darkImage}
                        className="object-contain hidden dark:block"
                    />
                    {/* light image */}
                    <NextImage
                        fill
                        alt={title}
                        src={lightImage}
                        className="object-contain block dark:hidden"
                    />
                </span>
            </div>

            <div className="w-full bg-indigo-300/20 h-6 mb-4 mt-1.5 rounded-lg">
                <motion.div
                    className="bg-indigo-700 dark:bg-indigo-500 h-6 rounded-lg"
                    initial={{ width: 0 }}
                    animate={{ width: inView ? `${progress}%` : 0 }}
                    transition={{ duration: 0.5 }}
                />
            </div>
        </section>
    );
}
