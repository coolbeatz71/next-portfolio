import { ScrollReveal } from "@/components/shared/scroll-reveal/ScrollReveal";
import { SectionHeader } from "@/components/shared/section-header/SectionHeader";
import { companyLogoList } from "@/config/Companies";
import { RESPONSIVE_CLASSNAME } from "@/config/ThemeStyle";
import { useTranslation } from "react-i18next";
import { CompaniesGrid } from "./Companies.Grid";

export function Companies(): JSX.Element {
    const { t } = useTranslation();

    return (
        <ScrollReveal direction="right" className="delay-300">
            <section className={RESPONSIVE_CLASSNAME}>
                <div
                    className={`
                        grid grid-cols-1 lg:grid-cols-[2.5fr,3fr] xl:grid-cols-[3fr,3.5fr]
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
