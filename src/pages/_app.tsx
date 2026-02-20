import type { AppProps } from "next/app";
import { I18nProvider } from "@/app/providers/I18n.Provider";
import { ThemeProvider } from "@/app/providers/Theme.Provider";

import "@/app/styles/global.css";

type AppPropsWithError = AppProps & { err: unknown } & Record<string, unknown>;

/**
 * Custom Next.js App component.
 *
 * @description
 * Wraps every page with the ThemeProvider and I18nProvider, and applies the
 * repeating background pattern via the `<main>` element.
 *
 * @param {AppPropsWithError} props - Next.js app props extended with error and server props
 *
 * @returns The application shell with providers applied
 */
const MyApp = ({ Component, pageProps, serverProps }: AppPropsWithError) => {
    return (
        <ThemeProvider>
            <I18nProvider>
                <main className="bg-pattern_light dark:bg-pattern_dark bg-repeat bg-position-[79rem]">
                    <Component {...pageProps} serverProps={serverProps} />
                </main>
            </I18nProvider>
        </ThemeProvider>
    );
};

export default MyApp;
