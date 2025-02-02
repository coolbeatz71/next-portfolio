import DotBackground from "@/components/shared/background/Dot.Background";
import { RESPONSIVE_CLASSNAME } from "@/config/ThemeStyle";
import { useTranslation } from "react-i18next";
import CompaniesGrid from "./Companies.Grid";

export const companyLogoList = [
    {
        title: "Andela",
        icon: "bg-logo_andela_light dark:bg-logo_andela_dark"
    },
    {
        title: "EzyAgric",
        icon: "bg-logo_ezyagric"
    },
    {
        title: "Exuus",
        icon: "bg-logo_exuus_light dark:bg-logo_exuus_dark"
    },
    {
        title: "Alfatier",
        icon: "bg-logo_alfatier_light dark:bg-logo_alfatier_dark"
    },
    {
        title: "Code of Africa",
        icon: "bg-logo_codeofafrica_light dark:bg-logo_codeofafrica_dark"
    },
    {
        title: "Reconstruction",
        icon: "bg-logo_reconstruction_light dark:bg-logo_reconstruction_dark"
    },
    {
        title: "The Room",
        icon: "bg-logo_theroom_light dark:bg-logo_theroom_dark"
    },
    {
        title: "Bestseller",
        icon: "bg-logo_bestseller_light dark:bg-logo_bestseller_dark"
    }
];
export default function Companies(): JSX.Element {
    const { t } = useTranslation();

    return (
        <section className={RESPONSIVE_CLASSNAME}>
            <div className="grid grid-cols-1 xl:grid-cols-[3fr,3.5fr] items-center gap-4">
                <div className="text-center md:text-start">
                    <DotBackground className="h-20 z-0" />
                    <div className="relative z-10">
                        <h2 className="mb-4 text-3xl font-bold tracking-tight md:leading-relaxed xl:text-4xl text-slate-700 dark:text-slate-300">
                            {t("companies_title")}
                        </h2>
                        <p className="text-md md:text-lg text-slate-500 dark:text-slate-400 !leading-relaxed">
                            {t("companies_subtitle")}
                        </p>
                    </div>
                </div>

                <div className="flex relative max-w-3xl z-10 py-4">
                    <CompaniesGrid items={companyLogoList} className="w-full" />
                </div>
            </div>
        </section>
    );
}
