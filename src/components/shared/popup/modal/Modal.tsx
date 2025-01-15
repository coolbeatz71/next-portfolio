import { Fragment } from "react";
import type { ReactNode } from "react";
import { createPortal } from "react-dom";
import { useLockBodyScroll } from "react-use";

import { cn } from "@/helpers/mergeClassName";
import PopupBackdrop from "../Popup.Backdrop";
import PopupCloseButton from "../Popup.Close.Button";
import PopupHeader from "../Popup.Header";

export interface ModalProps {
    title: string;
    isOpen: boolean;
    onToggle: () => void;
    children: ReactNode;
    className?: string;
}

export default function Modal({
    title,
    isOpen,
    onToggle,
    children,
    className
}: ModalProps): JSX.Element {
    useLockBodyScroll(isOpen);

    if (!isOpen) return <></>;

    return createPortal(
        <Fragment>
            {isOpen && <PopupBackdrop onClick={onToggle} />}

            <div
                className={cn(
                    "fixed z-50 w-[90%] max-w-xl bg-white dark:bg-gray-800 rounded-lg shadow-lg transition-all duration-500 ease-out transform",
                    className
                )}
                style={{
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)"
                }}
            >
                <div className="p-4">
                    <PopupHeader>{title}</PopupHeader>

                    <PopupCloseButton onClick={onToggle} />

                    <div className="pt-4">{children}</div>
                </div>
            </div>
        </Fragment>,
        document.body
    );
}
