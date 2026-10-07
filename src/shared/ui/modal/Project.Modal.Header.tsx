import { memo } from "react";
import { useTranslation } from "react-i18next";
import { IconArrowLeftLong } from "@/shared/config/icons";
import { padNumber } from "@/shared/lib/padNumber";
import type { ProjectModalHeaderProps } from "./types";

/**
 * Project modal header component.
 *
 * @component
 *
 * @description
 * Renders the pinned header of the project case study modal with a link back to the
 * project grid and the position of the current project within its list.
 *
 * @param {ProjectModalHeaderProps} props - Component props
 * @param {number} props.current - One-based position of the project on display
 * @param {number} props.total - Total number of projects in the current list
 * @param {() => void} props.onBack - Handler to dismiss the modal and return to the grid
 *
 * @returns The project modal header element
 */
function ProjectModalHeaderComponent({ current, total, onBack }: ProjectModalHeaderProps) {
    const { t } = useTranslation();

    return (
        <div className="grid grid-cols-3 items-center gap-2">
            <button
                type="button"
                onClick={onBack}
                className={`flex items-center gap-2 justify-self-start text-body-sm font-medium
                    text-typography-muted hover:text-typography-primary duration-fast`}
            >
                <IconArrowLeftLong className="h-3 w-3 shrink-0" aria-hidden="true" />
                <span className="hidden sm:inline">{t("back_to_work")}</span>
            </button>

            <span
                className={`justify-self-center text-meta font-semibold uppercase tracking-widest
                    text-typography-muted`}
            >
                {padNumber(current)} / {padNumber(total)}
            </span>
        </div>
    );
}

export const ProjectModalHeader = memo(ProjectModalHeaderComponent);
