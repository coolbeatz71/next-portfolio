import { TimelineFull } from "@/components/shared/timeline/Timeline.Full";
import type { TimelineEntry } from "@/config/WorkExperience";
import { Fragment } from "react";
import { useLockBodyScroll } from "react-use";

import PopupBackdrop from "../Popup.Backdrop";
import PopupCloseButton from "../Popup.Close.Button";
import PopupHeader from "../Popup.Header";

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
            {isOpen && <PopupBackdrop onClick={onToggle} />}

            <div
                className={`fixed top-0 right-0 z-50 w-[50%] h-full bg-light dark:bg-dark shadow-lg
                transition-transform transform ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <div className="p-4">
                    <PopupHeader>{title}</PopupHeader>

                    <PopupCloseButton onClick={onToggle} />

                    <div className="py-4">
                        <TimelineFull data={timeline} />
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
