import { memo } from "react";
import type { BadgeSpanProps } from "./types";

const BASE_CLASSNAME = `cursor-pointer border text-badge font-semibold px-2.5 py-0.5
    rounded-lg duration-fast`;

const VARIANT_CLASSNAME = {
    primary: "bg-primary-faint text-primary-text border-primary-border",
    danger: "bg-danger/10 text-danger border-danger/40"
} as const;

/**
 * Badge span component.
 *
 * @component
 *
 * @description
 * Renders a small inline badge used to display tech stack labels or tags.
 * The primary variant carries the brand border, the danger variant the red one.
 *
 * The variant is concatenated rather than merged through `cn`: tailwind-merge reads the
 * custom `text-badge` font size as a text color and drops it against `text-primary-text`,
 * which leaves the badge at the inherited body size.
 *
 * @param {BadgeSpanProps} props - Component props
 * @param {string} props.text - The label text to display inside the badge
 * @param {"primary" | "danger"} [props.variant] - Color variant; defaults to "primary"
 *
 * @returns The badge span element
 */
function BadgeSpanComponent({ text, variant = "primary" }: BadgeSpanProps) {
    return <span className={`${BASE_CLASSNAME} ${VARIANT_CLASSNAME[variant]}`}>{text}</span>;
}

export const BadgeSpan = memo(BadgeSpanComponent);
