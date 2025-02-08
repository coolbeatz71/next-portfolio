import type { TimelineEntry } from "@/config/WorkExperience";
import { FcGlobe } from "react-icons/fc";
import GridPatternBackground from "../background/GridPattern.Background";

export const TimelineFull = ({ data }: { data: TimelineEntry[] }) => {
    return (
        <div className="mx-auto max-w-7xl">
            <div className="relative overflow-y-scroll max-h-[calc(100vh-theme(space.24))] pr-4">
                {data.map((item) => (
                    <div key={item.id} className="flex justify-start mb-6">
                        <div className="relative w-full border rounded-lg bg-slate-300 border-gray-200 dark:bg-slate-700 dark:border-gray-600 p-4 pb-6">
                            <div className="absolute top-0 bottom-0 w-[70%] opacity-50">
                                <GridPatternBackground size={20} />
                            </div>
                            <h3 className="block text-lg font-bold text-neutral-600 dark:text-neutral-300 !leading-loose">
                                <div className="flex justify-between items-center">
                                    {item.title}
                                    <p className="flex items-center gap-1 !text-sm font-medium text-neutral-400 dark:text-neutral-500">
                                        <FcGlobe /> {item.location}
                                    </p>
                                </div>
                                <p className="flex !text-sm !font-normal text-neutral-600 dark:text-neutral-300">
                                    {item.subtitle}
                                </p>
                            </h3>
                            {item.content}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
