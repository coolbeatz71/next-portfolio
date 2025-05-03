import { ProgressBar } from "@/components/shared/progressbar/ProgressBar";
import type { SkillsByStack } from "@/config/DevStack";

export interface SkillSectionProps {
    stacks: SkillsByStack[];
}

export function SkillSection({ stacks }: SkillSectionProps): JSX.Element {
    return (
        <section className="flex justify-center items-center">
            <div className="flex flex-col w-full md:px-12 lg:px-48 xl:px-72 2xl:px-96 lg:min-w-[80%] xl:min-w-[60%] 2xl:min-w-[40%] py-8">
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
