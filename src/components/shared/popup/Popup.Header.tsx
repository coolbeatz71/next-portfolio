import type { ReactNode } from "react";

export interface PopupHeaderProps {
    children: ReactNode;
}
export default function PopupHeader({
    children
}: PopupHeaderProps): JSX.Element {
    return (
        <div className="border border-t-0 border-x-0 border-b-1 border-slate-300 dark:border-slate-700">
            <h2 className="text-xl font-semibold mb-4">{children}</h2>
        </div>
    );
}
