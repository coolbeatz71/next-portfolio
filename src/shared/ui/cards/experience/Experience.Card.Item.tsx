import { Fragment, memo } from "react";
import { IconCheckMark } from "@/shared/config/icons";
import type { ExperienceCardItemProps } from "./types";

const METRIC_PATTERN = /(\d+(?:[.,]\d+)?%)/g;
const IS_METRIC = /^\d+(?:[.,]\d+)?%$/;

/**
 * Wraps every percentage inside a string so the figures stand out from the prose.
 *
 * @param text - Bullet text that may contain percentage figures
 * @returns The text split into plain and highlighted fragments
 */
function highlightMetrics(text: string) {
    return text.split(METRIC_PATTERN).map((part, index) =>
        IS_METRIC.test(part) ? (
            <strong key={`${part}-${index}`} className="font-semibold text-accent">
                {part}
            </strong>
        ) : (
            <Fragment key={`${part}-${index}`}>{part}</Fragment>
        )
    );
}

/**
 * Experience card item component.
 *
 * @component
 *
 * @description
 * Renders a single bullet point in an experience timeline entry, with a brand checkmark
 * followed by the item text. Percentage figures in the text are picked out in the accent
 * color so the measurable results read at a glance.
 *
 * @param {ExperienceCardItemProps} props - Component props
 * @param {ReactNode} props.children - The text content of the experience bullet point
 *
 * @returns The experience item element
 */
function ExperienceCardItemComponent({ children }: ExperienceCardItemProps) {
    return (
        <li className="flex flex-row space-x-2 my-2 list-none">
            <IconCheckMark size={10} className="text-accent mt-2 shrink-0 text-xs" />
            <span>{typeof children === "string" ? highlightMetrics(children) : children}</span>
        </li>
    );
}

export const ExperienceCardItem = memo(ExperienceCardItemComponent);
