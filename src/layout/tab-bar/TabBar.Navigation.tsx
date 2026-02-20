import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import type { ITabs } from "@/features/projects/data/projects.tabs";

/**
 * @interface NavigationTabBarProps
 * @property {ITabs[]} tabs - Tab definitions to render as buttons
 * @property {number} activeTabIndex - Index of the currently active tab
 * @property {string} [className] - Additional class names for the tab list
 * @property {"skills" | "projects"} context - Motion layoutId namespace for the active indicator
 * @property {(index: number) => void} setActiveTabIndex - Callback to change the active tab
 */
export interface NavigationTabBarProps {
    tabs: ITabs[];
    activeTabIndex: number;
    className?: string;
    context: "skills" | "projects";
    setActiveTabIndex: (index: number) => void;
}

/**
 * Desktop tab bar navigation component.
 *
 * @component
 *
 * @description
 * Renders a horizontal list of tab buttons with a shared animated background indicator
 * that slides between tabs using a Motion layoutId. Hidden on mobile — shown on `md` and above.
 *
 * @param {NavigationTabBarProps} props - Component props
 * @param {ITabs[]} props.tabs - Tab definitions to render as buttons
 * @param {number} props.activeTabIndex - Index of the currently active tab
 * @param {"skills" | "projects"} props.context - Motion layoutId namespace for the active indicator
 * @param {string} [props.className] - Additional class names for the tab list
 * @param {(index: number) => void} props.setActiveTabIndex - Callback to change the active tab
 *
 * @returns The desktop tab bar element
 */
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
