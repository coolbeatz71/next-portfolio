import { useTranslation } from "react-i18next";
import { companyLogoList } from "@/features/companies/data/companies.data";
import { RESPONSIVE_CLASSNAME } from "@/shared/config/style";
import { ScrollReveal } from "@/shared/ui/scroll-reveal/ScrollReveal";
import { SectionHeader } from "@/shared/ui/section-header/SectionHeader";
import { CompaniesGrid } from "./Companies.Grid";

export function Companies() {
    const { t } = useTranslation();

    return (
        <ScrollReveal direction="right" className="delay-300">
            <section className={RESPONSIVE_CLASSNAME}>
                <div
                    className={`
                        grid grid-cols-1 lg:grid-cols-[2.5fr_3fr] xl:grid-cols-[3fr_3.5fr]
                        items-center gap-4 md:gap-12 lg:gap-8 xl:gap-12
                    `}
                >
                    <div className="text-start">
                        <SectionHeader
                            title={t("companies_title")}
                            className="lg:text-start lg:px-0"
                            subtitle={t("companies_subtitle")}
                        />
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
