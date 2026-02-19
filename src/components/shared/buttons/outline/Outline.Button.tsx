import { cn } from "@/helpers/mergeClassName";
import type { ElementType, HTMLAttributes, ReactNode } from "react";

interface OutlineButton extends HTMLAttributes<HTMLButtonElement> {
    borderRadius?: string;
    children: ReactNode;
    as?: ElementType;
    containerClassName?: string;
    borderClassName?: string;
    duration?: number;
    className?: string;
}
export function OutlineButton({
    borderRadius = "1rem",
    children,
    as: Component = "button",
    containerClassName,
    borderClassName,
    duration,
    className,
    ...otherProps
}: OutlineButton) {
    return (
        <Component
            type="button"
            style={{
                borderRadius: borderRadius
            }}
            className={cn(
                "inline-flex animate-Outline items-center justify-center border-4 border-slate-300 dark:border-slate-700  px-6 font-medium dark:text-slate-300 text-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400/50",
                className
            )}
            {...otherProps}
        >
            {children}
        </Component>
    );
}
