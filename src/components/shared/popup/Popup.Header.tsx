import { cn } from "@/helpers/mergeClassName";
import type { ReactNode } from "react";

export interface PopupHeaderProps {
    children: ReactNode;
    className?: string;
}

export default function PopupHeader({
    children,
    className
}: PopupHeaderProps): JSX.Element {
    return (
        <div
            className={cn(
                "sticky z-50 border border-t-0 border-x-0 border-b-1 border-slate-300 dark:border-slate-700",
                className
            )}
        >
            {children}
        </div>
    );
}
