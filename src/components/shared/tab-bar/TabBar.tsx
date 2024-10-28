import type { Tabs } from "@/config/Projects";
import { cn } from "@/helpers/mergeClassName";
import { motion } from "framer-motion";
import { useState } from "react";

interface TabBarProps {
    tabs: Tabs[];
    className?: string;
}

export default function TabBar({ tabs, className }: TabBarProps) {
    const [activeTabIndex, setActiveTabIndex] = useState(0);

    return (
        <div className={cn("w-full", className)}>
            <div className="relative flex flex-col items-center">
                <ul
                    className="relative flex flex-wrap px-1.5 py-1.5 list-none bg-gray-200 dark:bg-gray-800 rounded-xl gap-1 min-w-[50%]"
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
                                className={`py-2 cursor-pointer w-full   text-sm font-semibold transition-colors duration-200
                                ${idx === activeTabIndex ? "text-indigo-500 dark:text-white" : "text-gray-500 dark:text-gray-400"}`}
                                style={{
                                    transformStyle: "preserve-3d"
                                }}
                            >
                                {tab.title}

                                {idx === activeTabIndex && (
                                    <motion.span
                                        className="bg-white dark:bg-indigo-500 shadow-lg rounded-xl absolute inset-0 -z-10"
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

                <div className="py-4">{tabs[activeTabIndex].content}</div>
            </div>
        </div>
    );
}
