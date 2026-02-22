import { useTranslation } from "react-i18next";
import type { TabBarNavigationProps } from "./types";

/**
 * Desktop tab bar navigation component.
 *
 * @component
 *
 * @description
 * Renders a horizontal list of tab buttons with a shared animated background indicator
 * that slides between tabs using CSS translateX. Hidden on mobile — shown on `md` and above.
 *
 * @param {TabBarNavigationProps} props - Component props
 * @param {ITabs[]} props.tabs - Tab definitions to render as buttons
 * @param {number} props.activeTabIndex - Index of the currently active tab
 * @param {(index: number) => void} props.setActiveTabIndex - Callback to change the active tab
 *
 * @returns The desktop tab bar element
 */
export function TabBarNavigation({
    tabs,
    activeTabIndex,
    setActiveTabIndex
}: TabBarNavigationProps) {
    const { t } = useTranslation();

    return (
        <ul role="tablist" data-tabs="tabs" className="relative flex list-none">
            <span
                aria-hidden="true"
                className="bg-primary-fill shadow-lg rounded-lg absolute inset-0 z-0 transition-transform duration-base ease-in-out"
                style={{
                    width: `${100 / tabs.length}%`,
                    transform: `translateX(${activeTabIndex * 100}%)`
                }}
            />
            {tabs.map((tab, idx) => {
                const isActiveTab = idx === activeTabIndex;
                return (
                    <li
                        key={tab.context}
                        role="presentation"
                        className="relative z-10 flex-1 flex items-center justify-center"
                    >
                        <button
                            role="tab"
                            type="button"
                            aria-selected={isActiveTab}
                            onClick={() => setActiveTabIndex(idx)}
                            className={`py-2 cursor-pointer w-full text-center text-xs md:text-sm font-semibold duration-base
                    ${isActiveTab ? "text-typography-on-primary" : "text-typography-contact"}`}
                        >
                            {t(tab.title)}
                        </button>
                    </li>
                );
            })}
        </ul>
    );
}
