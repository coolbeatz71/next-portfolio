import { cn } from "@/helpers/mergeClassName";
import type { ReactNode } from "react";

export interface GradientShineButtonProps {
    children: ReactNode;
    className?: string;
}
export default function GradientShineButton({
    children,
    className
}: GradientShineButtonProps): JSX.Element {
    return (
        <button
            type="button"
            className={cn(
                "relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-medium text-indigo-700 transition duration-300 ease-out rounded-lg group hover:ring-[3px] hover:ring-indigo-300",
                className
            )}
        >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-indigo-600 to-indigo-700" />
            <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease" />
            <span className="relative text-white font-medium text-sm">
                {children}
            </span>
        </button>
    );
}
