import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useMedia } from "react-use";
import { experienceTimeline } from "@/features/experience/data/experience.data";
import {
    DESKTOP_DEVICE,
    LAPTOP_DEVICE,
    MOBILE_DEVICE,
    RESPONSIVE_CLASSNAME,
    TABLET_DEVICE,
    XS_MOBILE_DEVICE
} from "@/shared/config/style";
import { cn } from "@/shared/lib/cn";
import { MovingBorderButton } from "@/shared/ui/buttons/MovingBorder.Button";
import { Drawer } from "@/shared/ui/popup/drawer/Drawer";
import { SectionHeader } from "@/shared/ui/section-header/SectionHeader";
import { Timeline } from "@/shared/ui/timeline/Timeline";
import { TimelineFull } from "@/shared/ui/timeline/Timeline.Full";

export function Experiences() {
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
