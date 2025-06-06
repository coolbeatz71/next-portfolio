import { useTranslation } from "react-i18next";
import type { NavigationDropdownMenuProps } from "./types";

/**
 * Navigation dropdown menu component.
 *
 * @component
 *
 * @description
 * Renders the list of tab options inside the navigation dropdown.
 * Highlights the currently active tab and calls the parent handler on selection.
 *
 * @param {NavigationDropdownMenuProps} props - Component props
 * @param {ITabs[]} props.tabs - List of tab options to render
 * @param {number} props.activeTabIndex - Index of the currently selected tab
 * @param {(index: number) => void} props.onSelect - Callback fired with the selected tab index
 *
 * @returns The navigation dropdown menu element
 */
export function NavigationDropdownMenu({
    tabs,
    onSelect,
    activeTabIndex
}: NavigationDropdownMenuProps) {
    const { t } = useTranslation();

    return (
        <div
            id="dropdown"
            className="w-full z-10 origin-top-right absolute top-12 left-0 right-0 px-2 mt-1 rounded-lg shadow-xl bg-surface-dropdown"
        >
            <div className="py-2" aria-labelledby="dropdown-menu">
                {tabs.map((tab, idx) => {
                    const isActiveTab = idx === activeTabIndex;

                    return (
                        <button
                            type="button"
                            key={tab.title}
                            role="menuitem"
                            onClick={() => onSelect(idx)}
                            className={`rounded-lg flex items-center my-1.5 px-3 py-2 text-sm font-medium 
                                ${
                                    isActiveTab
                                        ? "text-text-on-primary bg-primary-fill"
                                        : "text-text-contact hover:bg-surface-hover"
                                } w-full text-left
                            `}
                        >
                            {t(tab.title)}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
