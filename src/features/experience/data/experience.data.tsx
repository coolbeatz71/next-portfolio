import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { ExperienceCard } from "@/shared/ui/cards/experience/Experience.Card";
import type { ITimelineEntry } from "./types";

/**
 * Returns the full list of work experience timeline entries.
 *
 * @description Builds each entry's card content using i18next translations and
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

    return useMemo(
        () => [
            {
                id: "senior-software-engineer-1",
                title: t("senior_software_engineer"),
                location: "Aarhus, Denmark",
                href: "http://bestseller.com/",
                subtitle: "BESTSELLER A/S - Nov 2023 - Feb 2026",
                content: (
                    <ExperienceCard
                        summary={t("companies.bestseller")}
                        bodyClassName={bodyClassName}
                        headerClassName={headerClassName}
                        details={[
                            t("experience_details.developed_maintained"),
                            t("experience_details.implemented_metrics"),
                            t("experience_details.authored_unit_tests"),
                            t("experience_details.engaged_with_architects")
                        ]}
                    />
                )
            },
            {
                id: "servicenow-developer",
                title: t("servicenow_developer"),
                location: "Brande, Denmark",
                href: "http://bestseller.com/",
                subtitle: "BESTSELLER A/S - Nov 2022 - Dec 2023",
                content: (
                    <ExperienceCard
                        bodyClassName={bodyClassName}
                        headerClassName={headerClassName}
                        details={[
                            t("experience_details.implemented_servicenow"),
                            t("experience_details.configured_email"),
                            t("experience_details.collaborated_departments"),
                            t("experience_details.developed_ui_actions")
                        ]}
                    />
                )
            },
            {
                id: "senior-software-engineer-2",
                title: t("senior_software_engineer"),
                location: "Kigali, Rwanda",
                href: "https://codeofafrica.com/EN",
                subtitle: "CODE OF AFRICA LTD - June 2021 - Aug 2022",
                content: (
                    <ExperienceCard
                        summary={t("companies.codeofafrica")}
                        bodyClassName={bodyClassName}
                        headerClassName={headerClassName}
                        details={[
                            t("experience_details.boosted_seo"),
                            t("experience_details.led_frontend_team"),
                            t("experience_details.masterminded_evolution")
                        ]}
                    />
                )
            },
            {
                id: "senior-frontend-engineer-1",
                title: t("senior_frontend_engineer"),
                href: "https://alfatier.io/",
                location: "Hamburg, Germany",
                subtitle: "ALFATIER GmbH - Nov 2021 – Aug 2022",
                content: (
                    <ExperienceCard
                        summary={t("companies.alfatier")}
                        bodyClassName={bodyClassName}
                        headerClassName={headerClassName}
                        details={[
                            t("experience_details.led_early_stage"),
                            t("experience_details.developed_frontend_features"),
                            t("experience_details.integrated_monitoring"),
                            t("experience_details.implemented_hubspot")
                        ]}
                    />
                )
            },
            {
                id: "frontend-engineer-1",
                title: t("frontend_engineer"),
                location: "Memphis, USA",
                href: "https://org.reconstruction.us/",
                subtitle: "RECONSTRUCTION - June 2021 – Nov 2021",
                content: (
                    <ExperienceCard
                        summary={t("companies.reconstruction")}
                        bodyClassName={bodyClassName}
                        headerClassName={headerClassName}
                        details={[
                            t("experience_details.integrated_thinkific"),
                            t("experience_details.maintained_dashboard"),
                            t("experience_details.improved_performance"),
                            t("experience_details.introduced_git_workflow")
                        ]}
                    />
                )
            },
            {
                id: "frontend-engineer-2",
                title: t("frontend_engineer"),
                location: "Kigali, Rwanda",
                href: "https://exuus.rw/",
                subtitle: "EXUUS LTD - May 2020 - June 2021",
                content: (
                    <ExperienceCard
                        summary={t("companies.exuus")}
                        bodyClassName={bodyClassName}
                        headerClassName={headerClassName}
                        details={[
                            t("experience_details.spearheaded_development"),
                            t("experience_details.participated_code_reviews"),
                            t("experience_details.implemented_e2e_tests"),
                            t("experience_details.worked_payment_integration"),
                            t("experience_details.implemented_multi_language")
                        ]}
                    />
                )
            },
            {
                id: "fullstack-engineer",
                title: t("fullstack_engineer_php"),
                location: "Kampala, Uganda",
                href: "https://akorion.com/",
                subtitle: "AKORION LTD - Aug 2019 - Jan 2020",
                content: (
                    <ExperienceCard
                        summary={t("companies.akorion")}
                        bodyClassName={bodyClassName}
                        headerClassName={headerClassName}
                        details={[
                            t("experience_details.used_php_lumen"),
                            t("experience_details.implemented_couchbase"),
                            t("experience_details.pioneered_phpunit"),
                            t("experience_details.crafted_interfaces")
                        ]}
                    />
                )
            },
            {
                id: "associate-engineer",
                title: t("fullstack_associate_engineer"),
                location: "Kigali, Rwanda",
                href: "https://andela.com/",
                subtitle: "ANDELA LTD - Mar 2019 - Apr 2020",
                content: (
                    <ExperienceCard
                        summary={t("companies.andela")}
                        bodyClassName={bodyClassName}
                        headerClassName={headerClassName}
                        details={[
                            t("experience_details.completed_training"),
                            t("experience_details.worked_with_leads"),
                            t("experience_details.implemented_backend"),
                            t("experience_details.integrated_slack")
                        ]}
                    />
                )
            },
            {
                id: "engineer-freelance",
                title: t("freelance_engineer"),
                location: "Goma, DR Congo",
                href: "https://jkss-connect.com/",
                subtitle: "JKSS CONNECT - Sept 2017 - Feb 2019",
                content: (
                    <ExperienceCard
                        summary={t("companies.jkss")}
                        bodyClassName={bodyClassName}
                        headerClassName={headerClassName}
                        details={[
                            t("experience_details.innovated_sync"),
                            t("experience_details.integrated_qr"),
                            t("experience_details.led_agile"),
                            t("experience_details.deployed_cross_platform")
                        ]}
                    />
                )
            }
        ],
        [t, headerClassName, bodyClassName]
    );
}
