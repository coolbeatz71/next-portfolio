import { useState } from "react";

import { MovingBorderButton } from "@/components/shared/buttons/moving-border/MovingBorder.Button";
import Drawer from "@/components/shared/popup/drawer/Drawer";
import SectionHeader from "@/components/shared/section-header/SectionHeader";
import { Timeline } from "@/components/shared/timeline/Timeline";
import { TimelineFull } from "@/components/shared/timeline/Timeline.Full";
import { RESPONSIVE_CLASSNAME } from "@/config/ThemeStyle";
import { experienceTimeline } from "@/config/WorkExperience";
import { cn } from "@/helpers/mergeClassName";
import { useTranslation } from "react-i18next";

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
            className={cn(RESPONSIVE_CLASSNAME, "scroll-mt-36")}
        >
            <div className="pb-4 md:pb-10">
                <SectionHeader
                    title={t("experience_title")}
                    subtitle={t("experience_subtitle")}
                />
                <Timeline data={experienceTimeline().slice(0, 5)} />
                <div className="flex justify-center w-full">
                    <MovingBorderButton
                        className="py-3 md:py-4 px-10"
                        onClick={toggleDrawer}
                    >
                        {t("read_more")}
                    </MovingBorderButton>
                </div>
            </div>

            <Drawer
                isOpen={isOpen}
                onToggle={toggleDrawer}
                header={
                    <h2 className="text-xl font-semibold">
                        {t("work_experience")}
                    </h2>
                }
            >
                <div className="mt-4">
                    <TimelineFull
                        data={experienceTimeline(
                            headerClassName,
                            bodyClassName
                        )}
                    />
                </div>
            </Drawer>
        </section>
    );
}
