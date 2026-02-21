import { ITabs } from "@/features/projects/data/types";

/**
 * @interface TabBarProps
 * @property {ITabs[]} tabs - Tab definitions including title, context, and content
 * @property {string} [tabBarClassName] - Additional class names for the desktop tab bar
 * @property {string} [containerClassName] - Additional class names for the outer container
 * @property {"skills" | "projects"} context - Used as the motion layoutId namespace
 */
export interface TabBarProps {
    tabs: ITabs[];
    tabBarClassName?: string;
    containerClassName?: string;
    context: "skills" | "projects";
}

/**
 * @interface TabBarNavigationProps
 * @property {ITabs[]} tabs - Tab definitions to render as buttons
 * @property {number} activeTabIndex - Index of the currently active tab
 * @property {string} [className] - Additional class names for the tab list
 * @property {"skills" | "projects"} context - Motion layoutId namespace for the active indicator
 * @property {(index: number) => void} setActiveTabIndex - Callback to change the active tab
 */
export interface TabBarNavigationProps {
    tabs: ITabs[];
    activeTabIndex: number;
    className?: string;
    context: "skills" | "projects";
    setActiveTabIndex: (index: number) => void;
}
