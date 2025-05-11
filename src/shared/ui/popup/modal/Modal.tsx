import type { ReactNode } from "react";
import { Fragment } from "react";
import { createPortal } from "react-dom";
import { useLockBodyScroll } from "react-use";

import { cn } from "@/shared/lib/cn";
import { PopupBackdrop } from "../Popup.Backdrop";
import { PopupCloseButton } from "../Popup.Close.Button";
import { PopupHeader } from "../Popup.Header";

export interface ModalProps {
    isOpen: boolean;
    header: ReactNode;
    className?: string;
    children: ReactNode;
    onToggle: () => void;
}

export function Modal({
    header,
    isOpen,
    onToggle,
    children,
    className
}: ModalProps) {
    useLockBodyScroll(isOpen);

    if (!isOpen) return <></>;

    return createPortal(
        <Fragment>
            {isOpen && <PopupBackdrop onClick={onToggle} />}

            <div
                className={cn(
                    "fixed z-50 w-[96%] md:w-[90%] max-w-xl bg-light dark:bg-dark rounded-lg shadow-lg transition-all duration-500 ease-out transform",
                    className
                )}
                style={{
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)"
                }}
            >
                <div className="px-4 pb-4">
                    <PopupHeader className="py-4">{header}</PopupHeader>

                    <PopupCloseButton onClick={onToggle} />

                    <div className="pt-4">{children}</div>
                </div>
            </div>
        </Fragment>,
        document.body
    );
}
