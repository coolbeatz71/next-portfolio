import { cn } from "@/shared/lib/cn";
import type { OutlineButton } from "./types";

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
                "inline-flex animate-outlined items-center justify-center border-4 border-surface-hover px-6 font-medium text-typography-nav focus:outline-none focus:ring-2 focus:ring-focus-surface",
                className
            )}
            {...otherProps}
        >
            {children}
        </Component>
    );
}
