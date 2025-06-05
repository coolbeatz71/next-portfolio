import NextImage from "next/image";
import { useTranslation } from "react-i18next";
import { mainStackList } from "@/features/skills/data/skills.main";
import { devStackTabs } from "@/features/skills/data/skills.tabs";
import { TabBar } from "@/layout/tab-bar/TabBar";
import { RESPONSIVE_CLASSNAME } from "@/shared/config/style";
import { cn } from "@/shared/lib/cn";
import { ScrollReveal } from "@/shared/ui/scroll-reveal/ScrollReveal";
import { SectionHeader } from "@/shared/ui/section-header/SectionHeader";

/**
 * Skills section component.
 *
 * @component
 *
 * @description
 * Renders the skills section featuring a grid of main stack technology icons
 * and a tabbed view for browsing skills by stack category, wrapped in a scroll
 * reveal animation.
 *
 * @returns The skills section element
 */
export function Skills() {
    const { t } = useTranslation();
    const imgClassName = `object-contain transition-all duration-base ease-in-out
        filter grayscale opacity-70 group-hover:filter-none group-hover:opacity-100
    `;

    return (
        <ScrollReveal className="delay-300">
            <section
                id="skill"
                className={cn(
                    RESPONSIVE_CLASSNAME,
                    "py-12 xl:py-32 scroll-mt-10"
                )}
            >
                <SectionHeader
                    title={t("skills_title")}
                    subtitle={t("skills_subtitle")}
                />
                <div className="relative">
                    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 lg:px-24 md:px-24">
                        {mainStackList.map((skill) => (
                            <div
                                key={skill.title}
                                className="flex flex-col items-center group cursor-pointer p-4 md:p-8"
                            >
                                <div
                                    className={`
                                        relative h-16 w-16 lg:h-24 lg:w-24 transform 
                                        transition-transform duration-slow ease-out hover:scale-90
                                    `}
                                >
                                    {/* dark image */}
                                    <NextImage
                                        fill
                                        alt={skill.title}
                                        src={skill.darkImage}
                                        className={`${imgClassName} hidden dark:block`}
                                    />
                                    {/* light image */}
                                    <NextImage
                                        fill
                                        alt={skill.title}
                                        src={skill.lightImage}
                                        className={`${imgClassName} block dark:hidden`}
                                    />
                                </div>
                                <span className="text-sm text-center font-medium text-text-dimmed">
                                    {skill.title}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
                <TabBar
                    context="skills"
                    tabs={devStackTabs}
                    containerClassName="py-4"
                    tabBarClassName="min-w-full lg:min-w-[80%] xl:min-w-[70%] 2xl:min-w-[60%]"
                />
            </section>
        </ScrollReveal>
    );
}
