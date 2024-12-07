import { mainStackList } from "@/config/Skills.MainStack";
import Image from "next/image";

export default function Skills(): JSX.Element {
    return (
        <div className="mx-auto max-w-7xl max-h-7xl">
            <div className="grid grid-cols-1 xl:grid-cols-[2fr,3fr] items-center py-12">
                <div>
                    <h2 className="mb-4 text-2xl font-bold !leading-tight md:text-2xl xl:text-3xl text-white dark:text-black">
                        My Skills
                    </h2>
                    <p className="text-lg font-light text-gray-400 !leading-8">
                        I’ve had a blast tinkering with some pretty cool tech.
                        Here are the ones that have significantly shaped my
                        expertise.
                    </p>
                </div>
            </div>
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
                                    alt={`${skill.name} logo`}
                                    layout="fill"
                                    objectFit="contain"
                                    className="transition-all duration-200 ease-in-out filter grayscale opacity-50 group-hover:filter-none group-hover:opacity-100"
                                />
                            </div>
                            <span className="text-sm text-center">
                                {skill.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
