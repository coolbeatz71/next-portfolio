import { memo } from "react";
import { useTranslation } from "react-i18next";
import { BadgeSpan } from "@/shared/ui/badge/Badge.Span";
import { ProjectModalLinks } from "./Project.Modal.Links";
import type { ProjectModalOverviewProps } from "./types";

const OVERVIEW_LABEL_CLASSNAME =
    "text-meta font-semibold uppercase tracking-widest text-primary-text";

/**
 * Project modal overview component.
 *
 * @component
 *
 * @description
 * Renders the band below the preview: the project name, category and summary on one side,
 * the role, tech stack and action links on the other. Collapses to a single column
 * below the large breakpoint.
 *
 * @param {ProjectModalOverviewProps} props - Component props
 * @param {IProjectByStack} props.project - Project data providing the name, stack and links
 * @param {IProjectCaseStudy} props.caseStudy - Translated case study content
 *
 * @returns The project modal overview element
 */
function ProjectModalOverviewComponent({ project, caseStudy }: ProjectModalOverviewProps) {
    const { t } = useTranslation();

    return (
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
            <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-2">
                    <h2 className="text-4xl md:text-5xl font-bold text-typography-heading">
                        {project.name}
                    </h2>

                    <p className={OVERVIEW_LABEL_CLASSNAME}>{caseStudy.category}</p>
                </div>

                <p className="max-w-prose text-body-sm text-typography-muted">
                    {caseStudy.summary}
                </p>
            </div>

            <div className="flex flex-col justify-center gap-4">
                <div className="flex flex-wrap gap-y-8">
                    <div className="flex flex-col gap-2">
                        <h3 className={OVERVIEW_LABEL_CLASSNAME}>{t("my_role")}</h3>
                        <p className="text-body-sm font-semibold text-typography-primary">
                            {caseStudy.role}
                        </p>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h3 className={OVERVIEW_LABEL_CLASSNAME}>{t("project_stack")}</h3>
                        <div className="flex flex-wrap gap-2">
                            {project.stack.map((tech) => (
                                <BadgeSpan key={tech} text={tech} />
                            ))}
                        </div>
                    </div>
                </div>

                <ProjectModalLinks project={project} />
            </div>
        </div>
    );
}

export const ProjectModalOverview = memo(ProjectModalOverviewComponent);
