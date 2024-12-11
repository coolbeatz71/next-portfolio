import Badge from "@/components/shared/badge/Badge";
import BadgeDevTools from "@/components/shared/badge/Badge.DevTools";
import HeroImage from "@/components/shared/dev-image/DevImage";
import FlipWords from "@/components/shared/filp-words/FlipWords";
import SocialLinks from "@/components/shared/social-links/SocialLinks";

import { creditBadgeList } from "@/config/CreditBadge";
import { devToolsLogoList } from "@/config/DevTools";

export default function Hero(): JSX.Element {
    return (
        <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 xl:grid-cols-2 items-center py-10">
                <div className="flex flex-col items-start xl:px-0 px-8">
                    <br />
                    <h1 className="max-w-xl mb-4 text-2xl font-bold tracking-tight !leading-loose md:text-3xl xl:text-3xl dark:text-white text-black">
                        Hi 👋🏽, <br />
                        <span className="xl:text-4xl">I am Jean-Vincent </span>
                        <br />
                        <FlipWords
                            words={[
                                "Software Engineer",
                                "Frontend Engineer",
                                "Mobile Engineer"
                            ]}
                            className="pl-0 text-indigo-700 dark:text-indigo-500 xl:text-5xl"
                        />
                    </h1>
                    <p className="max-w-2xl mb-6 font-semibold lg:mb-8 md:text-md lg:text-md text-slate-600 dark:text-slate-400">
                        FullStack - PREN/MEAN - PHP/Laravel - Dart/Flutter
                    </p>
                    <div className="flex flex-row gap-4">
                        <SocialLinks />
                    </div>
                </div>
                <div className="hidden xl:flex relative">
                    {creditBadgeList.map((badge) => (
                        <Badge
                            key={badge.text}
                            className={badge.className}
                            icon={badge.icon}
                            endCountNumber={badge.count}
                            badgeText={badge.text}
                        />
                    ))}

                    <div className="bg-hero_shape_light dark:bg-hero_shape_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2" />
                    <HeroImage
                        src="/hero/me.png"
                        className="bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom -bottom-2 -right-3"
                    />

                    {devToolsLogoList.map((badge) => (
                        <BadgeDevTools
                            key={badge.iconName}
                            className={badge.className}
                            iconName={badge.iconName}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
