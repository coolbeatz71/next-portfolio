import { memo } from "react";
import { IconChevronUpDown } from "@/shared/config/icons";
import { useLanguageDropdown } from "./hooks/useLanguageDropdown";
import { LanguageDropdownMenu } from "./Language.Dropdown.Menu";
import type { LanguageDropdownProps } from "./types";

/**
 * Language dropdown component.
 *
 * @component
 *
 * @description
 * Renders a toggle button that opens a language selection menu.
 * Syncs the selected language with i18next, dayjs, and localStorage on change.
 * Closes automatically when clicking outside.
 *
 * @param {LanguageDropdownProps} props - Component props
 * @param {"top" | "bottom"} props.placement - Direction the dropdown menu opens
 *
 * @returns The language dropdown element
 */
function LanguageDropdownComponent({ placement }: LanguageDropdownProps) {
    const { ref, isOpen, currentLanguage, toggleDropdown, updateLanguage } =
        useLanguageDropdown();

    return (
        <div ref={ref} className="relative inline-block text-left">
            <button
                type="button"
                aria-haspopup="listbox"
                aria-expanded={isOpen}
                aria-label={`Select language, current: ${currentLanguage.code.toUpperCase()}`}
                className={`rounded-lg flex items-center justify-center p-3.5 sm:p-2.5 md:p-3.5
                    text-typography-nav bg-surface-raised hover:bg-surface-hover text-sm
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

export const LanguageDropdown = memo(LanguageDropdownComponent);
