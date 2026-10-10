import { memo } from "react";
import { useTranslation } from "react-i18next";
import { IconChevronLeft, IconChevronRight } from "@/shared/config/icons";
import { cn } from "@/shared/lib/cn";
import { padNumber } from "@/shared/lib/padNumber";
import { OutlineButton } from "@/shared/ui/buttons/Outline.Button";
import type { ProjectImageSliderControlsProps } from "./types";

const ARROW_RADIUS = "0.5rem";

const ARROW_CLASSNAME = `p-2.5 text-typography-contact hover:text-typography-primary transition-surface-fast
    focus:outline-none focus:ring-0 focus-visible:ring-2 focus-visible:ring-focus-surface`;

const FIRST_SLIDE_POSITION = 1;

/**
 * Project image slider controls component.
 *
 * @component
 *
 * @description
 * Renders the control row beneath the image slider: a progress dot per slide on one side,
 * and the slide counter with previous and next arrows on the other.
 *
 * @param {ProjectImageSliderControlsProps} props - Component props
 * @param {IImage[]} props.slides - Slides the controls navigate through
 * @param {number} props.currentIndex - Index of the slide on display
 * @param {() => void} props.onPrevious - Handler to show the previous slide
 * @param {() => void} props.onNext - Handler to show the next slide
 * @param {(index: number) => void} props.onSelect - Handler to jump straight to a slide
 *
 * @returns The project image slider controls element
 */
function ProjectImageSliderControlsComponent({
    slides,
    currentIndex,
    onPrevious,
    onNext,
    onSelect
}: ProjectImageSliderControlsProps) {
    const { t } = useTranslation();

    return (
        <div className="flex items-center justify-between gap-4">
            <div className="hidden sm:flex items-center gap-2">
                {slides.map((slide, index) => (
                    <button
                        type="button"
                        key={slide.alt}
                        aria-label={slide.alt}
                        onClick={() => onSelect(index)}
                        className={cn(
                            "h-1 rounded-full duration-base",
                            index === currentIndex ? "w-12 bg-primary-fill" : "w-4 bg-outlined"
                        )}
                    />
                ))}
            </div>

            <div
                className={`flex w-full sm:w-auto shrink-0 items-center justify-between
                    sm:justify-end gap-4`}
            >
                <span
                    className={`shrink-0 whitespace-nowrap text-meta font-semibold tracking-widest
                        text-typography-muted tabular-nums`}
                >
                    {padNumber(currentIndex + FIRST_SLIDE_POSITION)} / {padNumber(slides.length)}
                </span>

                <div className="flex items-center gap-1 md:gap-2">
                    <OutlineButton
                        onClick={onPrevious}
                        title={t("previous_image")}
                        className={ARROW_CLASSNAME}
                        borderRadius={ARROW_RADIUS}
                        aria-label={t("previous_image")}
                    >
                        <IconChevronLeft className="h-3 w-3" aria-hidden="true" />
                    </OutlineButton>

                    <OutlineButton
                        onClick={onNext}
                        title={t("next_image")}
                        className={ARROW_CLASSNAME}
                        borderRadius={ARROW_RADIUS}
                        aria-label={t("next_image")}
                    >
                        <IconChevronRight className="h-3 w-3" aria-hidden="true" />
                    </OutlineButton>
                </div>
            </div>
        </div>
    );
}

export const ProjectImageSliderControls = memo(ProjectImageSliderControlsComponent);
