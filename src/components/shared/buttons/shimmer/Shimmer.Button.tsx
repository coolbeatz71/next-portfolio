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
                "inline-flex animate-shimmer items-center justify-center border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400/[0.5]",
                className
            )}
            {...otherProps}
        >
            {children}
        </Component>
    );
}
