import { ITimelineEntry } from "@/features/experience/data/types";
import { IconGlobe } from "@/shared/config/icons";
import { GridPatternBackground } from "../background/GridPattern.Background";

/**
 * Full timeline component.
 *
 * @component
 *
 * @description
 * Renders a condensed card-based list of timeline entries without a progress line.
 * Each entry is displayed as a bordered card with a grid pattern background decoration.
 * Used in compact view contexts such as the side menu.
 *
 * @param {{ data: ITimelineEntry[] }} props - Component props
 * @param {ITimelineEntry[]} props.data - Ordered list of timeline entries to display
 *
 * @returns The full timeline list element
 */
export const TimelineFull = ({ data }: { data: ITimelineEntry[] }) => {
    return (
        <div className="mx-auto">
            <div className="relative">
                {data.map((item) => (
                    <div key={item.id} className="flex justify-start mb-4">
                        <div className="relative w-full border rounded-lg bg-surface-timeline border-outline-timeline p-3 md:p-4 pb-6!">
                            <div className="absolute top-0 bottom-0 w-[70%] opacity-50 z-10">
                                <GridPatternBackground size={20} />
                            </div>
                            <div className="relative z-50">
                                <h3 className="block text-sm md:text-lg font-bold text-typography-timeline leading-loose!">
                                    <div className="flex justify-between items-center">
                                        {item.title}
                                        <p className="flex items-center gap-1 text-xs font-medium text-typography-timeline-meta">
                                            <IconGlobe /> {item.location}
                                        </p>
                                    </div>
                                    <p className="flex text-sm! font-normal! text-typography-timeline">
                                        {item.subtitle}
                                    </p>
                                </h3>
                                {item.content}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
