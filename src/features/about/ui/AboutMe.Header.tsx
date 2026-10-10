import { memo } from "react";
import { useTranslation } from "react-i18next";
import { padNumber } from "@/shared/lib/padNumber";
import { Reveal } from "@/shared/ui/scroll-reveal/Reveal";
import { AboutMeStats } from "./AboutMe.Stats";

/**
 * About me header component.
 *
 * @component
 *
 * @description
 * Renders the opening band of the about section: the numbered label and headline on one
 * side, the supporting line and the stats row on the other. Collapses to a single column
 * below the large breakpoint.
 *
 * @returns The about me header element
 */
function AboutMeHeaderComponent() {
    const { t } = useTranslation();

    return (
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
            <Reveal className="flex flex-col gap-4">
                <h2 className="text-3xl md:text-4xl font-bold leading-tight text-typography-heading">
                    {t("aboutme_title")}
                </h2>
            </Reveal>

            <div className="flex flex-col justify-center gap-8">
                <Reveal index={1}>
                    <p className="max-w-prose text-xl text-typography-muted">
                        {t("aboutme_subtitle")}
                    </p>
                </Reveal>

                <AboutMeStats />
            </div>
        </div>
    );
}

export const AboutMeHeader = memo(AboutMeHeaderComponent);
