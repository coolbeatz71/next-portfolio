import { memo } from "react";
import { useTranslation } from "react-i18next";
import { SkillItem } from "./Skills.Item";
import type { SkillCardProps } from "./types";

/**
 * Skill card component.
 *
 * @component
 *
 * @description
 * Renders one skill category as a card: the category name, a rule, then a row per skill.
 * Cards sit in a responsive grid so they stack on mobile.
 *
 * @param {SkillCardProps} props - Component props
 * @param {string} props.title - i18n key for the category name
 * @param {ISkillsByStack[]} props.stacks - Skill entries belonging to the category
 *
 * @returns The skill card element
 */
function SkillCardComponent({ title, stacks }: SkillCardProps) {
    const { t } = useTranslation();

    return (
        <article
            className={`flex h-full flex-col rounded-xl border border-outlined/50
                bg-surface-elevated/25 p-5 md:p-6`}
        >
            <h3 className="text-xl md:text-2xl font-bold text-typography-heading">{t(title)}</h3>

            <ul className="mt-5 flex flex-col gap-5 border-t border-outlined pt-5">
                {stacks.map((skill) => (
                    <SkillItem key={skill.title} skill={skill} />
                ))}
            </ul>
        </article>
    );
}

export const SkillCard = memo(SkillCardComponent);
