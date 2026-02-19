import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { useMemo } from "react";
import { getLanguage } from "@/helpers/getLanguage";
import locales from "@/locales";

import "@/styles/global.css";

type AppPropsWithError = AppProps & { err: unknown } & Record<string, unknown>;

const MyApp = ({ Component, pageProps, serverProps }: AppPropsWithError) => {
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
            <main className="bg-pattern_light dark:bg-pattern_dark bg-repeat bg-position-[79rem]">
                <Component {...pageProps} serverProps={serverProps} />
            </main>
        </ThemeProvider>
    );
};

export default MyApp;
