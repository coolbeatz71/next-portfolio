import { cn } from "@/helpers/mergeClassName";
import type { ReactNode } from "react";

export interface LitUpBorderButtonProps {
    children: ReactNode;
    className?: string;
}
export default function LitUpBorderButton({
    children,
    className
}: LitUpBorderButtonProps): JSX.Element {
    return (
        <button type="button" className={cn("p-1 relative", className)}>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-800 rounded-lg" />
            <div className="w-full py-1.5 bg-gray-100 dark:bg-gray-800 rounded-lg relative group transition duration-100 text-black dark:text-white hover:text-white hover:bg-transparent">
                {children}
            </div>
        </button>
    );
}
