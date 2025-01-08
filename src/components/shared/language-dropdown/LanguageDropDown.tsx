import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { LuChevronsUpDown } from "react-icons/lu";

import { USER_LANG, languageList } from "@/config/Language";
import { getLanguage } from "@/helpers/getLanguage";
import { isServer } from "@/helpers/isServer";
import locales from "@/locales";

export default function LanguageDropDown(): JSX.Element {
    const { i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

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
        <div className="relative inline-block text-left">
            <div>
                <button
                    type="button"
                    className="flex items-center justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                    onClick={toggleDropdown}
                >
                    <span className="mr-2 h-4 w-4 flex items-center justify-center flex-shrink-0">
                        {currentLanguage.flag}
                    </span>
                    {currentLanguage.code.toUpperCase()}
                    <LuChevronsUpDown
                        className="-mr-1 ml-2 h-4 w-4"
                        aria-hidden="true"
                    />
                </button>
            </div>

            {isOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1" aria-labelledby="options-menu">
                        {languageList.map((lang) => (
                            <button
                                type="button"
                                key={lang.code}
                                onClick={() => updateLanguage(lang.code)}
                                className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
                                role="menuitem"
                            >
                                <span className="mr-2 h-4 w-4 flex items-center justify-center flex-shrink-0">
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
