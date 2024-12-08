import Image from "next/image";
import SectionHeader from "@/components/shared/section-header/SectionHeader";
import { mainStackList } from "@/config/DevStack.Main";
import TabBar from "@/components/shared/tab-bar/TabBar";
import { devStackTabs } from "@/config/DevStack";

export default function Skills(): JSX.Element {
    return (
        <div className="mx-auto max-w-7xl max-h-7xl">
            <SectionHeader
                title="My Tech Stack"
                subtitle="I’ve had a blast tinkering with some pretty cool tech.
                        Here are the ones that have significantly shaped my
                        expertise."
            />
            <div className="relative py-10">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-y-6 lg:px-24 md:px-24">
                    {mainStackList.map((skill) => (
                        <div
                            key={skill.name}
                            className="flex flex-col items-center group cursor-pointer p-8"
                        >
                            <div className="relative h-16 w-16 lg:h-24 lg:w-24">
                                <Image
                                    src={skill.src}
                                    alt={skill.name}
                                    layout="fill"
                                    objectFit="contain"
                                    className="transition-all duration-200 ease-in-out filter grayscale opacity-70 group-hover:filter-none group-hover:opacity-100"
                                />
                            </div>
                            <span className="text-sm text-center text-black dark:text-white">
                                {skill.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
            <TabBar
                tabs={devStackTabs}
                containerClassName="py-4"
                tabBarClassName="min-w-[60%]"
            />
        </div>
    );
}
