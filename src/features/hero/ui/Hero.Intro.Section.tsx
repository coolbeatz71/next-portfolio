import { Fragment, memo, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { RESUME_LINK } from "@/shared/config/resume";
import { techStackBadgeList } from "@/shared/config/tech-stack";
import { BadgeTechStack } from "@/shared/ui/badge/Badge.TechStack";
import { GradientShineButton } from "@/shared/ui/buttons/GradientShine.Button";
import { SocialLinks } from "@/shared/ui/social-links/SocialLinks";
import { TypeWriter } from "@/shared/ui/type-writer/TypeWriter";

/**
 * Hero intro section component.
 *
 * @component
 *
 * @description
 * Renders the left side of the hero section with social links, animated role title,
 * tech stack badges, and a resume download button.
 *
 * @returns The hero intro section element
 */
function HeroIntroSectionComponent() {
    const { t, i18n } = useTranslation();

    const typeWriterWords = useMemo(
        () => [t("software_engineer"), t("frontend_engineer"), t("mobile_engineer")],
        [t, i18n.language]
    );

    return (
        <Fragment>
            <div className="flex flex-row gap-2 z-10">
                <SocialLinks />
            </div>
            <h1 className="py-4 max-w-xl text-typography-primary text-start">
                <span className="text-2xl lg:text-4xl font-medium">
                    {t("i_am", { name: "Jean-Vincent" })}
                </span>
                <TypeWriter
                    words={typeWriterWords}
                    className="pl-0 leading-tight! text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-on-accent"
                />
            </h1>

            <ul className="flex flex-wrap items-center gap-2 pb-6" aria-label="tech stack">
                {techStackBadgeList.map((tech) => (
                    <BadgeTechStack key={tech.label} label={tech.label} iconName={tech.iconName} />
                ))}
            </ul>

            <a target="_blank" href={RESUME_LINK} title="Download Resume" rel="noopener noreferrer">
                <GradientShineButton>{t("download_resume")}</GradientShineButton>
            </a>
        </Fragment>
    );
}

export const HeroIntroSection = memo(HeroIntroSectionComponent);
