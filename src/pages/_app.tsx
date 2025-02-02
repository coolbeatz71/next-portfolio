import { getLanguage } from "@/helpers/getLanguage";
import { cn } from "@/helpers/mergeClassName";
import type { IUnknownObject } from "@/interfaces/app";
import locales from "@/locales";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import { Montserrat } from "next/font/google";
import { useMemo } from "react";

import "@/styles/global.scss";

type AppPropsWithError = AppProps & { err: unknown } & IUnknownObject;

const font = Montserrat({ subsets: ["latin"], preload: true });

const MyApp = ({
    Component,
    pageProps,
    serverProps
}: AppPropsWithError): JSX.Element => {
    const userLang = getLanguage();

    useMemo(() => {
        const initLanguage = (lang: string): void => {
            locales.changeLanguage(lang);
            dayjs.locale(lang);
        };

        dayjs.extend(relativeTime);
        initLanguage(userLang as string);
    }, [userLang]);

    return (
        <ThemeProvider
            enableSystem
            attribute="class"
            defaultTheme="light"
            themes={["light", "dark"]}
        >
            <main
                className={cn(
                    "bg-pattern_light dark:bg-pattern_dark bg-no-repeat bg-fixed bg-cover",
                    font.className
                )}
            >
                <Component {...pageProps} serverProps={serverProps} />
            </main>
        </ThemeProvider>
    );
};

export default MyApp;
