import { useTranslation } from "react-i18next";
import { IconArrowUpRight, IconCodeBranch } from "@/shared/config/icons";
import { ActionButton } from "@/shared/ui/buttons/Action.Button";
import type { LinkProps, ProjectModalLinksProps } from "./types";

function Link({ href, isVisible, children }: LinkProps) {
    return isVisible ? (
        <a target="_blank" rel="noopener noreferrer" href={href || ""}>
            {children}
        </a>
    ) : (
        <div className="hidden" />
    );
}

/**
 * Project modal links component.
 *
 * @component
 *
 * @description
 * Renders the call-to-action row of the project case study hero: an outlined button for
 * the live link and a primary one for the source code. Both render as spans, since they
 * sit inside an anchor. Only renders when at least one link is available.
 *
 * @param {ProjectModalLinksProps} props - Component props
 * @param {IProjectByStack} props.project - Project data with link flags and URLs
 *
 * @returns The project modal links element, or null when no links are available
 */
export function ProjectModalLinks({ project }: ProjectModalLinksProps) {
    const { t } = useTranslation();
    const hasLinks = project.hasLiveLink || project.hasSourceCode;

    if (!hasLinks) return null;

    return (
        <div className="flex flex-wrap items-center gap-3">
            <Link href={project.liveLink} isVisible={project.hasLiveLink}>
                <ActionButton as="span" variant="outline">
                    <IconArrowUpRight className="h-3 w-3 shrink-0" aria-hidden="true" />
                    {t("open")}
                </ActionButton>
            </Link>

            <Link href={project.sourceCodeLink} isVisible={project.hasSourceCode}>
                <ActionButton as="span" variant="primary">
                    <IconCodeBranch className="h-3 w-3 shrink-0" aria-hidden="true" />
                    {t("source_code")}
                </ActionButton>
            </Link>
        </div>
    );
}
