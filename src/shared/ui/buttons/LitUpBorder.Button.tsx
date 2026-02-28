import { memo } from "react";
import { cn } from "@/shared/lib/cn";
import type { LitUpBorderButtonProps } from "./types";

/**
 * Lit-up border button component.
 *
 * @component
 *
 * @description
 * Renders a button with a glowing indigo-to-purple gradient border.
 * The inner content transitions to transparent on hover, revealing the gradient background.
 *
 * @param {LitUpBorderButtonProps} props - Component props
 * @param {ReactNode} props.children - Button label content
 * @param {string} [props.className] - Additional class names for the outer wrapper
 *
 * @returns The lit-up border button element
 */
function LitUpBorderButtonComponent({ children, className }: LitUpBorderButtonProps) {
    return (
        <button type="button" className={cn("p-1 relative", className)}>
            <div className="absolute inset-0 bg-linear-to-r from-border-gradient-start to-border-gradient-end rounded-lg" />
            <div
                className={`w-full py-1 md:py-1.5 bg-surface-raised rounded relative
                    group duration-fast text-typography-primary hover:text-typography-on-primary hover:bg-transparent
                `}
            >
                {children}
            </div>
        </button>
    );
}

export const LitUpBorderButton = memo(LitUpBorderButtonComponent);
