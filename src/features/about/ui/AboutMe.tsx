import { RESPONSIVE_CLASSNAME } from "@/shared/config/style";
import { cn } from "@/shared/lib/cn";
import { ScrollReveal } from "@/shared/ui/scroll-reveal/ScrollReveal";
import { AboutMeDescription } from "./AboutMe.Description";
import { AboutMeImages } from "./AboutMe.Images";

/**
 * About me section component.
 *
 * @component
 *
 * @description
 * Renders the about section with a rotating photo grid on the left
 * and a personal description on the right, wrapped in a left-direction scroll reveal.
 *
 * @returns The about me section element
 */
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
                <div className="grid grid-cols-1 lg:grid-cols-[2.5fr_3fr] xl:grid-cols-[3fr_3.5fr] gap-4 md:gap-12 lg:gap-8 xl:gap-12">
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
