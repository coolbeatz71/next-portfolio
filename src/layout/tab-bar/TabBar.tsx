import { useState } from "react";
import type { ITabs } from "@/features/projects/data/projects.tabs";
import { cn } from "@/shared/lib/cn";
import { NavigationDropdown } from "@/shared/ui/dropdown/navigation/Navigation.Dropdown";
import { NavigationTabBar } from "./TabBar.Navigation";

/**
 * @interface TabBarProps
 * @property {ITabs[]} tabs - Tab definitions including title, context, and content
 * @property {string} [tabBarClassName] - Additional class names for the desktop tab bar
 * @property {string} [containerClassName] - Additional class names for the outer container
 * @property {"skills" | "projects"} context - Used as the motion layoutId namespace
 */
interface TabBarProps {
    tabs: ITabs[];
    tabBarClassName?: string;
    containerClassName?: string;
    context: "skills" | "projects";
}

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
    context,
    tabBarClassName,
    containerClassName
}: TabBarProps) {
    const [activeTabIndex, setActiveTabIndex] = useState(0);

    return (
        <div className={cn("w-full", containerClassName)}>
            <div className="relative flex flex-col items-center">
                <NavigationDropdown
                    tabs={tabs}
                    activeTabIndex={activeTabIndex}
                    setActiveTabIndex={setActiveTabIndex}
                    className="inline-block md:hidden"
                />
                <NavigationTabBar
                    tabs={tabs}
                    context={context}
                    activeTabIndex={activeTabIndex}
                    setActiveTabIndex={setActiveTabIndex}
                    className={cn(
                        "relative hidden md:flex flex-wrap px-1.5 py-1.5 list-none bg-white dark:bg-gray-900 rounded-lg gap-1",
                        tabBarClassName
                    )}
                />

                <div className="w-full">{tabs[activeTabIndex].content}</div>
            </div>
        </div>
    );
}
