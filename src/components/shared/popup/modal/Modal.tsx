import { Fragment } from "react";
import type { ReactNode } from "react";
import { createPortal } from "react-dom";
import { useLockBodyScroll } from "react-use";

import PopupBackdrop from "../Popup.Backdrop";
import PopupCloseButton from "../Popup.Close.Button";
import PopupHeader from "../Popup.Header";

export interface ModalProps {
    title: string;
    isOpen: boolean;
    onToggle: () => void;
    children: ReactNode;
}

export default function Modal({
    title,
    isOpen,
    onToggle,
    children
}: ModalProps): JSX.Element | null {
    useLockBodyScroll(isOpen);

    if (!isOpen) return null;

    return createPortal(
        <Fragment>
            {isOpen && <PopupBackdrop onClick={onToggle} />}

            <div
                className="fixed z-50 w-[90%] max-w-lg bg-white dark:bg-gray-800 rounded-lg shadow-lg transition-all duration-500 ease-out transform"
                style={{
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)"
                }}
            >
                <div className="p-4">
                    <PopupHeader>{title}</PopupHeader>

                    <PopupCloseButton onClick={onToggle} />

                    <div className="py-4">{children}</div>
                </div>
            </div>
        </Fragment>,
        document.body
    );
}
