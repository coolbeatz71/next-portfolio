import { USER_LANG } from "@/shared/config/languages";
import { isServer } from "./isServer";

/**
 * Reads the user's preferred language from `localStorage`.
 * Falls back to `"en"` if no preference is set, or `"fr"` during SSR.
 *
 * @returns The active language code (`"en"` or `"fr"`)
 */
export const getLanguage = (): string => {
    if (!isServer) return localStorage.getItem(USER_LANG) || "en";

    return "fr";
};
