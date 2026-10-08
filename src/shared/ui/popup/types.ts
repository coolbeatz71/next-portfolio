import type { ReactNode } from "react";

/**
 * @interface PopupBackdropProps
 * @property {() => void} onClick - Handler called when the backdrop is clicked or a key is pressed
 */
export interface PopupBackdropProps {
    onClick: () => void;
}

/**
 * @interface PopupCloseButtonProps
 * @property {() => void} onClick - Handler called when the close button is clicked
 * @property {string} [className] - Additional class names, used to align the button with the popup padding
 */
export interface PopupCloseButtonProps {
    onClick: () => void;
    className?: string;
}

/**
 * @interface PopupHeaderProps
 * @property {string} [className] - Additional class names for the header container
 * @property {ReactNode} children - Content to render inside the header
 */
export interface PopupHeaderProps {
    className?: string;
    children: ReactNode;
}

/**
 * @interface PopupFooterProps
 * @property {ReactNode} children - Content to render inside the footer
 */
export interface PopupFooterProps {
    children: ReactNode;
}
