import dynamic from "next/dynamic";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useExperienceTimeline } from "@/features/experience/data/experience.data";
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
import { SectionHeader } from "@/shared/ui/section-header/SectionHeader";
import { Timeline } from "@/shared/ui/timeline/Timeline";

const Drawer = dynamic(async () => {
    const mod = await import(
        /* webpackChunkName: "Drawer" */
        "@/shared/ui/popup/drawer/Drawer"
    );
    return mod.Drawer;
});

const TimelineFull = dynamic(async () => {
    const mod = await import(
        /* webpackChunkName: "TimelineFull" */
        "@/shared/ui/timeline/Timeline.Full"
    );
    return mod.TimelineFull;
});

/**
 * Experiences section component.
 *
 * @component
 *
 * @description
 * Renders the work experience section with a scroll-driven timeline showing the 5 most recent entries.
 * A "Read More" button opens a responsive drawer with the full timeline.
 *
 * @returns The experiences section element
 */
const bodyClassName = "text-sm mt-4";
const headerClassName = "mt-4 text-[9.5pt] xl:text-[10pt] mb-0";

function getDrawerWidth(): string {
    if (window.matchMedia(XS_MOBILE_DEVICE).matches) return "100vw";
    if (window.matchMedia(MOBILE_DEVICE).matches) return "100vw";
    if (window.matchMedia(TABLET_DEVICE).matches) return "70vw";
    if (window.matchMedia(LAPTOP_DEVICE).matches) return "70vw";
    if (window.matchMedia(DESKTOP_DEVICE).matches) return "60vw";
    return "50vw";
}

export function Experiences() {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [drawerWidth, setDrawerWidth] = useState<string>("50vw");

    const rawPreview = useExperienceTimeline();
    const rawFull = useExperienceTimeline(headerClassName, bodyClassName);
    const previewData = useMemo(() => rawPreview.slice(0, 5), [rawPreview]);

    const drawerHeader = useMemo(
        () => <h2 className="text-xl font-semibold">{t("work_experience")}</h2>,
        [t]
    );

    const toggleDrawer = useCallback(() => {
        setIsOpen((prev) => !prev);
    }, []);

    useEffect(() => {
        setDrawerWidth(getDrawerWidth());

        const queries = [
            XS_MOBILE_DEVICE,
            MOBILE_DEVICE,
            TABLET_DEVICE,
            LAPTOP_DEVICE,
            DESKTOP_DEVICE
        ].map((q) => {
            const mq = window.matchMedia(q);
            const handler = () =>
                setDrawerWidth((prev) => {
                    const next = getDrawerWidth();
                    return next !== prev ? next : prev;
                });
            mq.addEventListener("change", handler);
            return { mq, handler };
        });

        return () => {
            queries.forEach(({ mq, handler }) =>
                mq.removeEventListener("change", handler)
            );
        };
    }, []);

    return (
        <section
            id="experience"
            className={cn(RESPONSIVE_CLASSNAME, "py-12 xl:py-32 scroll-mt-10")}
        >
            <div className="pb-6 md:pb-12">
                <SectionHeader
                    title={t("experience_title")}
                    subtitle={t("experience_subtitle")}
                />
            </div>

            <Timeline data={previewData} />

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
                width={drawerWidth}
                onToggle={toggleDrawer}
                header={drawerHeader}
            >
                <div className="mt-4">
                    <TimelineFull data={rawFull} />
                </div>
            </Drawer>
        </section>
    );
}
