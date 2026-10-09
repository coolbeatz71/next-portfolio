import { memo } from "react";
import { useTranslation } from "react-i18next";
import { Reveal } from "@/shared/ui/scroll-reveal/Reveal";

const CELL_CLASSNAME = `flex flex-col gap-2 border-b border-outlined p-4
    sm:border-b-0 sm:border-r sm:pr-6 sm:last:border-r-0 last:border-b-0`;

const LABEL_CLASSNAME = "text-meta font-semibold uppercase tracking-widest text-typography-muted";

/**
 * About me stats component.
 *
 * @component
 *
 * @description
 * Renders the experience, education and location figures as a three column row, each
 * cell revealing itself as it scrolls into view.
 * The cells divide with vertical rules from the `sm` breakpoint and stack with
 * horizontal rules below it.
 *
 * @returns The about me stats element
 */
function AboutMeStatsComponent() {
    const { t } = useTranslation();

    const stats = [
        { label: t("about_stat_experience"), value: t("about_stat_experience_value") },
        { label: t("about_stat_education"), value: t("about_stat_education_value") },
        { label: t("about_stat_location"), value: t("about_stat_location_value") }
    ];

    return (
        <dl className="grid grid-cols-1 border-t border-outlined sm:grid-cols-3">
            {stats.map((stat, index) => (
                <Reveal key={stat.label} index={index} className={CELL_CLASSNAME}>
                    <dt className={LABEL_CLASSNAME}>{stat.label}</dt>
                    <dd className="font-bold text-typography-primary">{stat.value}</dd>
                </Reveal>
            ))}
        </dl>
    );
}

export const AboutMeStats = memo(AboutMeStatsComponent);
