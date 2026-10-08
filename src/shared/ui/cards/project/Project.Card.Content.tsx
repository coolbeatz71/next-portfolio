import { memo, useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { IconArrowUpRight, IconCodeBranch } from "@/shared/config/icons";
import { ARCHITECTURE_STACK, CARD_STACK_LIMIT } from "@/shared/config/project";
import { BadgeSpan } from "@/shared/ui/badge/Badge.Span";
import { ActionButton } from "@/shared/ui/buttons/Action.Button";
import type { ProjectContentProps } from "./types";

const EYEBROW_CLASSNAME = "text-meta font-bold uppercase tracking-widest text-primary-text";

/**
 * Project card content component.
 *
 * @component
 *
 * @description
 * Renders the body of a project card beneath its cover image: the category, name,
 * description and tech stack, then a footer pairing the case study link with the
 * live and source code buttons. The stack is trimmed to keep the card compact,
 * dropping architecture labels and capping the list with a counter.
 *
 * @param {ProjectContentProps} props - Component props
 * @param {() => void} props.onClick - Handler called when the card content area is clicked
 * @param {IProjectByStack} props.project - Project data containing name, stack, and links
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
        <div className="flex grow flex-col pt-4">
            <div onClick={onClick} onKeyDown={handleKeyDown}>
                <p className={EYEBROW_CLASSNAME}>{t(`${project.caseStudy}.category`)}</p>

                <h3 className="cursor-text mt-3 text-xl md:text-2xl font-bold text-typography-heading">
                    {project.name}
                </h3>

                <p className="cursor-text mt-3 line-clamp-3 text-sm leading-relaxed text-typography-muted">
                    {translatedDescription}
                </p>
            </div>

            <div className="my-5 flex flex-wrap items-center gap-2">
                {stack.shown.map((tech) => (
                    <BadgeSpan key={tech} text={tech} />
                ))}
                {stack.hidden > 0 && <BadgeSpan variant="danger" text={`+${stack.hidden}`} />}
            </div>

            {hasLinks && (
                <div
                    className={`mt-auto flex flex-wrap items-center justify-between gap-4 border-t
                        border-outlined pt-4`}
                >
                    <div className="flex flex-wrap items-center gap-2">
                        {project.hasLiveLink && (
                            <a target="_blank" href={project.liveLink} rel="noopener noreferrer">
                                <ActionButton as="span" variant="outline">
                                    <IconArrowUpRight
                                        aria-hidden="true"
                                        className="h-3 w-3 shrink-0"
                                    />
                                    {t("open")}
                                </ActionButton>
                            </a>
                        )}

                        {project.hasSourceCode && (
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href={project.sourceCodeLink}
                            >
                                <ActionButton as="span" variant="primary">
                                    <IconCodeBranch
                                        aria-hidden="true"
                                        className="h-3 w-3 shrink-0"
                                    />
                                    {t("source_code")}
                                </ActionButton>
                            </a>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export const ProjectCardContent = memo(ProjectCardContentComponent);
