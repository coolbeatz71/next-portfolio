import TabBar from "@/components/layout/tab-bar/TabBar";
import { ScrollReveal } from "@/components/shared/scroll-reveal/ScrollReveal";
import SectionHeader from "@/components/shared/section-header/SectionHeader";
import { projectsTabs } from "@/config/Projects";
import { RESPONSIVE_CLASSNAME } from "@/config/ThemeStyle";
import { cn } from "@/helpers/mergeClassName";
import { useTranslation } from "react-i18next";

export default function Projects(): JSX.Element {
    const { t } = useTranslation();

    return (
        <ScrollReveal direction="left">
            <section
                id="contribution"
                className={cn(
                    RESPONSIVE_CLASSNAME,
                    "py-12 xl:py-32 scroll-mt-10"
                )}
            >
                <SectionHeader
                    title={t("contribution_title")}
                    subtitle={t("contribution_subtitle")}
                />
                <TabBar
                    context="projects"
                    tabs={projectsTabs}
                    containerClassName="py-4"
                    tabBarClassName="min-w-full lg:min-w-[60%]"
                />
            </section>
        </ScrollReveal>
    );
}
