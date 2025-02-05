import { Fragment } from "react";

import { Breadcrumb } from "@/components/shared/breadcrumb/Breadcrumb";
import GradientShineButton from "@/components/shared/buttons/gradient-shine/GradientShine.Button";
import SocialLinks from "@/components/shared/social-links/SocialLinks";
import TypeWriter from "@/components/shared/type-writer/TypeWriter";
import { useTranslation } from "react-i18next";

export default function HeroIntroSection(): JSX.Element {
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
                    className="pl-0 !leading-tight font-bold text-indigo-700 dark:text-indigo-500 text-3xl sm:text-4xl lg:text-5xl"
                />
            </h1>

            <Breadcrumb labels={techStackSummary} />

            <GradientShineButton>{t("download_resume")}</GradientShineButton>
        </Fragment>
    );
}
