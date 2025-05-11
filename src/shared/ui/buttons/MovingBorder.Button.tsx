import type { ElementType, HTMLAttributes } from "react";
import { cn } from "@/shared/lib/cn";
import { MovingBorder } from "@/shared/ui/buttons/MovingBorder";

interface MovingBorderButton extends HTMLAttributes<HTMLButtonElement> {
    as?: ElementType;
    duration?: number;
    className?: string;
    borderRadius?: string;
    borderClassName?: string;
    children: React.ReactNode;
    containerClassName?: string;
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
                    "font-semibold relative bg-white border backdrop-blur-xl items-center justify-center w-full h-full text-sm antialiased transition-colors duration-300 dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-950",
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
