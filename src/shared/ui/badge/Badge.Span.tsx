import { memo } from "react";
import type { BadgeSpanProps } from "./types";

/**
 * Badge span component.
 *
 * @component
 *
 * @description
 * Renders a small inline badge with an indigo border, used to display tech stack labels or tags.
 *
 * @param {BadgeSpanProps} props - Component props
 * @param {string} props.text - The label text to display inside the badge
 *
 * @returns The badge span element
 */
function BadgeSpanComponent({ text }: BadgeSpanProps) {
    return (
        <span
            className={`cursor-pointer bg-primary-faint text-primary-text border border-primary-border text-badge font-semibold
                px-2.5 py-0.5 rounded-lg duration-fast
            `}
        >
            {text}
        </span>
    );
}

export const BadgeSpan = memo(BadgeSpanComponent);
