import { memo } from "react";
import { Reveal } from "@/shared/ui/scroll-reveal/Reveal";
import type { AboutMeRowProps } from "./types";

/**
 * About me row component.
 *
 * @component
 *
 * @description
 * Renders one labelled row of the personal bio as a two column editorial pair: the label
 * sits in a narrow rail and the body fills the wider column. Stacks below the `md`
 * breakpoint so the label reads as a heading above its text.
 *
 * @param {AboutMeRowProps} props - Component props
 * @param {string} props.label - Short uppercase label naming the row
 * @param {ReactNode} props.children - Row body content
 *
 * @returns The about me row element
 */
function AboutMeRowComponent({ label, children }: AboutMeRowProps) {
    return (
        <Reveal className="grid gap-3 py-6 md:grid-cols-4 md:gap-4">
            <dt
                className={`text-meta font-bold uppercase tracking-widest
                    text-typography-muted md:col-span-1 md:self-center`}
            >
                {label}
            </dt>

            <dd className="text-md leading-loose text-typography-subtle md:col-span-3">
                {children}
            </dd>
        </Reveal>
    );
}

export const AboutMeRow = memo(AboutMeRowComponent);
