import { useCallback, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useClickAway } from "react-use";
import { IconChevronUpDown } from "@/shared/config/icons";
import { cn } from "@/shared/lib/cn";
import { NavigationDropdownMenu } from "./Navigation.Dropdown.Menu";
import type { NavigationDropdownProps } from "./types";

/**
 * Navigation dropdown component.
 *
 * @component
 *
 * @description
 * Renders a tab selector as a dropdown button, used on mobile to switch between content sections.
 * Displays the currently active tab and opens a menu on click.
 * Closes automatically when clicking outside.
 *
 * @param {NavigationDropdownProps} props - Component props
 * @param {ITabs[]} props.tabs - List of tab options to display in the dropdown
 * @param {number} props.activeTabIndex - Index of the currently selected tab
 * @param {(index: number) => void} props.setActiveTabIndex - Callback to update the active tab
 * @param {string} [props.className] - Additional class names for the container
 *
 * @returns The navigation dropdown element
 */
export function NavigationDropdown({
    tabs,
    className,
    activeTabIndex,
    setActiveTabIndex
}: NavigationDropdownProps) {
    const ref = useRef(null);
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    useClickAway(ref, () => setIsOpen(false));

    const toggleDropdown = useCallback(() => setIsOpen((prev) => !prev), []);

    const handleMenuSelect = useCallback(
        (index: number) => {
            setActiveTabIndex(index);
            setIsOpen(false);
        },
        [setActiveTabIndex]
    );

    return (
        <div ref={ref} className={cn(className, "relative flex w-full text-start")}>
            <div className="w-full">
                <button
                    type="button"
                    aria-haspopup="menu"
                    aria-expanded={isOpen}
                    aria-label={`Select section, current: ${t(tabs[activeTabIndex].title)}`}
                    className="w-full rounded-lg text-sm font-medium flex items-center justify-between p-3.5 text-typography-on-primary hover:text-typography-nav bg-primary-fill hover:bg-surface-hover hover:ring-3"
                    onClick={toggleDropdown}
                >
                    <span>{t(tabs[activeTabIndex].title)}</span>
                    <IconChevronUpDown className="-mr-1 ml-2 h-4 w-4" aria-hidden="true" />
                </button>
            </div>

            {isOpen && (
                <NavigationDropdownMenu
                    tabs={tabs}
                    onSelect={handleMenuSelect}
                    activeTabIndex={activeTabIndex}
                />
            )}
        </div>
    );
}
