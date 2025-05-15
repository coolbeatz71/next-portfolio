import { ISkillsByStack } from "../data/types";

/**
 * @interface SkillSectionProps
 * @property {ISkillsByStack[]} stacks - List of skill entries with progress and images to display
 */
export interface SkillSectionProps {
    stacks: ISkillsByStack[];
}
