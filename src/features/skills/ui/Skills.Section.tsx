import { memo } from "react";
import { ProgressBar } from "@/shared/ui/progressbar/ProgressBar";
import type { SkillSectionProps } from "./types";

/**
 * Skill stack section component.
 *
 * @component
 *
 * @description
 * Renders a centered list of progress bars for a given set of tech stack skills,
 * each showing the skill name, proficiency level, and technology logo.
 *
 * @param {SkillSectionProps} props - Component props
 * @param {ISkillsByStack[]} props.stacks - Skill entries to render as progress bars
 *
 * @returns The skill stack section element
 */
function SkillSectionComponent({ stacks }: SkillSectionProps) {
    return (
        <section className="flex justify-center items-center">
            <div className="flex flex-col w-full md:px-12 lg:px-48 xl:px-72 2xl:px-96 lg:min-w-[80%] xl:min-w-[60%] 2xl:min-w-[40%] py-8">
                {stacks.map((stack) => (
                    <ProgressBar
                        key={stack.title}
                        title={stack.title}
                        progress={stack.progress}
                        darkImage={stack.darkImage}
                        lightImage={stack.lightImage}
                    />
                ))}
            </div>
        </section>
    );
}

export const SkillSection = memo(SkillSectionComponent);
