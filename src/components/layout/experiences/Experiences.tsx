import { useState } from "react";

import { MovingBorderButton } from "@/components/shared/buttons/moving-border/MovingBorder.Button";
import Drawer from "@/components/shared/popup/drawer/Drawer";
import SectionHeader from "@/components/shared/section-header/SectionHeader";
import { Timeline } from "@/components/shared/timeline/Timeline";
import { TimelineFull } from "@/components/shared/timeline/Timeline.Full";
import {
    DESKTOP_DEVICE,
    LAPTOP_DEVICE,
    MOBILE_DEVICE,
    RESPONSIVE_CLASSNAME,
    TABLET_DEVICE,
    XS_MOBILE_DEVICE
} from "@/config/ThemeStyle";
import { experienceTimeline } from "@/config/WorkExperience";
import { cn } from "@/helpers/mergeClassName";
import { useTranslation } from "react-i18next";
import { useMedia } from "react-use";

export default function Experiences(): JSX.Element {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    const isXSMobile = useMedia(XS_MOBILE_DEVICE, false);
    const isMobile = useMedia(MOBILE_DEVICE, false);
    const isTablet = useMedia(TABLET_DEVICE, false);
    const isLaptop = useMedia(LAPTOP_DEVICE, false);
    const isDesktop = useMedia(DESKTOP_DEVICE, false);

    const bodyClassName = "text-sm mt-4";
    const headerClassName = "mt-4 text-[9.5pt] xl:text-[10pt] mb-0";

    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };

    const getWidth = (): string => {
        if (isMobile || isXSMobile) return "100vw";
        if (isTablet || isLaptop) return "70vw";
        if (isDesktop) return "60vw";
        return "50vw";
    };

    return (
        <section
            id="experience"
            className={cn(RESPONSIVE_CLASSNAME, "py-12 xl:py-32 scroll-mt-10")}
        >
            <div>
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
                width={getWidth()}
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
