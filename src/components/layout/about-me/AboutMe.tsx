import { ScrollReveal } from "@/components/shared/scroll-reveal/ScrollReveal";
import { AboutMeDescription } from "./AboutMe.Description";
import { AboutMeImages } from "./AboutMe.Images";

import { RESPONSIVE_CLASSNAME } from "@/config/ThemeStyle";
import { cn } from "@/helpers/mergeClassName";

export function AboutMe() {
    return (
        <ScrollReveal direction="left" className="delay-300">
            <section
                id="about"
                className={cn(
                    RESPONSIVE_CLASSNAME,
                    "py-12 xl:py-32 scroll-mt-20"
                )}
            >
                <div className="grid grid-cols-1 lg:grid-cols-[2.5fr,3fr] xl:grid-cols-[3fr,3.5fr] gap-4 md:gap-12 lg:gap-8 xl:gap-12">
                    <div className="flex flex-col w-full">
                        <AboutMeImages />
                    </div>
                    <div className="xl:flex flex-col relative max-w-3xl">
                        <AboutMeDescription />
                    </div>
                </div>
            </section>
        </ScrollReveal>
    );
}
