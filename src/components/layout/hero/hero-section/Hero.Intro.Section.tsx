import { Fragment } from "react";

import GradientShineButton from "@/components/shared/buttons/gradient-shine/GradientShine.Button";
import FlipWords from "@/components/shared/flip-words/FlipWords";
import SocialLinks from "@/components/shared/social-links/SocialLinks";
import { useTranslation } from "react-i18next";

export default function HeroIntroSection(): JSX.Element {
    const { t } = useTranslation();

    return (
        <Fragment>
            <div className="flex flex-row gap-2 z-10">
                <SocialLinks />
            </div>
            <br />
            <h1 className="max-w-xl mb-4 font-bold dark:text-white text-black text-center md:text-start">
                <span className="text-3xl sm:text-3xl lg:text-4xl">
                    {t("i_am", { name: "Jean-Vincent" })}
                </span>
                <br />
                <div className="text-4xl sm:text-4xl lg:text-5xl !leading-loose">
                    <FlipWords
                        words={[
                            t("software_engineer"),
                            t("frontend_engineer"),
                            t("mobile_engineer")
                        ]}
                        className="pl-0 text-indigo-700 dark:text-indigo-500 xl:text-5xl"
                    />
                </div>
            </h1>
            <p className="mb-6 font-semibold lg:mb-8 text-center md:text-start text-sm sm:text-md lg:text-lg text-slate-600 dark:text-slate-400">
                FullStack - PREN/MEAN - PHP/Laravel - Dart/Flutter
            </p>
            <GradientShineButton>{t("download_resume")}</GradientShineButton>
        </Fragment>
    );
}
