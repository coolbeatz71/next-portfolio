import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import type { IProjectByStack } from "@/features/projects/data/types";
import type { IProjectCaseStudy } from "@/shared/ui/modal/types";

const CASE_STUDY_FIELD = {
    category: "category",
    contextTitle: "context_title",
    contextBody: "context_body",
    challengeTitle: "challenge_title",
    constraint: "constraint",
    response: "response",
    ownership: "ownership",
    outcome: "outcome"
} as const;

/**
 * Project case study hook.
 *
 * @description
 * Resolves every translated string of a project case study from its base i18n key,
 * so the modal components only ever deal with ready-to-render content.
 *
 * @param project - Project whose case study should be translated
 *
 * @returns The translated case study content
 */
export function useProjectCaseStudy(project: IProjectByStack): IProjectCaseStudy {
    const { t } = useTranslation();

    return useMemo(() => {
        const key = (field: string): string => `${project.caseStudy}.${field}`;

        return {
            role: t(project.role),
            summary: t(project.description),
            category: t(key(CASE_STUDY_FIELD.category)),
            contextTitle: t(key(CASE_STUDY_FIELD.contextTitle)),
            contextBody: t(key(CASE_STUDY_FIELD.contextBody)),
            challengeTitle: t(key(CASE_STUDY_FIELD.challengeTitle)),
            constraint: t(key(CASE_STUDY_FIELD.constraint)),
            response: t(key(CASE_STUDY_FIELD.response)),
            outcome: t(key(CASE_STUDY_FIELD.outcome)),
            ownership: t(key(CASE_STUDY_FIELD.ownership), {
                returnObjects: true
            }) as unknown as string[]
        };
    }, [project, t]);
}
