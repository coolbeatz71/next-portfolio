import { memo, type ReactNode } from "react";
import { cn } from "@/helpers/mergeClassName";

export interface LitUpBorderButtonProps {
    children: ReactNode;
    className?: string;
}

function LitUpBorderButtonComponent({
    children,
    className
}: LitUpBorderButtonProps) {
    return (
        <button type="button" className={cn("p-1 relative", className)}>
            <div className="absolute inset-0 bg-linear-to-r from-indigo-500 to-purple-800 rounded-lg" />
            <div
                className={`w-full py-1 md:py-1.5 bg-slate-100 dark:bg-slate-800 rounded relative 
                    group transition duration-100 text-slate-700 dark:text-slate-200 hover:text-white hover:bg-transparent
                `}
            >
                {children}
            </div>
        </button>
    );
}

export const LitUpBorderButton = memo(LitUpBorderButtonComponent);
