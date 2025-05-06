import { IconChevronUpDown } from "@/config/Icon";
import dayjs from "dayjs";
import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useClickAway } from "react-use";

import { USER_LANG, languageList } from "@/config/Language";
import { getLanguage } from "@/helpers/getLanguage";
import { isServer } from "@/helpers/isServer";
import locales from "@/locales";
import { LanguageDropdownMenu } from "./Language.Dropdown.Menu";

export interface LanguageDropDownProps {
    placement: "top" | "bottom";
}

function LanguageDropDownComponent({ placement }: LanguageDropDownProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { i18n } = useTranslation();
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
    }, [i18n]);

    const updateLanguage = useCallback(
        (lang: string) => {
            if (lang === i18n.language) return;
            dayjs.locale(lang);
            locales.changeLanguage(lang);
            if (!isServer) localStorage.setItem(USER_LANG, lang);
            setIsOpen(false);
        },
        [i18n.language]
    );

    const currentLanguage = useMemo(
        () =>
            languageList.find((lang) => lang.code === i18n.language) ||
            languageList[0],
        [i18n.language]
    );

    return (
        <div ref={ref} className="relative inline-block text-left">
            <button
                type="button"
                className={`rounded-lg flex items-center justify-center p-3.5 sm:p-2.5 md:p-3.5
                    text-slate-700 bg-slate-100 dark:bg-slate-900 hover:bg-slate-300 
                    text-sm dark:text-slate-100 dark:hover:bg-gray-700 dark:hover:border-gray-600
                    dark:focus:ring-gray-700
                `}
                onClick={toggleDropdown}
            >
                <span className="mr-2 h-5 w-5 flex items-center justify-center shrink-0">
                    {currentLanguage.flag}
                </span>
                <span className="text-sm font-semibold">
                    {currentLanguage.code.toUpperCase()}
                </span>
                <IconChevronUpDown
                    className="-mr-1 ml-2 h-4 w-4"
                    aria-hidden="true"
                />
            </button>

            {isOpen && (
                <LanguageDropdownMenu
                    placement={placement}
                    updateLanguage={updateLanguage}
                />
            )}
        </div>
    );
}

export const LanguageDropDown = memo(LanguageDropDownComponent);
