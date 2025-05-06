import { cn } from "@/helpers/mergeClassName";
import { type ReactNode, memo } from "react";

export interface PopupHeaderProps {
    className?: string;
    children: ReactNode;
}

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
