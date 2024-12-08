import SectionHeader from "@/components/shared/section-header/SectionHeader";
import TabBar from "@/components/shared/tab-bar/TabBar";
import { projectsTabs } from "@/config/Projects";

export default function Projects(): JSX.Element {
    return (
        <div className="mx-auto max-w-7xl max-h-7xl">
            <SectionHeader
                title="My Contribution"
                subtitle="A collection of impactful and innovative projects that highlight my skills, creativity, and passion for solving real-world challenges through technology"
            />
            <TabBar tabs={projectsTabs} containerClassName="py-4" />
        </div>
    );
}
