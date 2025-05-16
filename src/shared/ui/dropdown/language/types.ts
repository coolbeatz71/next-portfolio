/**
 * @interface LanguageDropdownProps
 * @property {"top" | "bottom"} placement - Direction the dropdown menu opens
 */
export interface LanguageDropdownProps {
    placement: "top" | "bottom";
}

/**
 * @interface LanguageDropdownMenuProps
 * @property {"top" | "bottom"} placement - Controls whether the menu opens above or below the trigger
 * @property {(lang: string) => void} updateLanguage - Callback fired with the selected language code
 */
export interface LanguageDropdownMenuProps {
    placement: "top" | "bottom";
    updateLanguage: (lang: string) => void;
}
