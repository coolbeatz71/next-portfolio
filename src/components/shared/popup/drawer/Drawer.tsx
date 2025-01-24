import { Fragment } from "react";
import type { ReactNode } from "react";
import { useLockBodyScroll } from "react-use";

import { cn } from "@/helpers/mergeClassName";
import PopupBackdrop from "../Popup.Backdrop";
import PopupCloseButton from "../Popup.Close.Button";
import PopupHeader from "../Popup.Header";

export interface DrawerProps {
    title: string;
    isOpen: boolean;
    onToggle: () => void;
    children: ReactNode;
    className?: string;
    position?: "right" | "left";
}

export default function Drawer({
    title,
    isOpen,
    onToggle,
    children,
    className,
    position = "right"
}: DrawerProps): JSX.Element {
    useLockBodyScroll(isOpen);
    const getTranslateValue = (): string => {
        if (isOpen) {
            return position === "right" ? "translate-x-0" : "-translate-x-0";
        }
        return position === "right" ? "translate-x-full" : "-translate-x-full";
    };

    return (
        <Fragment>
            {isOpen && <PopupBackdrop onClick={onToggle} />}

            <div
                className={cn(
                    `fixed top-0 ${position}-0 z-50 w-[50%] h-full bg-light dark:bg-dark shadow-lg
                transition-transform transform ${getTranslateValue()}`,
                    className
                )}
            >
                <div className="p-4">
                    <PopupHeader>{title}</PopupHeader>

                    <PopupCloseButton onClick={onToggle} />

                    <div className="py-4">{children}</div>
                </div>
            </div>
        </Fragment>
    );
}
