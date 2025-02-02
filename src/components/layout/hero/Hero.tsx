import Spotlight from "@/components/shared/spotlight/Spotlight";

import { RESPONSIVE_CLASSNAME } from "@/config/ThemeStyle";
import { cn } from "@/helpers/mergeClassName";
import HeroImageSection from "./hero-section/Hero.Image.Section";
import HeroIntroSection from "./hero-section/Hero.Intro.Section";

export default function Hero(): JSX.Element {
    return (
        <section
            id="hero"
            className={cn(RESPONSIVE_CLASSNAME, "py-4 sm:py-4 md:py-4 lg:py-8")}
        >
            <Spotlight />
            <div className="grid grid-cols-1 xl:grid-cols-2 items-center py-4 md:py-10 gap-16 md:gap-0">
                <div className="flex flex-col items-center md:items-start">
                    <HeroIntroSection />
                </div>
                <div className="flex justify-center relative">
                    <HeroImageSection />
                </div>
            </div>
        </section>
    );
}
