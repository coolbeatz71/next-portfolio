import { memo } from "react";
import { cn } from "@/shared/lib/cn";
import { ExperienceCardItem } from "./Experience.Card.Item";
import type { ExperienceCardProps } from "./types";

const HEADER_CLASSNAME = `!mb-4 pb-4 border-b border-outlined leading-relaxed! !md:leading-loose
    text-body-sm md:text-sm text-typography-experience-header`;

const BODY_CLASSNAME = `list-disc space-y-2 text-[11.5pt] md:text-md leading-relaxed font-medium
    text-typography-experience-body`;

/**
 * Experience card component.
 *
 * @component
 *
 * @description
 * Renders the body of a timeline entry: an optional sentence about the company, then one
 * bullet per achievement. Both areas accept class overrides so the same card can be shown
 * compact inside the timeline and roomier inside the drawer.
 *
 * @param {ExperienceCardProps} props - Component props
 * @param {string} [props.summary] - Translated intro sentence about the company
 * @param {string[]} props.details - Translated bullet points describing the work done
 * @param {string} [props.headerClassName] - Additional Tailwind classes for the summary paragraph
 * @param {string} [props.bodyClassName] - Additional Tailwind classes for the bullet-point list
 *
 * @returns The experience card element
 */
function ExperienceCardComponent({
    summary,
    details,
    headerClassName,
    bodyClassName
}: ExperienceCardProps) {
    return (
        <div>
            {summary && <p className={cn(HEADER_CLASSNAME, headerClassName)}>{summary}</p>}

            <ul className={cn(BODY_CLASSNAME, bodyClassName)}>
                {details.map((detail) => (
                    <ExperienceCardItem key={detail}>{detail}</ExperienceCardItem>
                ))}
            </ul>
        </div>
    );
}

export const ExperienceCard = memo(ExperienceCardComponent);
