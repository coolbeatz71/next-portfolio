import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import type { ReactNode } from "react";
import { useMemo } from "react";
import locales from "@/shared/i18n";
import { getLanguage } from "@/shared/lib/getLanguage";

interface I18nProviderProps {
    children: ReactNode;
}

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
