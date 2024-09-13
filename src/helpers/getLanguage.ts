import { USER_LANG } from "@/constants/app";

export const getLanguage = (): string => {
    if (typeof window !== "undefined") {
        return localStorage.getItem(USER_LANG) || "fr";
    }

    return "fr";
};
