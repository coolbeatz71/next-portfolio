import { cn } from "@/shared/lib/cn";
import { MovingBorder } from "@/shared/ui/buttons/MovingBorder";
import type { MovingBorderButton } from "./types";

/**
 * Moving border button component.
 *
 * @component
 *
 * @description
 * Renders a button with an animated indigo gradient that travels around the border.
 * Supports rendering as any HTML element via the `as` prop.
 *
 * @param {MovingBorderButton} props - Component props
 * @param {ReactNode} props.children - Button label content
 * @param {ElementType} [props.as] - HTML element to render as; defaults to "button"
 * @param {string} [props.borderRadius] - Border radius applied to the container; defaults to "0.65rem"
 * @param {number} [props.duration] - Duration of the border animation in milliseconds
 * @param {string} [props.className] - Additional class names for the inner content area
 * @param {string} [props.containerClassName] - Additional class names for the outer container
 * @param {string} [props.borderClassName] - Additional class names for the moving border element
 *
 * @returns The moving border button element
 */
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
                            "h-20 w-20 opacity-[0.8] bg-[radial-gradient(var(--color-primary-glow)_40%,transparent_60%)]",
                            borderClassName
                        )}
                    />
                </MovingBorder>
            </div>

            <div
                className={cn(
                    "font-semibold relative bg-surface-elevated border backdrop-blur-xl items-center justify-center w-full h-full text-sm antialiased transition-colors duration-moderate text-text-inverse border-border-neutral hover:bg-surface-raised",
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
