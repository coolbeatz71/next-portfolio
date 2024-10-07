import TabBar from "@/components/shared/tab-bar/TabBar";
import { projectsTabs } from "@/config/Projects";

export default function Projects(): JSX.Element {
    return (
        <div className="mx-auto max-w-7xl max-h-7xl">
            <TabBar tabs={projectsTabs} className="py-4" />
        </div>
    );
}
