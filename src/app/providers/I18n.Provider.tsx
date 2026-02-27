import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { Fragment, useEffect, useRef } from "react";
import locales from "@/shared/i18n";
import { getLanguage } from "@/shared/lib/getLanguage";
import type { I18nProviderProps } from "./types";

/**
 * Internationalization provider component.
 *
 * @component
 *
 * @description
 * Initializes i18next with the user's preferred language from localStorage and
 * configures dayjs with the `relativeTime` plugin and the same locale. Must wrap
 * the application tree to ensure translations are available on first render.
 *
 * @param {I18nProviderProps} props - Component props
 * @param {ReactNode} props.children - Child elements to render inside the provider
 *
 * @returns The i18n-initialized children element
 */
export function I18nProvider({ children }: I18nProviderProps) {
    const userLang = useRef(getLanguage());

    useEffect(() => {
        const initLanguage = (lang: string): void => {
            locales.changeLanguage(lang);
            dayjs.locale(lang);
        };

        dayjs.extend(relativeTime);
        initLanguage(userLang.current as string);
    }, []);

    return <Fragment>{children}</Fragment>;
}
