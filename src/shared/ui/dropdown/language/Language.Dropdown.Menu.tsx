import { languageList } from "@/shared/config/languages";
import type { LanguageDropdownMenuProps } from "./types";

/**
 * Language dropdown menu component.
 *
 * @component
 *
 * @description
 * Renders the list of selectable language options inside the language dropdown.
 * Each item shows a flag icon and the language name.
 *
 * @param {LanguageDropdownMenuProps} props - Component props
 * @param {"top" | "bottom"} props.placement - Controls whether the menu opens above or below the trigger
 * @param {(lang: string) => void} props.updateLanguage - Callback fired with the selected language code
 *
 * @returns The language dropdown menu element
 */
export function LanguageDropdownMenu({
    placement,
    updateLanguage
}: LanguageDropdownMenuProps) {
    const dropdownPlacement = placement === "bottom" ? "top-12" : "bottom-14";

    return (
        <div
            id="dropdown"
            className={`
                z-10 origin-top-right absolute ${dropdownPlacement} 
                left-0 right-0 px-1 mt-1 w-38 rounded-lg shadow-xl bg-surface-dropdown
            `}
        >
            <div role="menu" className="py-1" aria-label="Select language">
                {languageList.map((lang) => (
                    <button
                        type="button"
                        role="menuitem"
                        key={lang.code}
                        onClick={() => updateLanguage(lang.code)}
                        className={`rounded-lg flex items-center px-3 py-2 text-sm text-typography-contact
                            hover:bg-surface-hover hover:duration-slow w-full text-left
                        `}
                    >
                        <span className="mr-2 h-5 w-5 flex items-center justify-center shrink-0">
                            {lang.flag}
                        </span>
                        {lang.name}
                    </button>
                ))}
            </div>
        </div>
    );
}
