import type { ReactNode } from "react";
import { EnglishFlagIcon } from "@/shared/ui/icon/EnglishFlag.icon";
import { FrenchFlagIcon } from "@/shared/ui/icon/FrenchFlag.Icon";

export const USER_LANG = "lang";

/**
 * @interface ILanguage
 * @property {string} code - BCP 47 language code (e.g. `"en"`, `"fr"`)
 * @property {string} name - Human-readable language name
 * @property {ReactNode} flag - Flag icon element for the language
 */
export interface ILanguage {
    code: string;
    name: string;
    flag: ReactNode;
}

export const languageList: ILanguage[] = [
    { code: "en", name: "English", flag: <EnglishFlagIcon /> },
    { code: "fr", name: "Français", flag: <FrenchFlagIcon /> }
];
