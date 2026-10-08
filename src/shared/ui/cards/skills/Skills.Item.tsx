import { domAnimation, LazyMotion } from "motion/react";
import * as m from "motion/react-m";
import NextImage from "next/image";
import { memo } from "react";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { getSkillLevelKey } from "@/features/skills/data/skills.level";
import type { SkillItemProps } from "./types";

/**
 * Skill item component.
 *
 * @component
 *
 * @description
 * Renders one skill as a row: the logo and name on the left, the proficiency band and
 * percentage on the right, and a track beneath that fills to the level once the row
 * scrolls into view.
 *
 * @param {SkillItemProps} props - Component props
 * @param {ISkillsByStack} props.skill - Skill entry to render as a row
 *
 * @returns The skill item element
 */
function SkillItemComponent({ skill }: SkillItemProps) {
    const { t } = useTranslation();
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <li ref={ref} className="flex flex-col gap-2">
            <div className="flex items-center justify-between gap-3">
                <div className="flex min-w-0 items-center gap-3">
                    <span className="relative h-7 w-7 shrink-0">
                        <NextImage
                            fill
                            quality={1}
                            sizes="28px"
                            alt={skill.title}
                            src={skill.darkImage}
                            className="object-contain hidden dark:block"
                        />
                        <NextImage
                            fill
                            quality={1}
                            sizes="28px"
                            alt={skill.title}
                            src={skill.lightImage}
                            className="object-contain block dark:hidden"
                        />
                    </span>

                    <span className="truncate text-sm font-bold text-typography-primary">
                        {skill.title}
                    </span>
                </div>

                <span className="shrink-0 text-xs text-typography-muted tabular-nums">
                    {t(getSkillLevelKey(skill.progress))} · {skill.progress}%
                </span>
            </div>

            <div className="h-2.5 w-full overflow-hidden rounded-full bg-surface-track">
                <LazyMotion features={domAnimation}>
                    <m.div
                        initial={{ width: 0 }}
                        className="h-full rounded-full bg-primary-fill"
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        animate={{ width: inView ? `${skill.progress}%` : 0 }}
                    />
                </LazyMotion>
            </div>
        </li>
    );
}

export const SkillItem = memo(SkillItemComponent);
