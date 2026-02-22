import { domAnimation, LazyMotion } from "motion/react";
import * as m from "motion/react-m";
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
                        sizes="32px"
                        src={darkImage}
                        className="object-contain hidden dark:block"
                    />
                    {/* light image */}
                    <NextImage
                        fill
                        alt={title}
                        quality={1}
                        sizes="32px"
                        src={lightImage}
                        className="object-contain block dark:hidden"
                    />
                </span>
            </div>

            <div className="w-full bg-surface-track h-6 mb-4 mt-1.5 rounded-lg">
                <LazyMotion features={domAnimation}>
                    <m.div
                        className="bg-primary-fill h-6 rounded-lg"
                        initial={{ width: 0 }}
                        transition={{ duration: 0.5 }}
                        animate={{ width: inView ? `${progress}%` : 0 }}
                    />
                </LazyMotion>
            </div>
        </section>
    );
}
