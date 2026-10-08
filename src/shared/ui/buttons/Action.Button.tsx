import { memo } from "react";
import type { ActionButtonProps } from "./types";

const BASE_CLASSNAME = `inline-flex items-center justify-center gap-1.5 rounded-lg px-3 py-1.5
    text-xs font-medium focus:outline-none focus:ring-2 focus:ring-focus-primary duration-fast`;

const VARIANT_CLASSNAME = {
    primary: "bg-primary-fill text-typography-on-primary hover:bg-primary-deep",
    outline: "border border-outlined text-typography-primary hover:bg-surface-hover"
} as const;

/**
 * Action button component.
 *
 * @component
 *
 * @description
 * Renders a small, plain action button in the same style as the contact form submit:
 * a solid brand fill for the primary variant, a bordered surface for the outline one.
 * Renders as any element through `as`, so it can sit inside an anchor without nesting
 * a button in a link.
 *
 * Classes are concatenated rather than merged through `cn`: tailwind-merge reads the
 * custom text size tokens as colors and would drop them.
 *
 * @param {ActionButtonProps} props - Component props
 * @param {ReactNode} props.children - Button label content
 * @param {"primary" | "outline"} [props.variant] - Color variant; defaults to "primary"
 * @param {ElementType} [props.as] - Element to render as; defaults to "button"
 * @param {string} [props.className] - Additional class names
 *
 * @returns The action button element
 */
function ActionButtonComponent({
    children,
    className,
    variant = "primary",
    as: Component = "button",
    ...otherProps
}: ActionButtonProps) {
    return (
        <Component
            type="button"
            className={`${BASE_CLASSNAME} ${VARIANT_CLASSNAME[variant]} ${className ?? ""}`}
            {...otherProps}
        >
            {children}
        </Component>
    );
}

export const ActionButton = memo(ActionButtonComponent);
