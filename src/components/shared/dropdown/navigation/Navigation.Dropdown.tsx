import type { Tabs } from "@/config/Projects";
import { cn } from "@/helpers/mergeClassName";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { LuChevronsUpDown } from "react-icons/lu";
import { useClickAway } from "react-use";
import { NavigationDropdownMenu } from "./Navigation.Dropdown.Menu";

export interface NavigationDropdownProps {
    tabs: Tabs[];
    className?: string;
    activeTabIndex: number;
    setActiveTabIndex: (index: number) => void;
}

export default function NavigationDropdown({
    tabs,
    className,
    activeTabIndex,
    setActiveTabIndex
}: NavigationDropdownProps): JSX.Element {
    const ref = useRef(null);
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    useClickAway(ref, () => setIsOpen(false));

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleMenuSelect = (index: number) => {
        setActiveTabIndex(index);
        toggleDropdown();
    };

    return (
        <div
            ref={ref}
            className={cn(className, "relative flex w-full text-start")}
        >
            <div className="w-full">
                <button
                    type="button"
                    className="w-full rounded-lg text-sm font-medium flex items-center justify-between p-3.5 text-white hover:text-slate-700 hover:dark:text-slate-100 bg-indigo-700 dark:bg-indigo-500 hover:bg-slate-300 hover: dark:hover:bg-gray-700 dark:hover:border-gray-600 hover:ring-3 dark:focus:ring-gray-700"
                    onClick={toggleDropdown}
                >
                    <span>{t(tabs[activeTabIndex].title)}</span>
                    <LuChevronsUpDown
                        className="-mr-1 ml-2 h-4 w-4"
                        aria-hidden="true"
                    />
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
