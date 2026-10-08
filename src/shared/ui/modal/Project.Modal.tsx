import { useTranslation } from "react-i18next";
import { useProjectCaseStudy } from "./hooks/useProjectCaseStudy";
import { ProjectModalChallenge } from "./Project.Modal.Challenge";
import { ProjectModalOverview } from "./Project.Modal.Overview";
import { ProjectModalOwnership } from "./Project.Modal.Ownership";
import { ProjectModalPreview } from "./Project.Modal.Preview";
import { ProjectModalSection } from "./Project.Modal.Section";
import type { ProjectModalProps } from "./types";

const SECTION_INDEX = {
    context: 1,
    challenge: 2,
    ownership: 3,
    outcome: 4
} as const;

const BODY_CLASSNAME = "text-body-sm text-typography-case-study-body";

/**
 * Project modal content component.
 *
 * @component
 *
 * @description
 * Renders the full case study of a project in three stacked blocks: the full-width media
 * preview, an overview band pairing the summary with the role, stack and links, and the
 * narrative covering the context, the challenge, the responsibilities owned and the outcome.
 *
 * @param {ProjectModalProps} props - Component props
 * @param {IProjectByStack} props.project - Project data to render in the modal
 *
 * @returns The project modal content element
 */
export function ProjectModal({ project }: ProjectModalProps) {
    const { t } = useTranslation();
    const caseStudy = useProjectCaseStudy(project);

    return (
        <div className="flex flex-col gap-8 md:gap-12">
            <ProjectModalPreview project={project} />

            <ProjectModalOverview project={project} caseStudy={caseStudy} />

            <div
                className={`flex flex-col gap-8 md:gap-12 border border-x-0 border-b-0
                    border-t border-outlined pt-8 md:pt-12`}
            >
                <ProjectModalSection
                    index={SECTION_INDEX.context}
                    label={t("project_context")}
                    title={caseStudy.contextTitle}
                >
                    <p className={BODY_CLASSNAME}>{caseStudy.contextBody}</p>
                </ProjectModalSection>

                <ProjectModalSection
                    index={SECTION_INDEX.challenge}
                    label={t("project_challenge")}
                    title={caseStudy.challengeTitle}
                >
                    <ProjectModalChallenge
                        constraint={caseStudy.constraint}
                        response={caseStudy.response}
                    />
                </ProjectModalSection>

                <ProjectModalSection index={SECTION_INDEX.ownership} label={t("project_ownership")}>
                    <ProjectModalOwnership items={caseStudy.ownership} />
                </ProjectModalSection>

                <ProjectModalSection index={SECTION_INDEX.outcome} label={t("project_outcome")}>
                    <p className={BODY_CLASSNAME}>{caseStudy.outcome}</p>
                </ProjectModalSection>
            </div>
        </div>
    );
}
