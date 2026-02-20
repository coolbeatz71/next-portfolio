import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import type { ReactNode } from "react";
import { useMemo } from "react";
import locales from "@/shared/i18n";
import { getLanguage } from "@/shared/lib/getLanguage";

/**
 * @interface I18nProviderProps
 * @property {ReactNode} children - Child elements to render inside the provider
 */
interface I18nProviderProps {
    children: ReactNode;
}

/**
 * Internationalisation provider component.
 *
 * @component
 *
 * @description
 * Initialises i18next with the user's preferred language from localStorage and
 * configures dayjs with the `relativeTime` plugin and the same locale. Must wrap
 * the application tree to ensure translations are available on first render.
 *
 * @param {I18nProviderProps} props - Component props
 * @param {ReactNode} props.children - Child elements to render inside the provider
 *
 * @returns The i18n-initialised children element
 */
export function I18nProvider({ children }: I18nProviderProps) {
    const userLang = getLanguage();

    useMemo(() => {
        const initLanguage = (lang: string): void => {
            locales.changeLanguage(lang);
            dayjs.locale(lang);
        };

        dayjs.extend(relativeTime);
        initLanguage(userLang as string);
    }, [userLang]);

    return <>{children}</>;
}
