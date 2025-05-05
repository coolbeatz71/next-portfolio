import { Fragment } from "react";
import { useTranslation } from "react-i18next";

interface HighlightProps {
    children: React.ReactNode;
}

function Highlight({ children }: HighlightProps) {
    return (
        <span className="text-black dark:text-white font-semibold">
            {" "}
            {children}
        </span>
    );
}

export function AboutMeDescription() {
    const { t } = useTranslation();
    const textStyle = "text-neutral-500 dark:text-neutral-400 leading-loose!";
    return (
        <Fragment>
            <h2 className="text-start mb-4 text-3xl font-bold tracking-tight md:leading-relaxed text-stone-700 dark:text-stone-200">
                {t("aboutme_title")}
            </h2>
            <p className="text-md sm:text-lg md:text-xl lg:text-xl text-start text-neutral-500 dark:text-neutral-400 tracking-tight md:leading-relaxed">
                {t("aboutme_subtitle")}
            </p>
            <hr className="h-px my-4 md:my-8 border-0 bg-slate-500/10 dark:bg-slate-400/10" />
            <h2 className="text-start mb-4 text-xl md:text-xl xl:text-2xl font-bold leading-tight! text-slate-700 dark:text-slate-300">
                {t("about_myself")}
            </h2>

            <p className={`text-start ${textStyle} mb-4`}>
                {t("about_myself_content", { name: "Jean-Vincent" })}
                <Highlight>JavaScript</Highlight>,
                <Highlight>HTML/CSS</Highlight>,<Highlight>PHP</Highlight>,
                <Highlight>C#</Highlight>, {t("about_myself_content_2")}
                <Highlight>ReactJS</Highlight>,<Highlight>NodeJS</Highlight>,
                <Highlight>Typescript</Highlight>,<Highlight>Angular</Highlight>
                ,<Highlight>Laravel</Highlight>,<Highlight>.NET</Highlight>,{" "}
                {t("and")} <Highlight>Dart/Flutter </Highlight>
                {t("about_myself_content_3")}
            </p>

            <p className={`text-start ${textStyle} mb-4`}>
                {t("about_myself_content_4")}
            </p>

            <p className={`text-start ${textStyle}`}>
                {t("about_myself_content_5")}
            </p>
        </Fragment>
    );
}
