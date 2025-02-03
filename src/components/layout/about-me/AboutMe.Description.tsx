import { Fragment } from "react";
import { useTranslation } from "react-i18next";

interface HighlightProps {
    children: React.ReactNode;
}

function Highlight({ children }: HighlightProps): JSX.Element {
    return (
        <span className="text-slate-700 dark:text-slate-300 font-semibold">
            {" "}
            {children}
        </span>
    );
}

export default function AboutMeDescription(): JSX.Element {
    const { t } = useTranslation();

    return (
        <Fragment>
            <h2 className="text-start mb-4 text-3xl font-bold tracking-tight md:leading-relaxed text-slate-700 dark:text-slate-300">
                {t("aboutme_title")}
            </h2>
            <p className="text-start text-slate-500 dark:text-slate-400 tracking-tight md:leading-relaxed text-md md:text-lg">
                {t("aboutme_subtitle")}
            </p>
            <hr className="h-px my-4 md:my-8 border-0 bg-slate-500/[0.2] dark:bg-slate-400/[0.2]" />
            <h2 className="text-start mb-4 text-xl font-bold !leading-tight md:text-xl xl:text-2xl text-slate-700 dark:text-slate-300">
                {t("about_myself")}
            </h2>

            <p className="text-start text-gray-500 dark:text-gray-400 !leading-relaxed mb-4">
                {t("about_myself_content", { name: "Jean-Vincent" })}
                <Highlight>JavaScript</Highlight>,
                <Highlight>HTML/CSS</Highlight>, {t("about_myself_content_2")}
                <Highlight>ReactJS</Highlight>,<Highlight>NodeJS</Highlight>,
                <Highlight>Typescript</Highlight>,<Highlight>Angular</Highlight>
                ,<Highlight>PHP</Highlight>, {t("and")}{" "}
                <Highlight>Flutter </Highlight>
                {t("about_myself_content_3")}
            </p>

            <p className="text-start text-gray-500 dark:text-gray-400 !leading-relaxed mb-4">
                {t("about_myself_content_4")}
            </p>

            <p className="text-start text-gray-500 dark:text-gray-400 !leading-relaxed">
                {t("about_myself_content_5")}
            </p>
        </Fragment>
    );
}
