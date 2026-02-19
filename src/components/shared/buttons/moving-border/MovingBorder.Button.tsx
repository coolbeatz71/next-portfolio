import type { ElementType, HTMLAttributes } from "react";
import { MovingBorder } from "@/components/shared/buttons/moving-border/MovingBorder";
import { cn } from "@/helpers/mergeClassName";

interface MovingBorderButton extends HTMLAttributes<HTMLButtonElement> {
    borderRadius?: string;
    children: React.ReactNode;
    as?: ElementType;
    containerClassName?: string;
    borderClassName?: string;
    duration?: number;
    className?: string;
}

export function MovingBorderButton({
    borderRadius = "0.65rem",
    children,
    as: Component = "button",
    containerClassName,
    borderClassName,
    duration,
    className,
    ...otherProps
}: MovingBorderButton) {
    return (
        <Component
            className={cn(
                "bg-transparent relative p-px overflow-hidden",
                containerClassName
            )}
            style={{
                borderRadius: borderRadius
            }}
            {...otherProps}
        >
            <div
                className="absolute inset-0"
                style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
            >
                <MovingBorder duration={duration} rx="30%" ry="30%">
                    <div
                        className={cn(
                            "h-20 w-20 opacity-[0.8] bg-[radial-gradient(var(--indigo-500)_40%,transparent_60%)]",
                            borderClassName
                        )}
                    />
                </MovingBorder>
            </div>

            <div
                className={cn(
                    "font-semibold relative bg-slate-900/80 border backdrop-blur-xl items-center justify-center w-full h-full text-sm antialiased transition-colors duration-300 dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 dark:hover:bg-slate-950 hover:bg-white",
                    className
                )}
                style={{
                    borderRadius: `calc(${borderRadius} * 0.96)`
                }}
            >
                {children}
            </div>
        </Component>
    );
}
