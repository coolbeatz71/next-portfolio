import type { ElementType, HTMLAttributes, ReactNode } from "react";
import { cn } from "@/shared/lib/cn";

interface OutlineButton extends HTMLAttributes<HTMLButtonElement> {
    borderRadius?: string;
    children: ReactNode;
    as?: ElementType;
    containerClassName?: string;
    borderClassName?: string;
    duration?: number;
    className?: string;
}
/**
 * Outline button component.
 *
 * @component
 *
 * @description
 * Renders a button with an animated slate border that adapts to light and dark mode.
 * Supports rendering as any HTML element via the `as` prop.
 *
 * @param {OutlineButton} props - Component props
 * @param {ReactNode} props.children - Button label content
 * @param {ElementType} [props.as] - HTML element to render as; defaults to "button"
 * @param {string} [props.borderRadius] - Border radius of the button; defaults to "1rem"
 * @param {string} [props.className] - Additional class names for the button
 * @param {string} [props.containerClassName] - Additional class names for the outer container
 * @param {string} [props.borderClassName] - Additional class names for the border element
 * @param {number} [props.duration] - Animation duration in milliseconds
 *
 * @returns The outline button element
 */
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
