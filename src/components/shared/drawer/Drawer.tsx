import { TimelineFull } from "@/components/shared/timeline/Timeline.Full";
import type { TimelineEntry } from "@/config/WorkExperience";
import { Fragment } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import { useLockBodyScroll } from "react-use";

import Backdrop from "@/components/shared/backdrop/Backdrop";

export interface DrawerProps {
    title: string;
    isOpen: boolean;
    onToggle: () => void;
    data: (headerClassName?: string, bodyClassName?: string) => TimelineEntry[];
}
export default function Drawer({
    data,
    title,
    isOpen,
    onToggle
}: DrawerProps): JSX.Element {
    const headerClassName = "mt-4 !text-sm mb-0";
    const bodyClassName = "!text-sm mt-4";
    const timeline = data(headerClassName, bodyClassName);

    useLockBodyScroll(isOpen);

    return (
        <Fragment>
            {isOpen && <Backdrop onClick={onToggle} />}
            <div
                className={`fixed top-0 right-0 z-50 w-[50%] h-full bg-light dark:bg-dark shadow-lg
                transition-transform transform ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <div className="p-4">
                    {/* HEADER */}
                    <div className="border border-t-0 border-x-0 border-b-1 border-slate-300 dark:border-slate-700">
                        <h2 className="text-2xl font-semibold mb-4">{title}</h2>
                    </div>

                    {/* CLOSE-BUTTON */}
                    <button
                        type="button"
                        onClick={onToggle}
                        className="absolute top-4 right-3 group text-3xl text-background rounded size-7 flex justify-center items-center text-slate-500 hover:text-red-500"
                    >
                        <IoMdCloseCircle />
                    </button>

                    {/* BODY */}
                    <div className="py-4">
                        <TimelineFull data={timeline} />
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
