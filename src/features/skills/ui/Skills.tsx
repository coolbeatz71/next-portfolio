import NextImage from "next/image";
import { useTranslation } from "react-i18next";
import { devStackGroups } from "@/features/skills/data/skills.groups";
import { mainStackList } from "@/features/skills/data/skills.main";
import { RESPONSIVE_CLASSNAME } from "@/shared/config/style";
import { cn } from "@/shared/lib/cn";
import { SkillCard } from "@/shared/ui/cards/skills/Skills.Card";
import { ScrollReveal } from "@/shared/ui/scroll-reveal/ScrollReveal";
import { SectionHeader } from "@/shared/ui/section-header/SectionHeader";

/**
 * Skills section component.
 *
 * @component
 *
 * @description
 * Renders the skills section featuring a grid of main stack technology icons above a
 * responsive grid of category cards, each listing its tools with proficiency bars.
 *
 * @returns The skills section element
 */
const imgClassName = `object-contain transition-all duration-base ease-in-out
    filter grayscale opacity-70 group-hover:filter-none group-hover:opacity-100
`;

const skillIconClassName =
    "relative h-16 w-16 lg:h-24 lg:w-24 transform transition-transform ease-out hover:scale-90";
const imgDarkClassName = `${imgClassName} hidden dark:block`;
const imgLightClassName = `${imgClassName} block dark:hidden`;

export function Skills() {
    const { t } = useTranslation();

    return (
        <ScrollReveal className="delay-300">
            <section id="skill" className={cn(RESPONSIVE_CLASSNAME, "py-12 xl:py-32 scroll-mt-10")}>
                <div className="pb-6 md:pb-12">
                    <SectionHeader title={t("skills_title")} subtitle={t("skills_subtitle")} />
                </div>
                <div className="relative">
                    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 md:px-24">
                        {mainStackList.map((skill) => (
                            <div
                                key={skill.title}
                                className="flex flex-col items-center group cursor-pointer p-4 md:p-8"
                            >
                                <div className={skillIconClassName}>
                                    {/* dark image */}
                                    <NextImage
                                        fill
                                        alt={skill.title}
                                        src={skill.darkImage}
                                        sizes="(min-width: 1024px) 96px, 64px"
                                        className={imgDarkClassName}
                                    />
                                    {/* light image */}
                                    <NextImage
                                        fill
                                        alt={skill.title}
                                        src={skill.lightImage}
                                        sizes="(min-width: 1024px) 96px, 64px"
                                        className={imgLightClassName}
                                    />
                                </div>
                                <span className="text-sm text-center font-medium text-typography-dimmed">
                                    {skill.title}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="grid gap-6 pt-8 md:grid-cols-2 xl:grid-cols-3">
                    {devStackGroups.map((group) => (
                        <SkillCard key={group.title} title={group.title} stacks={group.stacks} />
                    ))}
                </div>
            </section>
        </ScrollReveal>
    );
}
