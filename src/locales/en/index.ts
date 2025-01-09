import { aboutme } from "@/locales/en/aboutme";
import { companies } from "@/locales/en/companies";
import { general } from "@/locales/en/general";
import { hero } from "@/locales/en/hero";
import { navigation } from "@/locales/en/navigation";

export default {
    ...navigation,
    ...general,
    ...hero,
    ...companies,
    ...aboutme
};
