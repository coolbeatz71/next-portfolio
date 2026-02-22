import { ITabs } from "@/features/projects/data/types";

/**
 * @interface TabBarProps
 * @property {ITabs[]} tabs - Tab definitions including title, context, and content
 * @property {string} [tabBarClassName] - Additional class names for the desktop tab bar
 * @property {string} [containerClassName] - Additional class names for the outer container
 */
export interface TabBarProps {
    tabs: ITabs[];
    tabBarClassName?: string;
    containerClassName?: string;
}

/**
 * @interface TabBarNavigationProps
 * @property {ITabs[]} tabs - Tab definitions to render as buttons
 * @property {number} activeTabIndex - Index of the currently active tab
 * @property {(index: number) => void} setActiveTabIndex - Callback to change the active tab
 */
export interface TabBarNavigationProps {
    tabs: ITabs[];
    activeTabIndex: number;
    setActiveTabIndex: (index: number) => void;
}
