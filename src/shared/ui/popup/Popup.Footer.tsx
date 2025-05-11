import type { ReactNode } from "react";

export interface PopupFooterProps {
    children: ReactNode;
}

/**
 * Popup footer component.
 *
 * @component
 *
 * @description
 * Renders a top-bordered container used as the footer area of a modal or drawer.
 *
 * @param {PopupFooterProps} props - Component props
 * @param {ReactNode} props.children - Content to render inside the footer
 *
 * @returns The popup footer element
 */
export function PopupFooter({ children }: PopupFooterProps) {
    return (
        <div className="border border-b-0 border-x-0 border-t border-slate-300 dark:border-slate-700">
            {children}
        </div>
    );
}
