import { useTranslation } from "react-i18next";
import type { Tabs } from "@/config/Projects";

export interface NavigationDropdownMenuProps {
    tabs: Tabs[];
    activeTabIndex: number;
    onSelect: (index: number) => void;
}

export function NavigationDropdownMenu({
    tabs,
    onSelect,
    activeTabIndex
}: NavigationDropdownMenuProps) {
    const { t } = useTranslation();

    return (
        <div
            id="dropdown"
            className="w-full z-10 origin-top-right absolute top-12 left-0 right-0 px-2 mt-1 rounded-lg shadow-xl bg-white dark:bg-slate-600"
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
                                        ? "text-white bg-indigo-700 dark:bg-indigo-500"
                                        : "text-gray-700 dark:text-gray-200 hover:bg-slate-200 dark:hover:bg-slate-700"
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
