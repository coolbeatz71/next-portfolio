import type { Tabs } from "@/config/Projects";
import { cn } from "@/helpers/mergeClassName";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { LuChevronsUpDown } from "react-icons/lu";
import { useClickAway } from "react-use";

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

    useClickAway(ref, () => {
        setIsOpen(false);
    });

    const toggleDropdown = () => setIsOpen(!isOpen);

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
                                    onClick={() => {
                                        setActiveTabIndex(idx);
                                        toggleDropdown();
                                    }}
                                    className={`rounded-lg flex items-center my-1.5 px-3 py-2 text-sm font-medium ${isActiveTab ? "text-white bg-indigo-700 dark:bg-indigo-500" : "text-gray-700 dark:text-gray-200 hover:bg-slate-200 dark:hover:bg-slate-700"} w-full text-left`}
                                >
                                    {t(tab.title)}
                                </button>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
}
