import type { Tabs } from "@/config/Projects";
import { cn } from "@/helpers/mergeClassName";
import { motion } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import NavigationDropdown from "../../shared/dropdown/navigation-dropdown/Navigation.Dropdown";

interface TabBarProps {
    tabs: Tabs[];
    tabBarClassName?: string;
    containerClassName?: string;
    context: "skills" | "projects";
}

export default function TabBar({
    tabs,
    context,
    tabBarClassName,
    containerClassName
}: TabBarProps) {
    const { t } = useTranslation();
    const [activeTabIndex, setActiveTabIndex] = useState(0);

    return (
        <div className={cn("w-full", containerClassName)}>
            <div className="relative flex flex-col items-center">
                <NavigationDropdown
                    tabs={tabs}
                    activeTabIndex={activeTabIndex}
                    setActiveTabIndex={setActiveTabIndex}
                    className="inline-block md:hidden"
                />
                <ul
                    data-tabs="tabs"
                    className={cn(
                        "relative hidden md:flex flex-wrap px-1.5 py-1.5 list-none bg-white dark:bg-gray-900 rounded-lg gap-1",
                        tabBarClassName
                    )}
                >
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

                <div className="w-full">{tabs[activeTabIndex].content}</div>
            </div>
        </div>
    );
}
