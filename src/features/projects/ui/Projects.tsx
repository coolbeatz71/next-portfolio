import { useTranslation } from "react-i18next";
import { projectsTabs } from "@/features/projects/data/projects.tabs";
import { RESPONSIVE_CLASSNAME } from "@/shared/config/style";
import { cn } from "@/shared/lib/cn";
import { ScrollReveal } from "@/shared/ui/scroll-reveal/ScrollReveal";
import { SectionHeader } from "@/shared/ui/section-header/SectionHeader";
import { TabBar } from "@/widgets/tab-bar/TabBar";

export function Projects() {
    const { t } = useTranslation();

    return (
        <ScrollReveal direction="right" className="delay-300">
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
