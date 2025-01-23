import dayjs from "dayjs";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { LuChevronsUpDown } from "react-icons/lu";

import { USER_LANG, languageList } from "@/config/Language";
import { getLanguage } from "@/helpers/getLanguage";
import { isServer } from "@/helpers/isServer";
import locales from "@/locales";
import { useClickAway } from "react-use";

export default function LanguageDropDown(): JSX.Element {
    const ref = useRef(null);
    const { i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    useClickAway(ref, () => {
        setIsOpen(false);
    });

    const toggleDropdown = () => setIsOpen(!isOpen);

    useEffect(() => {
        const savedLanguage = getLanguage();
        if (savedLanguage) i18n.changeLanguage(savedLanguage);
    }, [i18n]);

    const updateLanguage = (lang: string): void => {
        dayjs.locale(lang);
        locales.changeLanguage(lang);
        !isServer && localStorage.setItem(USER_LANG, lang);
        setIsOpen(false);
    };

    const currentLanguage =
        languageList.find((lang) => lang.code === i18n.language) ||
        languageList[0];

    return (
        <div className="relative inline-block text-left" ref={ref}>
            <div>
                <button
                    type="button"
                    className="rounded-lg flex items-center justify-center p-[0.85rem] text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 text-sm dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
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
            </div>

            {isOpen && (
                <div className=" z-10 origin-top-right absolute p-1 right-0 mt-1 w-40 rounded-lg shadow-xl bg-white dark:bg-slate-600">
                    <div className="py-1" aria-labelledby="options-menu">
                        {languageList.map((lang) => (
                            <button
                                type="button"
                                key={lang.code}
                                onClick={() => updateLanguage(lang.code)}
                                className="rounded-lg flex items-center px-3 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-slate-200 dark:hover:bg-slate-700 w-full text-left"
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
            )}
        </div>
    );
}
