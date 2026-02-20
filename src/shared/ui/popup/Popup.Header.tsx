import { memo, type ReactNode } from "react";
import { cn } from "@/shared/lib/cn";

export interface PopupHeaderProps {
    className?: string;
    children: ReactNode;
}

/**
 * Popup header component.
 *
 * @component
 *
 * @description
 * Renders a sticky bottom-bordered container used as the header area of a modal or drawer.
 *
 * @param {PopupHeaderProps} props - Component props
 * @param {ReactNode} props.children - Content to render inside the header
 * @param {string} [props.className] - Additional class names for the header container
 *
 * @returns The popup header element
 */
function PopupHeaderComponent({ children, className }: PopupHeaderProps) {
    return (
        <div
            className={cn(
                "sticky z-50 border border-t-0 border-x-0 border-b border-slate-300 dark:border-slate-700",
                className
            )}
        >
            {children}
        </div>
    );
}

export const PopupHeader = memo(PopupHeaderComponent);
