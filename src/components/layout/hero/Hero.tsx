import { FcBriefcase, FcGlobe } from "react-icons/fc";

import Badge from "@/components/shared/badge/Badge";
import FlipWords from "@/components/shared/filp-words/FlipWords";
import HeroImage from "@/components/shared/dev-image/DevImage";
import BadgeDevTools from "@/components/shared/badge/Badge.DevTools";

const devToolsLogoList = [
    { top: "0", right: "10rem", iconName: "bg-icon_node" },
    { top: "20%", right: "6rem", iconName: "bg-icon_react" },
    { top: "40%", right: "4rem", iconName: "bg-icon_angular" },
    { top: "60%", right: "4rem", iconName: "bg-icon_flutter" },
    { top: "80%", right: "8rem", iconName: "bg-icon_vue" },
    { top: "100%", right: "10rem", iconName: "bg-icon_laravel" }
];

const badgeList = [
    {
        icon: <FcBriefcase />,
        className: "absolute top-[24%] -left-[5rem]",
        count: 7,
        text: "Years of Experience"
    },
    {
        icon: <FcGlobe />,
        className: "absolute top-[80%] -left-[1rem]",
        count: 25,
        text: "Live Projects"
    }
];

export default function Hero(): JSX.Element {
    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 xl:grid-cols-2 items-center py-12">
                <div className="flex flex-col items-start xl:px-0 px-8">
                    <h1 className="max-w-xl mb-4 text-2xl font-bold tracking-tight !leading-loose md:text-3xl xl:text-3xl text-white dark:text-black">
                        Hi 👋🏽, <br />
                        <span className="xl:text-4xl">I am Jean-Vincent </span>
                        <br />
                        <FlipWords
                            words={[
                                "Software Engineer",
                                "Frontend Engineer",
                                "Mobile Engineer"
                            ]}
                            className="pl-0 text-indigo-500 dark:text-indigo-500 xl:text-5xl"
                        />
                    </h1>
                    <p className="max-w-2xl mb-6 font-light text-gray-400 lg:mb-8 md:text-md lg:text-md dark:text-gray-200">
                        FullStack - PREN/MEAN - PHP/Laravel - Dart/Flutter
                    </p>
                </div>
                <div className="hidden xl:flex relative">
                    {badgeList.map((badge) => (
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
                            className={`absolute top-[${badge.top}] right-[${badge.right}]`}
                            iconName={badge.iconName}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
