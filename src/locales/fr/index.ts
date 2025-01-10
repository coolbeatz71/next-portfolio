import { aboutme } from "@/locales/fr/aboutme";
import { companies } from "@/locales/fr/companies";
import { experience } from "@/locales/fr/experience";
import { general } from "@/locales/fr/general";
import { hero } from "@/locales/fr/hero";
import { navigation } from "@/locales/fr/navigation";

export default {
    ...navigation,
    ...general,
    ...hero,
    ...companies,
    ...aboutme,
    ...experience
};
