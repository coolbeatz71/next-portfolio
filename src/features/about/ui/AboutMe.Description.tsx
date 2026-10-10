import { memo } from "react";
import { useTranslation } from "react-i18next";
import { AboutMeRow } from "./AboutMe.Row";
import type { HighlightProps } from "./types";

function Highlight({ children }: HighlightProps) {
    return <span className="font-bold text-accent">{children}</span>;
}

/**
 * About me description component.
 *
 * @component
 *
 * @description
 * Renders the personal bio as a labelled list: who I am, education and life outside
 * work, each a row pairing a rail label with its paragraph. Technology names inside
 * the first row are highlighted.
 *
 * @returns The about me description element
 */
function AboutMeDescriptionComponent() {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col gap-6">
            <dl className="flex flex-col">
                <AboutMeRow label={t("about_row_identity")}>
                    {t("about_myself_content", { name: "Jean-Vincent" })}{" "}
                    <Highlight>JavaScript</Highlight>, <Highlight>HTML/CSS</Highlight>,{" "}
                    <Highlight>PHP</Highlight>, <Highlight>C#</Highlight>,{" "}
                    {t("about_myself_content_2")} <Highlight>ReactJS</Highlight>,{" "}
                    <Highlight>NodeJS</Highlight>, <Highlight>Typescript</Highlight>,{" "}
                    <Highlight>Angular</Highlight>, <Highlight>Laravel</Highlight>,{" "}
                    <Highlight>.NET</Highlight>, {t("and")} <Highlight>Dart/Flutter</Highlight>{" "}
                    {t("about_myself_content_3")}
                </AboutMeRow>

                <AboutMeRow label={t("about_row_education")}>
                    {t("about_myself_content_4")}
                </AboutMeRow>

                <AboutMeRow label={t("about_row_outside")}>
                    {t("about_myself_content_5")}
                </AboutMeRow>
            </dl>
        </div>
    );
}

export const AboutMeDescription = memo(AboutMeDescriptionComponent);
