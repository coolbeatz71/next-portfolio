import dayjs from "dayjs";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useClickAway } from "react-use";
import { languageList, USER_LANG } from "@/shared/config/languages";
import locales from "@/shared/i18n";
import { getLanguage } from "@/shared/lib/getLanguage";
import { isServer } from "@/shared/lib/isServer";

/**
 * Language dropdown hook.
 *
 * @description
 * Encapsulates the open/close state, current language resolution,
 * language update logic, and click-away handling for the language dropdown.
 *
 * @returns ref, isOpen, currentLanguage, toggleDropdown, updateLanguage
 */
export function useLanguageDropdown() {
    const { i18n } = useTranslation();
    const ref = useRef<HTMLDivElement>(null);
    const [isOpen, setIsOpen] = useState(false);

    useClickAway(ref, () => setIsOpen(false));

    const toggleDropdown = useCallback(() => {
        setIsOpen((prev) => !prev);
    }, []);

    useEffect(() => {
        const savedLanguage = getLanguage();
        if (savedLanguage && savedLanguage !== i18n.language) {
            i18n.changeLanguage(savedLanguage);
        }
    }, [i18n.language]);

    const i18nRef = useRef(i18n);
    i18nRef.current = i18n;

    const updateLanguage = useCallback((lang: string) => {
        if (lang === i18nRef.current.language) return;
        dayjs.locale(lang);
        locales.changeLanguage(lang);
        if (!isServer) localStorage.setItem(USER_LANG, lang);
        setIsOpen(false);
    }, []);

    const currentLanguage = useMemo(
        () =>
            languageList.find((lang) => lang.code === i18n.language) ||
            languageList[0],
        [i18n.language]
    );

    return { ref, isOpen, currentLanguage, toggleDropdown, updateLanguage };
}
