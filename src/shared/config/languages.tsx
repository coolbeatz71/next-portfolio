import { EnglishFlagIcon } from "@/shared/ui/icon/EnglishFlag.Icon";
import { FrenchFlagIcon } from "@/shared/ui/icon/FrenchFlag.Icon";
import type { ILanguage } from "./types";

export const USER_LANG = "lang";

export const languageList: ILanguage[] = [
    { code: "en", name: "English", flag: <EnglishFlagIcon /> },
    { code: "fr", name: "Français", flag: <FrenchFlagIcon /> }
];
