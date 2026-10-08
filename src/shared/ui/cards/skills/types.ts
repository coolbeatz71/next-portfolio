import { ISkillsByStack } from "@/features/skills/data/types";

/**
 * @interface SkillCardProps
 * @property {string} title - i18n key for the category name
 * @property {ISkillsByStack[]} stacks - Skill entries belonging to the category
 */
export interface SkillCardProps {
    title: string;
    stacks: ISkillsByStack[];
}

/**
 * @interface SkillItemProps
 * @property {ISkillsByStack} skill - Skill entry to render as a row
 */
export interface SkillItemProps {
    skill: ISkillsByStack;
}
