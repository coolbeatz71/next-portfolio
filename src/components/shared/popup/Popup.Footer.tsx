import type { ReactNode } from "react";

export interface PopupFooterProps {
    children: ReactNode;
}

export function PopupFooter({ children }: PopupFooterProps): JSX.Element {
    return (
        <div className="border border-b-0 border-x-0 border-t-1 border-slate-300 dark:border-slate-700">
            {children}
        </div>
    );
}
