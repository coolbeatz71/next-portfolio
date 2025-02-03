import dayjs from "dayjs";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { LuChevronsUpDown } from "react-icons/lu";
import { useClickAway } from "react-use";

import { USER_LANG, languageList } from "@/config/Language";
import { getLanguage } from "@/helpers/getLanguage";
import { isServer } from "@/helpers/isServer";
import locales from "@/locales";

export interface LanguageDropDownProps {
    placement: "top" | "bottom";
}

const getDropdownPlacement = (placement: "top" | "bottom"): string =>
    placement === "bottom" ? "top-12" : "bottom-14";
interface LanguageDropdownMenuProps {
    placement: "top" | "bottom";
    updateLanguage: (lang: string) => void;
}
function LanguageDropdownMenu({
    placement,
    updateLanguage
}: LanguageDropdownMenuProps): JSX.Element {
    return (
        <div
            id="dropdown"
            className={`z-10 origin-top-right absolute ${getDropdownPlacement(placement)} 
                        left-0 right-0 px-1 mt-1 w-40 rounded-lg shadow-xl bg-white dark:bg-slate-600`}
        >
            <div className="py-1" aria-labelledby="dropdown-menu">
                {languageList.map((lang) => (
                    <button
                        key={lang.code}
                        type="button"
                        onClick={() => updateLanguage(lang.code)}
                        className="rounded-lg flex items-center px-3 py-2 text-sm text-gray-700 
                                   dark:text-gray-200 hover:bg-slate-200 dark:hover:bg-slate-700 w-full text-left"
                        role="menuitem"
                    >
                        <span className="mr-2 h-5 w-5 flex items-center justify-center flex-shrink-0">
                            {lang.flag}
                        </span>
                        {lang.name}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default function LanguageDropDown({ placement }: LanguageDropDownProps) {
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
                className="rounded-lg flex items-center justify-center p-3.5 sm:p-2.5 md:p-3.5 
                           text-slate-700 bg-slate-100 dark:bg-slate-900 hover:bg-slate-300 
                           text-sm dark:text-slate-100 dark:hover:bg-gray-700 dark:hover:border-gray-600 
                           dark:focus:ring-gray-700"
                onClick={toggleDropdown}
            >
                <span className="mr-2 h-5 w-5 flex items-center justify-center flex-shrink-0">
                    {currentLanguage.flag}
                </span>
                <span className="text-sm font-semibold">
                    {currentLanguage.code.toUpperCase()}
                </span>
                <LuChevronsUpDown
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
