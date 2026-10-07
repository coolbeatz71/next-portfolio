import { type CSSProperties, Fragment } from "react";
import { createPortal } from "react-dom";
import { useLockBodyScroll } from "react-use";
import { CUSTOM_SCROLLBAR } from "@/shared/config/style";
import { cn } from "@/shared/lib/cn";
import { PopupBackdrop } from "../Popup.Backdrop";
import { PopupCloseButton } from "../Popup.Close.Button";
import { PopupFooter } from "../Popup.Footer";
import { PopupHeader } from "../Popup.Header";
import type { ModalProps } from "./types";

const modalPositionStyle: CSSProperties = {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
};

/**
 * Modal component.
 *
 * @component
 *
 * @description
 * Renders a dialog portal over the page content with a blurred backdrop.
 * Spans the full viewport height at every breakpoint, so content running past the fold
 * reads as scrollable: the header stays pinned while the body scrolls, and the optional
 * footer sits at the end of the scrollable content. Runs edge to edge below the `md`
 * breakpoint and becomes a width-capped column above it.
 * Locks body scroll while open and returns null when `isOpen` is false.
 *
 * @param {ModalProps} props - Component props
 * @param {ReactNode} props.header - Content rendered in the pinned modal header
 * @param {ReactNode} [props.footer] - Content rendered at the end of the scrollable body
 * @param {ReactNode} props.children - Content rendered inside the scrollable modal body
 * @param {boolean} props.isOpen - Whether the modal is currently visible
 * @param {() => void} props.onToggle - Handler to open or close the modal
 * @param {string} [props.className] - Additional class names for the modal panel
 *
 * @returns The modal portal element, or null when closed
 */
export function Modal({ header, footer, isOpen, onToggle, children, className }: ModalProps) {
    useLockBodyScroll(isOpen);

    if (!isOpen || typeof document === "undefined") {
        return <Fragment></Fragment>;
    }

    return createPortal(
        <Fragment>
            <PopupBackdrop onClick={onToggle} />

            <div
                role="dialog"
                aria-modal="true"
                aria-label="modal"
                className={cn(
                    `fixed z-50 flex flex-col w-full h-dvh rounded-none max-w-xl overflow-hidden
                    md:w-[90%] md:rounded-lg
                    bg-background shadow-lg duration-slow ease-out transform`,
                    className
                )}
                style={modalPositionStyle}
            >
                <PopupHeader className="shrink-0 px-4 py-6 md:p-6">{header}</PopupHeader>
                <PopupCloseButton onClick={onToggle} className="right-4 md:right-8" />

                <div className={cn("grow overflow-y-auto overflow-x-hidden", CUSTOM_SCROLLBAR)}>
                    <div className="p-4 md:p-8">{children}</div>

                    {footer && (
                        <PopupFooter>
                            <div className="p-4 md:p-6">{footer}</div>
                        </PopupFooter>
                    )}
                </div>
            </div>
        </Fragment>,
        document.body
    );
}
