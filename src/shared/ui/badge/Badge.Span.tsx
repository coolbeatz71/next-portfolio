import { memo } from "react";

export interface BadgeSpanProps {
    text: string;
}

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
            className={`cursor-pointer bg-indigo-100 text-indigo-800 dark:bg-gray-700
                dark:text-indigo-400 border border-indigo-400 text-[7.5pt] font-semibold
                px-2.5 py-0.5 rounded-lg transition-colors duration-100
            `}
        >
            {text}
        </span>
    );
}

export const BadgeSpan = memo(BadgeSpanComponent);
