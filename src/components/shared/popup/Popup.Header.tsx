import type { ReactNode } from "react";

export interface PopupHeaderProps {
    children: ReactNode;
}

export default function PopupHeader({
    children
}: PopupHeaderProps): JSX.Element {
    return (
        <div className="sticky py-4 top-0 z-50 border border-t-0 border-x-0 border-b-1 border-slate-300 dark:border-slate-700 bg-light dark:bg-dark">
            {children}
        </div>
    );
}
