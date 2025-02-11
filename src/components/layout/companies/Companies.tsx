import DotBackground from "@/components/shared/background/Dot.Background";
import { ScrollReveal } from "@/components/shared/scroll-reveal/ScrollReveal";
import { RESPONSIVE_CLASSNAME } from "@/config/ThemeStyle";
import { useTranslation } from "react-i18next";
import CompaniesGrid from "./Companies.Grid";

export const companyLogoList = [
    {
        title: "Bestseller",
        icon: "bg-logo_bestseller_light dark:bg-logo_bestseller_dark"
    },
    {
        title: "The Room",
        icon: "bg-logo_theroom_light dark:bg-logo_theroom_dark"
    },
    {
        title: "Reconstruction",
        icon: "bg-logo_reconstruction_light dark:bg-logo_reconstruction_dark"
    },
    {
        title: "Code of Africa",
        icon: "bg-logo_codeofafrica_light dark:bg-logo_codeofafrica_dark"
    },
    {
        title: "Alfatier",
        icon: "bg-logo_alfatier_light dark:bg-logo_alfatier_dark"
    },
    {
        title: "Exuus",
        icon: "bg-logo_exuus_light dark:bg-logo_exuus_dark"
    },
    {
        title: "EzyAgric",
        icon: "bg-logo_ezyagric"
    },
    {
        title: "Andela",
        icon: "bg-logo_andela_light dark:bg-logo_andela_dark"
    }
];

export default function Companies(): JSX.Element {
    const { t } = useTranslation();

    return (
        <ScrollReveal direction="right">
            <section className={RESPONSIVE_CLASSNAME}>
                <div className="grid grid-cols-1 lg:grid-cols-[3fr,3.5fr] xl:grid-cols-[3fr,3.5fr] items-center gap-4 xl:gap-8">
                    <div className="text-start">
                        <DotBackground className="h-20 z-0" />
                        <div className="relative z-10">
                            <h2 className="mb-4 text-3xl md:text-4xl font-bold tracking-tight md:leading-relaxed text-stone-700 dark:text-stone-300">
                                {t("companies_title")}
                            </h2>
                            <p className="text-md sm:text-lg md:text-xl lg:text-xl text-stone-500 dark:text-stone-400 !leading-relaxed">
                                {t("companies_subtitle")}
                            </p>
                        </div>
                    </div>

                    <div className="flex relative max-w-3xl z-10 py-4">
                        <CompaniesGrid
                            items={companyLogoList}
                            className="w-full"
                        />
                    </div>
                </div>
            </section>
        </ScrollReveal>
    );
}
