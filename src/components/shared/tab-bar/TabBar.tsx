import type { Tabs } from "@/config/Projects";
import { cn } from "@/helpers/mergeClassName";
import { motion } from "framer-motion";
import { useState } from "react";

interface TabBarProps {
    tabs: Tabs[];
    tabBarClassName?: string;
    containerClassName?: string;
}

export default function TabBar({
    tabs,
    containerClassName,
    tabBarClassName
}: TabBarProps) {
    const [activeTabIndex, setActiveTabIndex] = useState(0);

    return (
        <div className={cn("w-full", containerClassName)}>
            <div className="relative flex flex-col items-center">
                <ul
                    className={cn(
                        "relative flex flex-wrap px-1.5 py-1.5 list-none bg-white dark:bg-gray-900 rounded-xl gap-1 min-w-[50%]",
                        tabBarClassName
                    )}
                    data-tabs="tabs"
                >
                    {tabs.map((tab, idx) => (
                        <li
                            key={tab.context}
                            className="z-30 flex-auto text-center"
                        >
                            <button
                                role="tab"
                                type="button"
                                onClick={() => setActiveTabIndex(idx)}
                                className={`py-2 cursor-pointer w-full text-sm font-semibold transition-colors duration-200
                                ${idx === activeTabIndex ? "text-white" : "text-gray-500 dark:text-gray-400"}`}
                                style={{
                                    transformStyle: "preserve-3d"
                                }}
                            >
                                {tab.title}

                                {idx === activeTabIndex && (
                                    <motion.span
                                        className="bg-indigo-700 dark:bg-indigo-500 shadow-lg rounded-xl absolute inset-0 -z-10"
                                        layoutId="activeSection"
                                        transition={{
                                            type: "spring",
                                            stiffness: 380,
                                            damping: 30
                                        }}
                                    />
                                )}
                            </button>
                        </li>
                    ))}
                </ul>

                <div className="w-full">{tabs[activeTabIndex].content}</div>
            </div>
        </div>
    );
}
