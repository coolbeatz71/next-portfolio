import { useState } from "react";

import { MovingBorderButton } from "@/components/shared/buttons/moving-border/MovingBorder.Button";
import Drawer from "@/components/shared/popup/drawer/Drawer";
import SectionHeader from "@/components/shared/section-header/SectionHeader";
import { Timeline } from "@/components/shared/timeline/Timeline";
import { TimelineFull } from "@/components/shared/timeline/Timeline.Full";
import { experienceTimeline } from "@/config/WorkExperience";
import dynamic from "next/dynamic";
import { useTranslation } from "react-i18next";

const DynamicTooltip = dynamic(() => import("./../../shared/tooltip/Tooltip"), {
    ssr: false
});

export default function Experiences(): JSX.Element {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    const bodyClassName = "!text-sm mt-4";
    const headerClassName = "mt-4 !text-sm mb-0";

    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };

    return (
        <section
            id="experience"
            className="mx-auto max-w-7xl max-h-7xl scroll-mt-36"
        >
            <div className="pb-10">
                <SectionHeader
                    title={t("experience_title")}
                    subtitle={t("experience_subtitle")}
                />
                <Timeline data={experienceTimeline().slice(0, 5)} />
                <div className="flex justify-center w-full">
                    <DynamicTooltip text={t("view_more_experience")}>
                        <MovingBorderButton
                            className="py-4 px-10"
                            onClick={toggleDrawer}
                        >
                            {t("read_more")}
                        </MovingBorderButton>
                    </DynamicTooltip>
                </div>
            </div>

            <Drawer
                isOpen={isOpen}
                title={t("work_experience")}
                onToggle={toggleDrawer}
            >
                <TimelineFull
                    data={experienceTimeline(headerClassName, bodyClassName)}
                />
            </Drawer>
        </section>
    );
}
