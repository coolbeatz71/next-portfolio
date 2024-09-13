import type { IUnknownObject } from "@/interfaces/app";
import dayjs from "dayjs";
import type { AppProps } from "next/app";
import { Router } from "next/router";
import NProgress from "nprogress";

import { getLanguage } from "@/helpers/getLanguage";
import locales from "@/locales";
import relativeTime from "dayjs/plugin/relativeTime";
import { useMemo } from "react";
import { ThemeProvider } from "next-themes";

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
            <Component {...pageProps} serverProps={serverProps} />
        </ThemeProvider>
    );
};

export default MyApp;
