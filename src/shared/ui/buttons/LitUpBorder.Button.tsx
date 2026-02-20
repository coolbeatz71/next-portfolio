import { memo, type ReactNode } from "react";
import { cn } from "@/shared/lib/cn";

export interface LitUpBorderButtonProps {
    className?: string;
    children: ReactNode;
}

/**
 * Lit-up border button component.
 *
 * @component
 *
 * @description
 * Renders a button with a glowing indigo-to-purple gradient border.
 * The inner content transitions to transparent on hover, revealing the gradient background.
 *
 * @param {LitUpBorderButtonProps} props - Component props
 * @param {ReactNode} props.children - Button label content
 * @param {string} [props.className] - Additional class names for the outer wrapper
 *
 * @returns The lit-up border button element
 */
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
