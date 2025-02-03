import { Fragment } from "react";

import GradientShineButton from "@/components/shared/buttons/gradient-shine/GradientShine.Button";
import SocialLinks from "@/components/shared/social-links/SocialLinks";
import TypeWriter from "@/components/shared/type-writer/TypeWriter";
import { useTranslation } from "react-i18next";

export default function HeroIntroSection(): JSX.Element {
    const { t } = useTranslation();

    return (
        <Fragment>
            <div className="flex flex-row gap-2 z-10">
                <SocialLinks />
            </div>
            <br />

            <div className="flex flex-col gap-12 z-10">
                <h1 className="max-w-xl dark:text-white text-black text-start">
                    <span className="text-3xl sm:text-3xl lg:text-4xl font-semibold">
                        {t("i_am", { name: "Jean-Vincent" })}
                    </span>
                    <TypeWriter
                        words={[
                            t("software_engineer"),
                            t("frontend_engineer"),
                            t("mobile_engineer")
                        ]}
                        className="pl-0 font-bold text-indigo-700 dark:text-indigo-500 text-5xl"
                    />
                </h1>
                <p className="mb-6 font-semibold lg:mb-8 text-center md:text-start text-sm sm:text-md lg:text-lg text-slate-600 dark:text-slate-400">
                    FullStack - PREN/MEAN - PHP/Laravel - Dart/Flutter
                </p>
            </div>
            <GradientShineButton>{t("download_resume")}</GradientShineButton>
        </Fragment>
    );
}
