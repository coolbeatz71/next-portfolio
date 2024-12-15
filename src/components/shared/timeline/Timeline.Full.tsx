import type { TimelineEntry } from "@/config/WorkExperience";
import { FcGlobe } from "react-icons/fc";

export const TimelineFull = ({ data }: { data: TimelineEntry[] }) => {
    return (
        <div className="mx-auto max-w-7xl">
            <div className="relative overflow-y-scroll max-h-[90vh] pr-4">
                {data.map((item) => (
                    <div key={item.id} className="flex justify-start mb-6">
                        <div className="relative w-full border border-gray-300 rounded bg-slate-100 dark:bg-slate-700 dark:border-gray-600 p-4">
                            <h3 className="hidden md:block text-lg font-bold text-neutral-600 dark:text-neutral-300 !leading-loose">
                                {item.title}
                                <div className="flex justify-between">
                                    <p className="flex !text-sm !font-normal text-neutral-600 dark:text-neutral-300">
                                        {item.subtitle}
                                    </p>
                                    <p className="flex items-center gap-1 !text-sm font-medium text-neutral-400 dark:text-neutral-500">
                                        <FcGlobe /> {item.location}
                                    </p>
                                </div>
                            </h3>
                            {item.content}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
