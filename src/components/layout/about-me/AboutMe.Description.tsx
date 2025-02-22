import { Fragment } from "react";
import { useTranslation } from "react-i18next";

interface HighlightProps {
    children: React.ReactNode;
}

function Highlight({ children }: HighlightProps): JSX.Element {
    return (
        <span className="text-slate-600 dark:text-slate-300 font-semibold">
            {" "}
            {children}
        </span>
    );
}

export default function AboutMeDescription(): JSX.Element {
    const { t } = useTranslation();

    return (
        <Fragment>
            <h2 className="text-start mb-4 text-3xl font-bold tracking-tight md:leading-relaxed text-stone-700 dark:text-stone-300">
                {t("aboutme_title")}
            </h2>
            <p className="text-md sm:text-lg md:text-xl lg:text-xl text-start text-stone-500 dark:text-stone-400 tracking-tight md:leading-relaxed">
                {t("aboutme_subtitle")}
            </p>
            <hr className="h-px my-4 md:my-8 border-0 bg-slate-500/[0.2] dark:bg-slate-400/[0.2]" />
            <h2 className="text-start mb-4 text-xl md:text-xl xl:text-2xl font-bold !leading-tight text-stone-700 dark:text-stone-300">
                {t("about_myself")}
            </h2>

            <p className="text-start text-slate-500/80 dark:text-slate-400/80 !leading-relaxed mb-4">
                {t("about_myself_content", { name: "Jean-Vincent" })}
                <Highlight>JavaScript</Highlight>,
                <Highlight>HTML/CSS</Highlight>, {t("about_myself_content_2")}
                <Highlight>ReactJS</Highlight>,<Highlight>NodeJS</Highlight>,
                <Highlight>Typescript</Highlight>,<Highlight>Angular</Highlight>
                ,<Highlight>PHP</Highlight>, {t("and")}{" "}
                <Highlight>Dart/Flutter </Highlight>
                {t("about_myself_content_3")}
            </p>

            <p className="text-start text-slate-500/80 dark:text-slate-400/80 !leading-relaxed mb-4">
                {t("about_myself_content_4")}
            </p>

            <p className="text-start text-slate-500/80 dark:text-slate-400/80 !leading-relaxed">
                {t("about_myself_content_5")}
            </p>
        </Fragment>
    );
}
