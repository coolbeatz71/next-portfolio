import { aboutme } from "@/locales/en/aboutme";
import { companies } from "@/locales/en/companies";
import { experience } from "@/locales/en/experience";
import { general } from "@/locales/en/general";
import { hero } from "@/locales/en/hero";
import { navigation } from "@/locales/en/navigation";
import { projects } from "@/locales/en/projects";
import { tabs } from "@/locales/en/tabs";

export default {
    ...navigation,
    ...general,
    ...hero,
    ...companies,
    ...aboutme,
    ...experience,
    ...projects,
    ...tabs
};
