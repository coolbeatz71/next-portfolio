import { Fragment } from "react";
import { useLockBodyScroll } from "react-use";
import { cn } from "@/shared/lib/cn";
import { PopupBackdrop } from "../Popup.Backdrop";
import { PopupCloseButton } from "../Popup.Close.Button";
import { PopupFooter } from "../Popup.Footer";
import { PopupHeader } from "../Popup.Header";
import type { SideMenuDrawerProps } from "./types";

const openTranslate: Record<"right" | "left", string> = {
    right: "translate-x-0",
    left: "-translate-x-0"
};

const closedTranslate: Record<"right" | "left", string> = {
    right: "translate-x-full",
    left: "-translate-x-full"
};

/**
 * Side menu drawer component.
 *
 * @component
 *
 * @description
 * Renders a full-height slide-in panel from the left or right edge of the screen.
 * Used specifically for the mobile navigation side menu.
 * Locks body scroll while open and renders a backdrop overlay.
 *
 * @param {SideMenuDrawerProps} props - Component props
 * @param {ReactNode} props.header - Content rendered in the sticky header
 * @param {ReactNode} props.children - Main content inside the drawer
 * @param {boolean} props.isOpen - Whether the drawer is currently open
 * @param {() => void} props.onToggle - Handler to open or close the drawer
 * @param {ReactNode} [props.footer] - Optional content rendered in the footer
 * @param {"right" | "left"} [props.position] - Side the drawer slides in from; defaults to "right"
 * @param {string} [props.className] - Additional class names for the aside element
 *
 * @returns The side menu drawer element
 */
export function SideMenuDrawer({
    header,
    footer,
    isOpen,
    onToggle,
    children,
    className,
    position = "right"
}: SideMenuDrawerProps) {
    useLockBodyScroll(isOpen);

    const translateValue = isOpen
        ? openTranslate[position]
        : closedTranslate[position];

    return (
        <Fragment>
            <aside
                className={cn(
                    `fixed inset-100 top-0 ${position}-0 z-50 w-[50%] h-screen bg-background
                    transition-transform transform ${translateValue}`,
                    className
                )}
            >
                <div className="p-4 flex flex-col justify-between h-full">
                    <PopupHeader>{header}</PopupHeader>

                    <PopupCloseButton onClick={onToggle} />

                    <div className="grow">{children}</div>

                    {footer && <PopupFooter>{footer}</PopupFooter>}
                </div>
            </aside>
            {isOpen && <PopupBackdrop onClick={onToggle} />}
        </Fragment>
    );
}
