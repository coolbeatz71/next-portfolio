import { cn } from "@/shared/lib/cn";
import type { GradientShineButtonProps } from "./types";
/**
 * Gradient shine button component.
 *
 * @component
 *
 * @description
 * Renders a button with an indigo-to-blue gradient background and an animated
 * pink shine effect that rotates on hover.
 *
 * @param {GradientShineButtonProps} props - Component props
 * @param {ReactNode} props.children - Button label content
 * @param {string} [props.className] - Additional class names for the button
 *
 * @returns The gradient shine button element
 */
export function GradientShineButton({
    children,
    className
}: GradientShineButtonProps) {
    return (
        <button
            type="button"
            className={cn(
                "relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-medium text-primary-on-accent transition duration-moderate ease-out rounded-lg group hover:ring-[3px] hover:ring-focus-primary",
                className
            )}
        >
            <span className="absolute inset-0 w-full h-full bg-linear-to-br from-primary-gradient-start via-primary-gradient-mid to-primary-gradient-end" />
            <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-slow origin-bottom-left transform rotate-45 translate-x-24 bg-shine rounded-full opacity-30 group-hover:rotate-90 ease" />
            <span className="relative text-typography-on-primary font-medium text-sm">
                {children}
            </span>
        </button>
    );
}
