import { Fragment } from "react";
import { useTranslation } from "react-i18next";
import { RESUME_LINK } from "@/shared/config/resume";
import { Breadcrumb } from "@/shared/ui/breadcrumb/Breadcrumb";
import { GradientShineButton } from "@/shared/ui/buttons/GradientShine.Button";
import { SocialLinks } from "@/shared/ui/social-links/SocialLinks";
import { TypeWriter } from "@/shared/ui/type-writer/TypeWriter";

export function HeroIntroSection() {
    const { t } = useTranslation();

    const techStackSummary = ["FullStack/PREN", "PHP/Laravel", "Dart/Flutter"];

    return (
        <Fragment>
            <div className="flex flex-row gap-2 z-10">
                <SocialLinks />
            </div>
            <h1 className="py-4 max-w-xl dark:text-slate-200 text-slate-700 text-start">
                <span className="text-2xl sm:text-2xl lg:text-4xl font-medium">
                    {t("i_am", { name: "Jean-Vincent" })}
                </span>
                <TypeWriter
                    words={[
                        t("software_engineer"),
                        t("frontend_engineer"),
                        t("mobile_engineer")
                    ]}
                    className="pl-0 leading-tight! text-3xl sm:text-4xl lg:text-5xl font-bold text-indigo-700 dark:text-indigo-500"
                />
            </h1>

            <Breadcrumb labels={techStackSummary} />

            <a
                target="_blank"
                rel="noopener noreferrer"
                href={RESUME_LINK}
                title="Download Resume"
            >
                <GradientShineButton>
                    {t("download_resume")}
                </GradientShineButton>
            </a>
        </Fragment>
    );
}
