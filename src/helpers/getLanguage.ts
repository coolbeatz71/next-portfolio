import { USER_LANG } from "@/config/Language";

export const getLanguage = (): string => {
    if (typeof window !== "undefined") {
        return localStorage.getItem(USER_LANG) || "en";
    }

    return "fr";
};
