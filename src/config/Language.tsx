import type { ReactNode } from "react";
import { EnglishFlagIcon } from "@/components/shared/icon/EnglishFlag.icon";
import { FrenchFlagIcon } from "@/components/shared/icon/FrenchFlag.Icon";

export const USER_LANG = "lang";

export const languageList: {
    code: string;
    name: string;
    flag: ReactNode;
}[] = [
    { code: "en", name: "English", flag: <EnglishFlagIcon /> },
    { code: "fr", name: "Français", flag: <FrenchFlagIcon /> }
];
