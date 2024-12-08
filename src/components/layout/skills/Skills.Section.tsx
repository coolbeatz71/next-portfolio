import ProgressBar from "@/components/shared/progressbar/ProgressBar";
import type { SkillsByStack } from "@/config/DevStack";

export interface SkillSectionProps {
    stacks: SkillsByStack[];
}

export default function SkillSection({
    stacks
}: SkillSectionProps): JSX.Element {
    return (
        <div className="flex flex-col w-full">
            {stacks.map((stack) => (
                <ProgressBar
                    key={stack.title}
                    progress={stack.progress}
                    title={stack.title}
                    lightImage={stack.lightImage}
                    darkImage={stack.darkImage}
                />
            ))}
        </div>
    );
}
