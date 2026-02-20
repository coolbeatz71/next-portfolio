import { ITabs } from "@/features/projects/data/types";

/**
 * @interface NavigationDropdownProps
 * @property {ITabs[]} tabs - List of tab options to display in the dropdown
 * @property {string} [className] - Additional class names for the container
 * @property {number} activeTabIndex - Index of the currently selected tab
 * @property {(index: number) => void} setActiveTabIndex - Callback to update the active tab
 */
export interface NavigationDropdownProps {
    tabs: ITabs[];
    className?: string;
    activeTabIndex: number;
    setActiveTabIndex: (index: number) => void;
}

/**
 * @interface NavigationDropdownMenuProps
 * @property {ITabs[]} tabs - List of tab options to render
 * @property {number} activeTabIndex - Index of the currently selected tab
 * @property {(index: number) => void} onSelect - Callback fired with the selected tab index
 */
export interface NavigationDropdownMenuProps {
    tabs: ITabs[];
    activeTabIndex: number;
    onSelect: (index: number) => void;
}
