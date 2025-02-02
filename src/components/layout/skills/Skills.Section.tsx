import ProgressBar from "@/components/shared/progressbar/ProgressBar";
import type { SkillsByStack } from "@/config/DevStack";

export interface SkillSectionProps {
    stacks: SkillsByStack[];
}

export default function SkillSection({
    stacks
}: SkillSectionProps): JSX.Element {
    return (
        <section className="flex justify-center items-center">
            <div className="flex flex-col w-full md:px-32 lg:w-[50%] py-8">
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
        </section>
    );
}
