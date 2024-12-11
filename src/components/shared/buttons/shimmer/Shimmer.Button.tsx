import { cn } from "@/helpers/mergeClassName";
import type { ElementType, HTMLAttributes, ReactNode } from "react";

interface ShimmerButton extends HTMLAttributes<HTMLButtonElement> {
    borderRadius?: string;
    children: ReactNode;
    as?: ElementType;
    containerClassName?: string;
    borderClassName?: string;
    duration?: number;
    className?: string;
}
export default function ShimmerButton({
    borderRadius = "1rem",
    children,
    as: Component = "button",
    containerClassName,
    borderClassName,
    duration,
    className,
    ...otherProps
}: ShimmerButton): JSX.Element {
    return (
        <Component
            type="button"
            style={{
                borderRadius: borderRadius
            }}
            className={cn(
                "inline-flex animate-shimmer items-center justify-center border-4 border-slate-300 dark:border-slate-700 bg-[linear-gradient(120deg,#bbc9de,45%,#afbacb,55%,#bbc9de)] dark:bg-[linear-gradient(120deg,#1d222a,45%,#29323f,55%,#1d222a)] bg-[length:200%_100%] px-6 font-medium dark:text-slate-300 text-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400/[0.5]",
                className
            )}
            {...otherProps}
        >
            {children}
        </Component>
    );
}
