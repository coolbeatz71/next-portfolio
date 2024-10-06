import { MovingBorder } from "@/components/shared/buttons/MovingBorder";
import { cn } from "@/helpers/mergeClassName";
import type { ElementType, HTMLAttributes } from "react";

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
    borderRadius = "1rem",
    children,
    as: Component = "button",
    containerClassName,
    borderClassName,
    duration,
    className,
    ...otherProps
}: MovingBorderButton): JSX.Element {
    return (
        <Component
            className={cn(
                "bg-transparent relative p-[1px] overflow-hidden",
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
                            "h-20 w-20 opacity-[0.8] bg-[radial-gradient(var(--sky-500)_40%,transparent_60%)]",
                            borderClassName
                        )}
                    />
                </MovingBorder>
            </div>

            <div
                className={cn(
                    "font-semibold relative bg-slate-900/[0.7] border border-slate-800 backdrop-blur-xl text-white flex items-center justify-center w-full h-full text-sm antialiased hover:bg-gray-900 transition-colors duration-300",
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
