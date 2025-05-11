import { RESPONSIVE_CLASSNAME } from "@/shared/config/style";
import { cn } from "@/shared/lib/cn";
import { ScrollReveal } from "@/shared/ui/scroll-reveal/ScrollReveal";
import { Spotlight } from "@/shared/ui/spotlight/Spotlight";

import { HeroImageSection } from "./Hero.Image.Section";
import { HeroIntroSection } from "./Hero.Intro.Section";

export function Hero() {
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
