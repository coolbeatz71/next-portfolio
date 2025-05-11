import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import type { Tabs } from "@/features/projects/data/projects.tabs";

export interface NavigationTabBarProps {
    tabs: Tabs[];
    activeTabIndex: number;
    className?: string;
    context: "skills" | "projects";
    setActiveTabIndex: (index: number) => void;
}
export function NavigationTabBar({
    tabs,
    context,
    className,
    activeTabIndex,
    setActiveTabIndex
}: NavigationTabBarProps) {
    const { t } = useTranslation();

    return (
        <ul data-tabs="tabs" className={className}>
            {tabs.map((tab, idx) => {
                const isActiveTab = idx === activeTabIndex;
                return (
                    <li
                        key={tab.context}
                        className="z-10 flex-auto text-center"
                    >
                        <button
                            role="tab"
                            type="button"
                            onClick={() => setActiveTabIndex(idx)}
                            className={`py-2 cursor-pointer w-full text-xs md:text-sm font-semibold transition-colors duration-200
                    ${isActiveTab ? "text-white" : "text-gray-500 dark:text-gray-400"}`}
                            style={{
                                transformStyle: "preserve-3d"
                            }}
                        >
                            {t(tab.title)}
                            {isActiveTab && (
                                <motion.span
                                    className="bg-indigo-700 dark:bg-indigo-500 shadow-lg rounded-lg absolute inset-0 -z-10"
                                    layoutId={`${context}-active`}
                                    transition={{
                                        damping: 30,
                                        type: "spring",
                                        stiffness: 380
                                    }}
                                />
                            )}
                        </button>
                    </li>
                );
            })}
        </ul>
    );
}
