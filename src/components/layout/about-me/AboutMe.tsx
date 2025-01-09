import AboutMeImages from "@/components/layout/about-me/AboutMe.Images";

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

export default function AboutMe(): JSX.Element {
    const { t } = useTranslation();

    return (
        <section id="about" className="mx-auto max-w-7xl h-xl scroll-mt-48">
            <div className="grid grid-cols-1 xl:grid-cols-[3fr,3.5fr] gap-12">
                <div className="flex flex-col w-full items-center justify-center">
                    <AboutMeImages />
                </div>
                <div className="xl:flex flex-col relative max-w-3xl">
                    <h2 className="mb-4 text-2xl font-bold !leading-tight md:text-2xl xl:text-3xl text-slate-700 dark:text-slate-300">
                        {t("aboutme_title")}
                    </h2>
                    <p className="text-lg text-gray-500 !leading-8">
                        {t("aboutme_subtitle")}
                    </p>
                    <hr className="h-px my-8 border-0 bg-slate-500/[0.2] dark:bg-slate-400/[0.2]" />
                    <h2 className="mb-4 text-xl font-bold !leading-tight md:text-xl xl:text-2xl text-slate-700 dark:text-slate-300">
                        {t("about_myself")}
                    </h2>

                    <p className="text-gray-500 dark:text-gray-400 !leading-relaxed mb-4">
                        {t("about_myself_content", { name: "Jean-Vincent" })}
                        <Highlight>JavaScript</Highlight>,
                        <Highlight>HTML/CSS</Highlight>,{" "}
                        {t("about_myself_content_2")}
                        <Highlight>ReactJS</Highlight>,
                        <Highlight>NodeJS</Highlight>,
                        <Highlight>Typescript</Highlight>,
                        <Highlight>Angular</Highlight>,
                        <Highlight>PHP</Highlight>, {t("and")}{" "}
                        <Highlight>Flutter </Highlight>
                        {t("about_myself_content_3")}
                    </p>

                    <p className="text-gray-500 dark:text-gray-400 !leading-relaxed mb-4">
                        {t("about_myself_content_4")}
                    </p>

                    <p className="text-gray-500 dark:text-gray-400 !leading-relaxed">
                        {t("about_myself_content_5")}
                    </p>
                </div>
            </div>
        </section>
    );
}
