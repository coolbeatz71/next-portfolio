import { languageList } from "@/config/Language";

export interface LanguageDropdownMenuProps {
    placement: "top" | "bottom";
    updateLanguage: (lang: string) => void;
}

export function LanguageDropdownMenu({
    placement,
    updateLanguage
}: LanguageDropdownMenuProps): JSX.Element {
    const dropdownPlacement = placement === "bottom" ? "top-12" : "bottom-14";

    return (
        <div
            id="dropdown"
            className={`
                z-10 origin-top-right absolute ${dropdownPlacement} 
                left-0 right-0 px-1 mt-1 w-[9.5rem] rounded-lg shadow-xl bg-white dark:bg-slate-600
            `}
        >
            <div className="py-1" aria-labelledby="dropdown-menu">
                {languageList.map((lang) => (
                    <button
                        type="button"
                        role="menuitem"
                        key={lang.code}
                        onClick={() => updateLanguage(lang.code)}
                        className={`rounded-lg flex items-center px-3 py-2 text-sm text-gray-700
                            dark:text-gray-200 hover:bg-slate-200 dark:hover:bg-slate-700 w-full text-left
                        `}
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
