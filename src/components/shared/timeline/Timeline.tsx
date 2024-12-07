import type { TimelineEntry } from "@/config/WorkExperience";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FcGlobe } from "react-icons/fc";

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
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
        offset: ["start 10%", "end 50%"]
    });

    const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
    const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

    return (
        <div className="mx-auto max-w-7xl" ref={containerRef}>
            <div className="grid grid-cols-1 xl:grid-cols-[2fr,3fr] items-center py-12">
                <div>
                    <h2 className="mb-4 text-2xl font-bold !leading-tight md:text-2xl xl:text-3xl text-white dark:text-black">
                        My Work Experience
                    </h2>
                    <p className="text-lg font-light text-gray-400 !leading-8">
                        I’ve had a blast tinkering with some pretty cool tech.
                        Here are the ones that have significantly shaped my
                        expertise.
                    </p>
                </div>
            </div>

            <div ref={ref} className="relative pt-10">
                {data.map((item) => (
                    <div
                        key={item.id}
                        className="flex justify-start md:gap-12 mb-12"
                    >
                        <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-md lg:max-w-lg md:w-full">
                            <div className="h-10 absolute w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
                            </div>
                            <h3 className="hidden md:block text-2xl md:pl-20 md:text-3xl font-bold text-neutral-500 dark:text-neutral-500 !leading-loose">
                                {item.title}
                                <p className="hidden md:block !text-sm !font-normal text-neutral-500 dark:text-neutral-500 ">
                                    {item.subtitle}
                                </p>
                                <p className="hidden md:flex items-center gap-1 !text-base text-neutral-500 dark:text-neutral-500">
                                    <FcGlobe /> {item.location}
                                </p>
                            </h3>
                        </div>

                        <div className="relative pl-20 pr-4 md:pl-4 w-full">
                            <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                                {item.title}
                            </h3>
                            {item.content}{" "}
                        </div>
                    </div>
                ))}
                <div
                    style={{
                        height: `${height}px`
                    }}
                    className="absolute md:left-5 left-5 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
                >
                    <motion.div
                        style={{
                            height: heightTransform,
                            opacity: opacityTransform
                        }}
                        className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-indigo-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
                    />
                </div>
            </div>
        </div>
    );
};
