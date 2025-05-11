import { useState } from "react";
import type { Tabs } from "@/features/projects/data/projects.tabs";
import { cn } from "@/shared/lib/cn";
import { NavigationDropdown } from "@/shared/ui/dropdown/navigation/Navigation.Dropdown";
import { NavigationTabBar } from "./TabBar.Navigation";

interface TabBarProps {
    tabs: Tabs[];
    tabBarClassName?: string;
    containerClassName?: string;
    context: "skills" | "projects";
}

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
