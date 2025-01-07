import SectionHeader from "@/components/shared/section-header/SectionHeader";
import TabBar from "@/components/shared/tab-bar/TabBar";
import { devStackTabs } from "@/config/DevStack";
import { mainStackList } from "@/config/DevStack.Main";
import NextImage from "next/image";

export default function Skills(): JSX.Element {
    return (
        <section
            id="skill"
            className="mx-auto max-w-7xl max-h-7xl scroll-mt-36"
        >
            <SectionHeader
                title="My Tech Stack"
                subtitle="I’ve had a blast tinkering with some pretty cool tech.
                        Here are the ones that have significantly shaped my
                        expertise."
            />
            <div className="relative">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 lg:px-24 md:px-24">
                    {mainStackList.map((skill) => (
                        <div
                            key={skill.title}
                            className="flex flex-col items-center group cursor-pointer p-8"
                        >
                            <div className="relative h-16 w-16 lg:h-24 lg:w-24">
                                {/* dark image */}
                                <NextImage
                                    fill
                                    alt={skill.title}
                                    src={skill.darkImage}
                                    className="object-contain transition-all duration-200 ease-in-out filter grayscale opacity-70 group-hover:filter-none group-hover:opacity-100 hidden dark:block"
                                />
                                {/* light image */}
                                <NextImage
                                    fill
                                    alt={skill.title}
                                    src={skill.lightImage}
                                    className="object-contain transition-all duration-200 ease-in-out filter grayscale opacity-70 group-hover:filter-none group-hover:opacity-100 block dark:hidden"
                                />
                            </div>
                            <span className="text-sm text-center font-medium text-black/50 dark:text-white/50">
                                {skill.title}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
            <TabBar
                context="skills"
                tabs={devStackTabs}
                containerClassName="py-4"
                tabBarClassName="min-w-[60%]"
            />
        </section>
    );
}
