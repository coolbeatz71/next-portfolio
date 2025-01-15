import SectionHeader from "@/components/shared/section-header/SectionHeader";
import TabBar from "@/components/shared/tab-bar/TabBar";
import { projectsTabs } from "@/config/Projects";
import { useTranslation } from "react-i18next";

export default function Projects(): JSX.Element {
    const { t } = useTranslation();

    return (
        <section
            id="contribution"
            className="mx-auto max-w-7xl max-h-7xl py-12 scroll-mt-28"
        >
            <SectionHeader
                title={t("contribution_title")}
                subtitle={t("contribution_subtitle")}
            />
            <TabBar
                context="projects"
                tabs={projectsTabs}
                containerClassName="py-4"
            />
        </section>
    );
}
