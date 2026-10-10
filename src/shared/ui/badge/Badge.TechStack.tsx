import { memo } from "react";
import type { BadgeTechStackProps } from "./types";

const BADGE_CLASSNAME = `inline-flex items-center gap-1.5 rounded-lg border 
border-outlined bg-surface-elevated/25 px-2.5 py-1.5 sm:gap-2 sm:px-3`;

const LABEL_CLASSNAME = `whitespace-nowrap text-xs sm:text-sm font-bold
    text-typography-primary`;

/**
 * Tech stack badge component.
 *
 * @component
 *
 * @description
 * Renders a technology pairing as a bordered pill with its logo, used under the hero
 * title. The label never wraps mid pairing, so the badges reflow as whole units on
 * narrow screens.
 *
 * @param {BadgeTechStackProps} props - Component props
 * @param {string} props.label - Technology pairing shown on the badge
 * @param {string} props.iconName - Tailwind background-image class for the logo
 *
 * @returns The tech stack badge element
 */
function BadgeTechStackComponent({ label, iconName }: BadgeTechStackProps) {
    return (
        <li className={BADGE_CLASSNAME}>
            <span
                aria-hidden="true"
                className={`bg-contain bg-no-repeat bg-center size-4 shrink-0 ${iconName}`}
            />
            <span className={LABEL_CLASSNAME}>{label}</span>
        </li>
    );
}

export const BadgeTechStack = memo(BadgeTechStackComponent);
