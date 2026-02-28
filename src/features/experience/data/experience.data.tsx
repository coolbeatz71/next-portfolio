import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { ExperienceItem } from "@/features/experience/ui/Experiences.Item";
import { cn } from "@/shared/lib/cn";
import type { ITimelineEntry } from "./types";

/**
 * Returns the full list of work experience timeline entries.
 *
 * @description Builds each entry's JSX content using i18next translations and
 * optional CSS class overrides for the header and body sections.
 *
 * @param [headerClassName] - Additional Tailwind classes for the role description header
 * @param [bodyClassName] - Additional Tailwind classes for the bullet-point list body
 * @returns Array of timeline entries describing the professional work history
 */
export function useExperienceTimeline(
    headerClassName?: string,
    bodyClassName?: string
): ITimelineEntry[] {
    const { t } = useTranslation();

    return useMemo(() => {
        const _headerClassName = cn(
            "italic !mb-4 leading-relaxed! !md:leading-loose text-body-sm md:text-sm text-typography-experience-header",
            headerClassName
        );
        const _bodyClassName = cn(
            "list-disc space-y-2 pl-4 md:pl-5 text-[11.5pt] md:text-md leading-relaxed font-medium text-typography-experience-body",
            bodyClassName
        );
        return [
            {
                id: "senior-software-engineer-1",
                title: t("senior_software_engineer"),
                location: "Aarhus, Denmark",
                href: "http://bestseller.com/",
                subtitle: "BESTSELLER A/S - Nov 2023 - Present",
                content: (
                    <div>
                        <p className={_headerClassName}>{t("companies.bestseller")}</p>
                        <div className="gap-4">
                            <ul className={_bodyClassName}>
                                <ExperienceItem>
                                    {t("experience_details.developed_maintained")}
                                </ExperienceItem>
                                <ExperienceItem>
                                    {t("experience_details.implemented_metrics")}
                                </ExperienceItem>
                                <ExperienceItem>
                                    {t("experience_details.authored_unit_tests")}
                                </ExperienceItem>
                                <ExperienceItem>
                                    {t("experience_details.engaged_with_architects")}
                                </ExperienceItem>
                            </ul>
                        </div>
                    </div>
                )
            },
            {
                id: "servicenow-developer",
                title: t("servicenow_developer"),
                location: "Brande, Denmark",
                href: "http://bestseller.com/",
                subtitle: "BESTSELLER A/S - Nov 2022 - Dec 2023",
                content: (
                    <div>
                        <div className="gap-4">
                            <ul className={_bodyClassName}>
                                <ExperienceItem>
                                    {t("experience_details.implemented_servicenow")}
                                </ExperienceItem>
                                <ExperienceItem>
                                    {t("experience_details.configured_email")}
                                </ExperienceItem>
                                <ExperienceItem>
                                    {t("experience_details.collaborated_departments")}
                                </ExperienceItem>
                                <ExperienceItem>
                                    {t("experience_details.developed_ui_actions")}
                                </ExperienceItem>
                            </ul>
                        </div>
                    </div>
                )
            },
            {
                id: "senior-software-engineer-2",
                title: t("senior_software_engineer"),
                location: "Kigali, Rwanda",
                href: "https://codeofafrica.com/EN",
                subtitle: "CODE OF AFRICA LTD - June 2021 - Aug 2022",
                content: (
                    <div>
                        <p className={_headerClassName}>{t("companies.codeofafrica")}</p>
                        <div className="gap-4">
                            <ul className={_bodyClassName}>
                                <ExperienceItem>
                                    {t("experience_details.boosted_seo")}
                                </ExperienceItem>
                                <ExperienceItem>
                                    {t("experience_details.led_frontend_team")}
                                </ExperienceItem>
                                <ExperienceItem>
                                    {t("experience_details.masterminded_evolution")}
                                </ExperienceItem>
                            </ul>
                        </div>
                    </div>
                )
            },
            {
                id: "senior-frontend-engineer-1",
                title: t("senior_frontend_engineer"),
                href: "https://alfatier.io/",
                location: "Hamburg, Germany",
                subtitle: "ALFATIER GmbH - Nov 2021 – Aug 2022",
                content: (
                    <div>
                        <p className={_headerClassName}>{t("companies.alfatier")}</p>
                        <div className="gap-4">
                            <ul className={_bodyClassName}>
                                <ExperienceItem>
                                    {t("experience_details.led_early_stage")}
                                </ExperienceItem>
                                <ExperienceItem>
                                    {t("experience_details.developed_frontend_features")}
                                </ExperienceItem>
                                <ExperienceItem>
                                    {t("experience_details.integrated_monitoring")}
                                </ExperienceItem>
                                <ExperienceItem>
                                    {t("experience_details.implemented_hubspot")}
                                </ExperienceItem>
                            </ul>
                        </div>
                    </div>
                )
            },
            {
                id: "frontend-engineer-1",
                title: t("frontend_engineer"),
                location: "Memphis, USA",
                href: "https://org.reconstruction.us/",
                subtitle: "RECONSTRUCTION - June 2021 – Nov 2021",
                content: (
                    <div>
                        <p className={_headerClassName}>{t("companies.reconstruction")}</p>
                        <div className="gap-4">
                            <ul className={_bodyClassName}>
                                <ExperienceItem>
                                    {t("experience_details.integrated_thinkific")}
                                </ExperienceItem>
                                <ExperienceItem>
                                    {t("experience_details.maintained_dashboard")}
                                </ExperienceItem>
                                <ExperienceItem>
                                    {t("experience_details.improved_performance")}
                                </ExperienceItem>
                                <ExperienceItem>
                                    {t("experience_details.introduced_git_workflow")}
                                </ExperienceItem>
                            </ul>
                        </div>
                    </div>
                )
            },
            {
                id: "frontend-engineer-2",
                title: t("frontend_engineer"),
                location: "Kigali, Rwanda",
                href: "https://exuus.rw/",
                subtitle: "EXUUS LTD - May 2020 - June 2021",
                content: (
                    <div>
                        <p className={_headerClassName}>{t("companies.exuus")}</p>
                        <div className="gap-4">
                            <ul className={_bodyClassName}>
                                <ExperienceItem>
                                    {t("experience_details.spearheaded_development")}
                                </ExperienceItem>
                                <ExperienceItem>
                                    {t("experience_details.participated_code_reviews")}
                                </ExperienceItem>
                                <ExperienceItem>
                                    {t("experience_details.implemented_e2e_tests")}
                                </ExperienceItem>
                                <ExperienceItem>
                                    {t("experience_details.worked_payment_integration")}
                                </ExperienceItem>
                                <ExperienceItem>
                                    {t("experience_details.implemented_multi_language")}
                                </ExperienceItem>
                            </ul>
                        </div>
                    </div>
                )
            },
            {
                id: "fullstack-engineer",
                title: t("fullstack_engineer_php"),
                location: "Kampala, Uganda",
                href: "https://akorion.com/",
                subtitle: "AKORION LTD - Aug 2019 - Jan 2020",
                content: (
                    <div>
                        <p className={_headerClassName}>{t("companies.akorion")}</p>
                        <div className="gap-4">
                            <ul className={_bodyClassName}>
                                <ExperienceItem>
                                    {t("experience_details.used_php_lumen")}
                                </ExperienceItem>
                                <ExperienceItem>
                                    {t("experience_details.implemented_couchbase")}
                                </ExperienceItem>
                                <ExperienceItem>
                                    {t("experience_details.pioneered_phpunit")}
                                </ExperienceItem>
                                <ExperienceItem>
                                    {t("experience_details.crafted_interfaces")}
                                </ExperienceItem>
                            </ul>
                        </div>
                    </div>
                )
            },
            {
                id: "associate-engineer",
                title: t("fullstack_associate_engineer"),
                location: "Kigali, Rwanda",
                href: "https://andela.com/",
                subtitle: "ANDELA LTD - Mar 2019 - Apr 2020",
                content: (
                    <div>
                        <p className={_headerClassName}>{t("companies.andela")}</p>
                        <div className="gap-4">
                            <ul className={_bodyClassName}>
                                <ExperienceItem>
                                    {t("experience_details.completed_training")}
                                </ExperienceItem>
                                <ExperienceItem>
                                    {t("experience_details.worked_with_leads")}
                                </ExperienceItem>
                                <ExperienceItem>
                                    {t("experience_details.implemented_backend")}
                                </ExperienceItem>
                                <ExperienceItem>
                                    {t("experience_details.integrated_slack")}
                                </ExperienceItem>
                            </ul>
                        </div>
                    </div>
                )
            },
            {
                id: "engineer-freelance",
                title: t("freelance_engineer"),
                location: "Goma, DR Congo",
                href: "https://jkss-connect.com/",
                subtitle: "JKSS CONNECT - Sept 2017 - Feb 2019",
                content: (
                    <div>
                        <p className={_headerClassName}>{t("companies.jkss")}</p>
                        <div className="gap-4">
                            <ul className={_bodyClassName}>
                                <ExperienceItem>
                                    {t("experience_details.innovated_sync")}
                                </ExperienceItem>
                                <ExperienceItem>
                                    {t("experience_details.integrated_qr")}
                                </ExperienceItem>
                                <ExperienceItem>{t("experience_details.led_agile")}</ExperienceItem>
                                <ExperienceItem>
                                    {t("experience_details.deployed_cross_platform")}
                                </ExperienceItem>
                            </ul>
                        </div>
                    </div>
                )
            }
        ];
    }, [t, headerClassName, bodyClassName]);
}
