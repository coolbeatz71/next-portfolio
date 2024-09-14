import { useMemo } from "react";
import dayjs from "dayjs";
import { ThemeProvider } from "next-themes";
import type { IUnknownObject } from "@/interfaces/app";
import type { AppProps } from "next/app";
import { Router } from "next/router";
import NProgress from "nprogress";
import { Montserrat } from "next/font/google";
import { getLanguage } from "@/helpers/getLanguage";
import locales from "@/locales";
import relativeTime from "dayjs/plugin/relativeTime";
import { cn } from "@/helpers/mergeClassName";

import "@/styles/global.scss";

type AppPropsWithError = AppProps & { err: unknown } & IUnknownObject;

const config = {
    speed: 800,
    easing: "ease",
    trickle: false
};

const nProgress = NProgress.configure(config);

Router.events.on("routeChangeStart", () => nProgress.set(0.9).start());
Router.events.on("routeChangeComplete", () => {
    window.scroll({
        top: 0,
        left: 0
    });
    nProgress.done();
});
Router.events.on("routeChangeError", () => nProgress.done());

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
