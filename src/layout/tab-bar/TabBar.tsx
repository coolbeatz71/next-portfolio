import { useMemo, useState } from "react";
import { cn } from "@/shared/lib/cn";
import { NavigationDropdown } from "@/shared/ui/dropdown/navigation/Navigation.Dropdown";
import { TabBarNavigation } from "./TabBar.Navigation";
import type { TabBarProps } from "./types";

/**
 * Tab bar widget.
 *
 * @component
 *
 * @description
 * Renders a tabbed navigation control that switches between section content panels.
 * On mobile it displays a dropdown selector; on desktop it shows an animated tab bar.
 *
 * @param {TabBarProps} props - Component props
 * @param {ITabs[]} props.tabs - Tab definitions including title, context, and content
 * @param {"skills" | "projects"} props.context - Motion layoutId namespace for the active indicator
 * @param {string} [props.tabBarClassName] - Additional class names for the desktop tab bar
 * @param {string} [props.containerClassName] - Additional class names for the outer container
 *
 * @returns The tab bar element
 */
export function TabBar({
    tabs,
    tabBarClassName,
    containerClassName
}: TabBarProps) {
    const [activeTabIndex, setActiveTabIndex] = useState(0);

    const activeContent = useMemo(
        () => tabs[activeTabIndex].content,
        [tabs, activeTabIndex]
    );

    return (
        <div className={cn("w-full", containerClassName)}>
            <div className="relative flex flex-col items-center">
                <NavigationDropdown
                    tabs={tabs}
                    activeTabIndex={activeTabIndex}
                    setActiveTabIndex={setActiveTabIndex}
                    className="inline-block md:hidden"
                />
                <div
                    className={cn(
                        "hidden md:block p-1.5 bg-surface-tab rounded-lg",
                        tabBarClassName
                    )}
                >
                    <TabBarNavigation
                        tabs={tabs}
                        activeTabIndex={activeTabIndex}
                        setActiveTabIndex={setActiveTabIndex}
                    />
                </div>

                <div className="w-full">{activeContent}</div>
            </div>
        </div>
    );
}
