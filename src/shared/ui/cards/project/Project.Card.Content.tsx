import { memo, useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { IconArrowUpRight, IconCodeBranch } from "@/shared/config/icons";
import { ARCHITECTURE_STACK, CARD_STACK_LIMIT } from "@/shared/config/project";
import { BadgeSpan } from "@/shared/ui/badge/Badge.Span";
import { ActionButton } from "@/shared/ui/buttons/Action.Button";
import type { ProjectContentProps } from "./types";

/**
 * Project card content component.
 *
 * @component
 *
 * @description
 * Renders the text side of a project card, including the name, description,
 * tech stack badges, and the live link and source code buttons. The stack is trimmed to keep
 * the card compact: architecture labels are dropped and the list is capped, with the
 * remainder shown as a counter. The full stack lives in the case study modal.
 *
 * @param {ProjectContentProps} props - Component props
 * @param {IProjectByStack} props.project - Project data containing name, stack, and links
 * @param {() => void} props.onClick - Handler called when the card content area is clicked
 * @param {string} props.translatedDescription - Pre-translated description string
 *
 * @returns The project card content element
 */
function ProjectCardContentComponent({
    project,
    onClick,
    translatedDescription
}: ProjectContentProps) {
    const { t } = useTranslation();
    const hasLinks = project.hasLiveLink || project.hasSourceCode;
    const stack = useMemo(() => {
        const visible = project.stack.filter((tech) => !ARCHITECTURE_STACK.has(tech));

        return {
            shown: visible.slice(0, CARD_STACK_LIMIT),
            hidden: Math.max(visible.length - CARD_STACK_LIMIT, 0)
        };
    }, [project.stack]);

    const handleKeyDown = useCallback(
        (e: React.KeyboardEvent) => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onClick();
            }
        },
        [onClick]
    );

    return (
        <div className="md:w-1/2 p-4 flex flex-col justify-between">
            <div onClick={onClick} onKeyDown={handleKeyDown}>
                <h3 className="cursor-text text-lg font-semibold mb-2 text-typography-primary duration-base">
                    {project.name}
                </h3>
                <p className="cursor-text text-typography-muted mb-4 line-clamp-4 text-body-sm">
                    {translatedDescription}
                </p>
                <div className="flex flex-wrap items-center gap-1 mb-4">
                    {stack.shown.map((tech) => (
                        <BadgeSpan key={tech} text={tech} />
                    ))}
                    {stack.hidden > 0 && <BadgeSpan variant="danger" text={`+${stack.hidden}`} />}
                </div>
            </div>

            {hasLinks ? (
                <div className="flex flex-wrap items-center justify-end gap-2">
                    {project.hasLiveLink && (
                        <a target="_blank" href={project.liveLink} rel="noopener noreferrer">
                            <ActionButton as="span" variant="outline">
                                <IconArrowUpRight aria-hidden="true" className="h-3 w-3 shrink-0" />
                                {t("open")}
                            </ActionButton>
                        </a>
                    )}

                    {project.hasSourceCode && (
                        <a target="_blank" href={project.sourceCodeLink} rel="noopener noreferrer">
                            <ActionButton as="span" variant="primary">
                                <IconCodeBranch aria-hidden="true" className="h-3 w-3 shrink-0" />
                                {t("source_code")}
                            </ActionButton>
                        </a>
                    )}
                </div>
            ) : (
                <div className="invisible p-[1.1rem]" />
            )}
        </div>
    );
}

export const ProjectCardContent = memo(ProjectCardContentComponent);
