import { useTranslation } from "react-i18next";
import { IconArrowUpRight, IconCodeBranch } from "@/shared/config/icons";
import { LitUpBorderButton } from "@/shared/ui/buttons/LitUpBorder.Button";
import type { LinkProps, ProjectModalLinksProps } from "./types";

function Link({ href, isVisible, children }: LinkProps) {
    return isVisible ? (
        <a target="_blank" rel="noopener noreferrer" href={href || ""}>
            <div>{children}</div>
        </a>
    ) : (
        <div className="hidden" />
    );
}

/**
 * Project modal links footer component.
 *
 * @component
 *
 * @description
 * Renders the border-top footer inside the project modal with optional
 * source code and live link action buttons.
 * Only renders when at least one link is available.
 *
 * @param {ProjectModalLinksProps} props - Component props
 * @param {IProjectByStack} props.project - Project data with link flags and URLs
 *
 * @returns The project modal links footer element, or null when no links are available
 */
export function ProjectModalLinks({ project }: ProjectModalLinksProps) {
    const { t } = useTranslation();
    const hasLinks = project.hasLiveLink || project.hasSourceCode;

    if (!hasLinks) return null;

    return (
        <div className="border border-b-0 border-x-0 border-t border-outlined">
            <div className="flex justify-end gap-4 items-center pt-4">
                <Link href={project.sourceCodeLink} isVisible={project.hasSourceCode}>
                    <button
                        type="button"
                        className="py-2 text-sm font-medium text-typography-contact focus:outline-none rounded-lg hover:text-typography-inverse dark:hover:text-typography-on-primary"
                    >
                        <div className="flex justify-center items-center text-sm font-medium">
                            <IconCodeBranch className="mr-1 h-3 w-3" />
                            {t("source_code")}
                        </div>
                    </button>
                </Link>

                <Link href={project.liveLink} isVisible={project.hasLiveLink}>
                    <LitUpBorderButton className="w-32 p-[3.5px]">
                        <div className="flex justify-center items-center text-body-sm font-medium">
                            <IconArrowUpRight className="mr-2 h-3 w-3" />
                            {t("open")}
                        </div>
                    </LitUpBorderButton>
                </Link>
            </div>
        </div>
    );
}
