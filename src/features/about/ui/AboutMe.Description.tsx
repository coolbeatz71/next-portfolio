import { Fragment, memo } from "react";
import { useTranslation } from "react-i18next";
import type { HighlightProps } from "./types";

function Highlight({ children }: HighlightProps) {
    return <span className="text-typography-inverse font-semibold"> {children}</span>;
}

/**
 * About me description component.
 *
 * @component
 *
 * @description
 * Renders the personal bio text for the about section, including
 * a title, subtitle, and multiple paragraphs with highlighted technology names.
 *
 * @returns The about me description element
 */
const textStyle = "text-typography-subtle leading-loose!";

export const AboutMeDescription = memo(function AboutMeDescription() {
    const { t } = useTranslation();

    return (
        <Fragment>
            <h2 className="text-start mb-4 text-3xl font-bold tracking-tight md:leading-relaxed text-typography-heading">
                {t("aboutme_title")}
            </h2>
            <p className="text-md sm:text-lg md:text-xl text-start text-typography-muted tracking-tight md:leading-relaxed">
                {t("aboutme_subtitle")}
            </p>
            <hr className="h-px my-4 md:my-8 border-0 bg-outlined" />
            <h2 className="text-start mb-4 text-xl xl:text-2xl font-bold leading-tight! text-typography-primary">
                {t("about_myself")}
            </h2>

            <p className={`text-start ${textStyle} mb-4`}>
                {t("about_myself_content", { name: "Jean-Vincent" })}
                <Highlight>JavaScript</Highlight>,<Highlight>HTML/CSS</Highlight>,
                <Highlight>PHP</Highlight>,<Highlight>C#</Highlight>, {t("about_myself_content_2")}
                <Highlight>ReactJS</Highlight>,<Highlight>NodeJS</Highlight>,
                <Highlight>Typescript</Highlight>,<Highlight>Angular</Highlight>,
                <Highlight>Laravel</Highlight>,<Highlight>.NET</Highlight>, {t("and")}{" "}
                <Highlight>Dart/Flutter </Highlight>
                {t("about_myself_content_3")}
            </p>

            <p className={`text-start ${textStyle} mb-4`}>{t("about_myself_content_4")}</p>

            <p className={`text-start ${textStyle}`}>{t("about_myself_content_5")}</p>
        </Fragment>
    );
});
