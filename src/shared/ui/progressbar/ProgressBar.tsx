import { motion } from "motion/react";
import NextImage from "next/image";
import { useInView } from "react-intersection-observer";
import { ISkillsByStack } from "@/features/skills/data/types";
import { BadgeSpan } from "@/shared/ui/badge/Badge.Span";

/**
 * Progress bar component.
 *
 * @component
 *
 * @description
 * Displays a skill item with its title, icon, and an animated progress bar.
 * The bar animates to the target percentage when the element enters the viewport.
 *
 * @param {ISkillsByStack} props - Component props (uses the ISkillsByStack shape)
 * @param {string} props.title - Skill name displayed as a badge label
 * @param {string} props.lightImage - Icon image URL used in light mode
 * @param {string} props.darkImage - Icon image URL used in dark mode
 * @param {number} props.progress - Skill level as a percentage (0–100)
 *
 * @returns The skill progress bar element
 */
export function ProgressBar({
    title,
    lightImage,
    darkImage,
    progress
}: ISkillsByStack) {
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
                        quality={1}
                        src={darkImage}
                        className="object-contain hidden dark:block"
                    />
                    {/* light image */}
                    <NextImage
                        fill
                        alt={title}
                        quality={1}
                        src={lightImage}
                        className="object-contain block dark:hidden"
                    />
                </span>
            </div>

            <div className="w-full bg-indigo-300/20 h-6 mb-4 mt-1.5 rounded-lg">
                <motion.div
                    className="bg-indigo-700 dark:bg-indigo-500 h-6 rounded-lg"
                    initial={{ width: 0 }}
                    transition={{ duration: 0.5 }}
                    animate={{ width: inView ? `${progress}%` : 0 }}
                />
            </div>
        </section>
    );
}
