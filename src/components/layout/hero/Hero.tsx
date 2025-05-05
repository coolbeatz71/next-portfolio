import { ScrollReveal } from "@/components/shared/scroll-reveal/ScrollReveal";
import { Spotlight } from "@/components/shared/spotlight/Spotlight";
import { RESPONSIVE_CLASSNAME } from "@/config/ThemeStyle";
import { cn } from "@/helpers/mergeClassName";

import { HeroImageSection } from "./hero-section/Hero.Image.Section";
import { HeroIntroSection } from "./hero-section/Hero.Intro.Section";

export function Hero(): JSX.Element {
    return (
        <ScrollReveal className="delay-0">
            <section
                id="hero"
                className={cn(
                    RESPONSIVE_CLASSNAME,
                    "py-4 sm:py-4 md:py-4 lg:py-8"
                )}
            >
                <Spotlight />
                <div className="grid grid-cols-1 xl:grid-cols-2 py-4 md:py-10 2xl:py-32 gap-16 md:gap-0">
                    <div className="flex flex-col items-start p-0 md:py-8 xl:py-16 gap-4">
                        <HeroIntroSection />
                    </div>
                    <div className="flex relative justify-end md:justify-end">
                        <HeroImageSection />
                    </div>
                </div>
            </section>
        </ScrollReveal>
    );
}
