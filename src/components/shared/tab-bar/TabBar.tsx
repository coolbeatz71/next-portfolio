import type { Tabs } from "@/config/Projects";
import { useState } from "react";

interface TabBarProps {
    tabs: Tabs[];
}

export default function TabBar({ tabs }: TabBarProps) {
    const [activeTab, setActiveTab] = useState(tabs[0].context);

    return (
        <div className="w-full">
            <div className="relative right-0">
                <ul
                    className="relative flex flex-wrap px-1.5 py-1.5 list-none rounded-md bg-slate-100"
                    data-tabs="tabs"
                >
                    {tabs.map((tab) => (
                        <li
                            key={tab.context}
                            className="z-30 flex-auto text-center"
                        >
                            <button
                                type="button"
                                className={`z-30 flex items-center justify-center w-full px-0 py-2 text-sm mb-0 transition-all ease-in-out border-0 rounded-md cursor-pointer text-slate-600 bg-inherit ${activeTab === tab.title ? "text-slate-700" : ""}`}
                                role="tab"
                                data-tab-target=""
                                aria-controls={tab.context}
                                aria-selected={activeTab === tab.context}
                                onClick={() => setActiveTab(tab.context)}
                            >
                                {tab.title}
                            </button>
                        </li>
                    ))}
                </ul>

                {tabs.map((tab) => (
                    <div
                        id={tab.context}
                        key={tab.context}
                        data-tab-content=""
                        className={`p-5 ${activeTab === tab.context ? "" : "hidden opacity-0"}`}
                    >
                        {tab.content}
                    </div>
                ))}
            </div>
        </div>
    );
}
