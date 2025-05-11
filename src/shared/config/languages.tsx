import type { ReactNode } from "react";
import { EnglishFlagIcon } from "@/shared/ui/icon/EnglishFlag.icon";
import { FrenchFlagIcon } from "@/shared/ui/icon/FrenchFlag.Icon";

export const USER_LANG = "lang";

export interface ILanguage {
    code: string;
    name: string;
    flag: ReactNode;
}

export const languageList: ILanguage[] = [
    { code: "en", name: "English", flag: <EnglishFlagIcon /> },
    { code: "fr", name: "Français", flag: <FrenchFlagIcon /> }
];
