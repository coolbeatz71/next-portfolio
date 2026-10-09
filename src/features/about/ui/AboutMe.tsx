import { RESPONSIVE_CLASSNAME } from "@/shared/config/style";
import { cn } from "@/shared/lib/cn";
import { Reveal } from "@/shared/ui/scroll-reveal/Reveal";
import { AboutMeDescription } from "./AboutMe.Description";
import { AboutMeHeader } from "./AboutMe.Header";
import { AboutMeImages } from "./AboutMe.Images";

/**
 * About me section component.
 *
 * @component
 *
 * @description
 * Renders the about section as two bands: a header pairing the headline with the stats,
 * and a body pairing the photo grid with the labelled bio. Both collapse to a single
 * column below the large breakpoint, and the stat cells reveal as they scroll into view.
 *
 * @returns The about me section element
 */
export function AboutMe() {
    return (
        <section id="about" className={cn(RESPONSIVE_CLASSNAME, "py-12 xl:py-32 scroll-mt-20")}>
            <div className="flex flex-col gap-10 md:gap-16">
                <AboutMeHeader />

                <div
                    className={`grid gap-10 border-t border-outlined pt-10 lg:grid-cols-2
                        lg:gap-8 md:pt-16`}
                >
                    <Reveal>
                        <AboutMeImages />
                    </Reveal>
                    <AboutMeDescription />
                </div>
            </div>
        </section>
    );
}
