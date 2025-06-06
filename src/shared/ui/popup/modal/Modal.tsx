import { Fragment } from "react";
import { createPortal } from "react-dom";
import { useLockBodyScroll } from "react-use";
import { cn } from "@/shared/lib/cn";
import { PopupBackdrop } from "../Popup.Backdrop";
import { PopupCloseButton } from "../Popup.Close.Button";
import { PopupHeader } from "../Popup.Header";
import type { ModalProps } from "./types";

/**
 * Modal component.
 *
 * @component
 *
 * @description
 * Renders a centered dialog portal over the page content with a blurred backdrop.
 * Locks body scroll while open. Returns null when `isOpen` is false.
 *
 * @param {ModalProps} props - Component props
 * @param {ReactNode} props.header - Content rendered in the sticky modal header
 * @param {ReactNode} props.children - Content rendered inside the modal body
 * @param {boolean} props.isOpen - Whether the modal is currently visible
 * @param {() => void} props.onToggle - Handler to open or close the modal
 * @param {string} [props.className] - Additional class names for the modal panel
 *
 * @returns The modal portal element, or null when closed
 */
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
                    "fixed z-50 w-[96%] md:w-[90%] max-w-xl bg-background rounded-lg shadow-lg transition-all duration-slow ease-out transform",
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
