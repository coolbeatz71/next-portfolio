import { memo } from "react";
import { useTranslation } from "react-i18next";
import { IconChevronLeft, IconChevronRight } from "@/shared/config/icons";
import type { ProjectModalNavProps } from "./types";

const NAV_BUTTON_CLASSNAME = `flex items-center gap-2 text-body-sm font-medium text-typography-muted
    hover:text-typography-primary duration-fast`;

/**
 * Project modal navigation component.
 *
 * @component
 *
 * @description
 * Renders the pinned footer of the project case study modal, letting the reader move to
 * the previous or next project without closing the dialog.
 *
 * @param {ProjectModalNavProps} props - Component props
 * @param {() => void} props.onPrevious - Handler to show the previous project
 * @param {() => void} props.onNext - Handler to show the next project
 *
 * @returns The project modal navigation element
 */
function ProjectModalNavComponent({ onPrevious, onNext }: ProjectModalNavProps) {
    const { t } = useTranslation();

    return (
        <div className="flex items-center justify-between gap-4">
            <button type="button" onClick={onPrevious} className={NAV_BUTTON_CLASSNAME}>
                <IconChevronLeft className="h-3 w-3 shrink-0" aria-hidden="true" />
                {t("previous_project")}
            </button>

            <button type="button" onClick={onNext} className={NAV_BUTTON_CLASSNAME}>
                {t("next_project")}
                <IconChevronRight className="h-3 w-3 shrink-0" aria-hidden="true" />
            </button>
        </div>
    );
}

export const ProjectModalNav = memo(ProjectModalNavComponent);
