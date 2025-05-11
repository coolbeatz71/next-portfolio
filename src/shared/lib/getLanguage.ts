import { USER_LANG } from "@/shared/config/languages";

export const getLanguage = (): string => {
    if (typeof window !== "undefined") {
        return localStorage.getItem(USER_LANG) || "en";
    }

    return "fr";
};
