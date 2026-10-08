import { memo } from "react";
import { useTranslation } from "react-i18next";
import type { ProjectModalChallengeProps } from "./types";

const LABEL_CLASSNAME = "text-meta font-semibold uppercase tracking-widest text-typography-primary";

/**
 * Project modal challenge component.
 *
 * @component
 *
 * @description
 * Renders the challenge of a project case study as a stacked pair of ruled blocks: the
 * constraint that made it hard, then the response that answered it. The response carries
 * an accent rule so the two read as problem and answer rather than as equal halves.
 *
 * @param {ProjectModalChallengeProps} props - Component props
 * @param {string} props.constraint - The constraint that made the project hard
 * @param {string} props.response - How the constraint was answered
 *
 * @returns The project modal challenge element
 */
function ProjectModalChallengeComponent({ constraint, response }: ProjectModalChallengeProps) {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-3 border-l-2 border-outlined pl-6">
                <p className={LABEL_CLASSNAME}>{t("project_constraint")}</p>
                <p className="text-body-sm text-typography-case-study-body">{constraint}</p>
            </div>

            <div className="flex flex-col gap-3 border-l-2 border-primary-border pl-6">
                <p className={LABEL_CLASSNAME}>{t("project_response")}</p>
                <p className="text-body-sm text-typography-case-study-body">{response}</p>
            </div>
        </div>
    );
}

export const ProjectModalChallenge = memo(ProjectModalChallengeComponent);
