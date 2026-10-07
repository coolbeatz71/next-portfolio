import { memo } from "react";
import { padNumber } from "@/shared/lib/padNumber";
import type { ProjectModalSectionProps } from "./types";

/**
 * Project modal section component.
 *
 * @component
 *
 * @description
 * Renders a numbered section of the project case study narrative as a two-column editorial
 * row: the zero-padded ordinal and uppercase label sit in a narrow rail, the optional headline
 * and the section body fill the wider column. Stacks below the `md` breakpoint.
 *
 * @param {ProjectModalSectionProps} props - Component props
 * @param {number} props.index - One-based position of the section
 * @param {string} props.label - Short uppercase label naming the section
 * @param {string} [props.title] - Optional headline introducing the section body
 * @param {ReactNode} props.children - Section body content
 *
 * @returns The project modal section element
 */
function ProjectModalSectionComponent({ index, label, title, children }: ProjectModalSectionProps) {
    return (
        <section className="grid gap-4 md:grid-cols-4 md:gap-10">
            <h3
                className={`text-meta font-semibold uppercase tracking-widest text-primary-text
                    md:col-span-1 md:self-center`}
            >
                {padNumber(index)} / {label}
            </h3>

            <div className="flex flex-col gap-4 md:col-span-3">
                {title && (
                    <h4 className="text-xl font-semibold text-typography-heading">{title}</h4>
                )}

                {children}
            </div>
        </section>
    );
}

export const ProjectModalSection = memo(ProjectModalSectionComponent);
