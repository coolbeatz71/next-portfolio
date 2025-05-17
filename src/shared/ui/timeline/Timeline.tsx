import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { ITimelineEntry } from "@/features/experience/data/types";
import { IconGlobe } from "@/shared/config/icons";

/**
 * Timeline component.
 *
 * @component
 *
 * @description
 * Renders a vertical timeline of experience entries with sticky left-side labels
 * and a scroll-driven animated progress line that grows as the user scrolls down.
 *
 * @param {{ data: ITimelineEntry[] }} props - Component props
 * @param {ITimelineEntry[]} props.data - Ordered list of timeline entries to display
 *
 * @returns The timeline element
 */
export const Timeline = ({ data }: { data: ITimelineEntry[] }) => {
    const ref = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            setHeight(rect.height);
        }
    }, []);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 50%", "end 100%"]
    });

    const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
    const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

    return (
        <div className="mx-auto py-4 md:py-0" ref={containerRef}>
            <div ref={ref} className="relative">
                {data.map((item) => (
                    <div
                        key={item.id}
                        className="flex justify-start mb-6 lg:mb-12"
                    >
                        <div className="sticky flex flex-col md:flex-row z-10 items-center top-40 self-start max-w-md lg:max-w-lg md:w-1/12 lg:w-4/5 xl:w-full">
                            <div className="absolute md:top-0 lg:top-2 md:w-8 md:h-8 rounded-full bg-slate-300 dark:bg-slate-700 hidden md:flex items-center justify-center">
                                <div className="w-2 h-2 md:h-4 md:w-4 rounded-full bg-light dark:bg-dark border border-neutral-300 dark:border-neutral-700 p-1 md:p-2" />
                            </div>
                            <h3 className="hidden lg:block text-xl md:pl-20 md:text-2xl font-bold text-neutral-600 dark:text-neutral-300 leading-loose!">
                                {item.title}
                                <p className="flex text-sm! font-normal! text-neutral-600 dark:text-neutral-300">
                                    {item.subtitle}
                                </p>
                                <p className="flex items-center gap-1 text-sm! font-medium text-neutral-400 dark:text-neutral-500">
                                    <IconGlobe /> {item.location}
                                </p>
                            </h3>
                        </div>

                        <div className="relative pl-5 pr-0 md:pl-4 w-full">
                            <h3 className="lg:hidden block text-xl md:text-2xl mb-4 text-left font-bold text-neutral-600 dark:text-neutral-300">
                                {item.title}
                            </h3>

                            <div className="pb-4 flex flex-col lg:hidden">
                                <p className="flex text-sm! font-normal! text-neutral-600 dark:text-neutral-300">
                                    {item.subtitle}
                                </p>
                                <p className="flex items-center gap-1 text-sm! font-medium text-neutral-400 dark:text-neutral-500">
                                    <IconGlobe /> {item.location}
                                </p>
                            </div>

                            {item.content}
                        </div>
                    </div>
                ))}
                <div
                    style={{
                        height: `${height}px`
                    }}
                    className="absolute left-0 md:left-4 top-0 overflow-hidden w-0.5 bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-0% via-slate-400/30 dark:via-slate-600/30 to-transparent to-99% mask-[linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
                >
                    <motion.div
                        style={{
                            height: heightTransform,
                            opacity: opacityTransform
                        }}
                        className="absolute inset-x-0 top-0 w-0.75 bg-linear-to-t from-red-500 via-indigo-400 dark:via-indigo-500 to-transparent from-0% via-10% rounded-full"
                    />
                </div>
            </div>
        </div>
    );
};
