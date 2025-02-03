import { Fragment } from "react";
import type { ReactNode } from "react";
import { useLockBodyScroll } from "react-use";

import { cn } from "@/helpers/mergeClassName";
import PopupBackdrop from "../Popup.Backdrop";
import PopupCloseButton from "../Popup.Close.Button";
import PopupFooter from "../Popup.Footer";
import PopupHeader from "../Popup.Header";

export interface DrawerProps {
    header: ReactNode;
    footer?: ReactNode;
    isOpen: boolean;
    onToggle: () => void;
    children: ReactNode;
    className?: string;
    position?: "right" | "left";
}

export default function Drawer({
    header,
    footer,
    isOpen,
    onToggle,
    children,
    className,
    position = "right"
}: DrawerProps): JSX.Element {
    useLockBodyScroll(isOpen);

    const getTranslateValue = (): string => {
        const toggle = {
            open: { right: "translate-x-0", left: "-translate-x-0" },
            closed: { right: "translate-x-full", left: "-translate-x-full" }
        };
        return isOpen ? toggle.open[position] : toggle.closed[position];
    };

    return (
        <Fragment>
            <aside
                className={cn(
                    `fixed top-0 ${position}-0 z-50 w-[50%] h-screen bg-light dark:bg-dark
                    transition-transform transform ${getTranslateValue()}`,
                    className
                )}
            >
                <div className="p-4 flex flex-col justify-between h-full">
                    <PopupHeader>{header}</PopupHeader>

                    <PopupCloseButton onClick={onToggle} />

                    <div>{children}</div>

                    {footer && <PopupFooter>{footer}</PopupFooter>}
                </div>
            </aside>
            {isOpen && <PopupBackdrop onClick={onToggle} />}
        </Fragment>
    );
}
