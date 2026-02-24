import dynamic from "next/dynamic";
import { memo } from "react";
import { useTranslation } from "react-i18next";
import { creditBadgeList } from "@/shared/config/credit-badge";
import { devToolsLogoList } from "@/shared/config/dev-tools";
import { BadgeDevTools } from "@/shared/ui/badge/Badge.DevTools";

const Badge = dynamic(async () => {
    const mod = await import(
        /* webpackChunkName: "Badge" */
        "@/shared/ui/badge/Badge"
    );
    return mod.Badge;
});

/**
 * Hero badges component.
 *
 * @component
 *
 * @description
 * Renders the floating overlay on the hero image, showing stat badges on the left
 * and dev tool icon badges in a 2-column grid on the right.
 *
 * @returns The hero badges overlay element
 */
function HeroBadgesComponent() {
    const { t } = useTranslation();

    return (
        <div className="absolute flex justify-between w-full h-full z-20">
            <div className="flex justify-around flex-col">
                {creditBadgeList.map((badge) => (
                    <Badge
                        key={badge.text}
                        icon={badge.icon}
                        badgeText={t(badge.text)}
                        className={badge.className}
                        endCountNumber={badge.count}
                    />
                ))}
            </div>
            <div className="grid grid-cols-2 h-48 place-items-center gap-2 md:gap-4">
                {devToolsLogoList.map((badge) => (
                    <div
                        key={badge.iconName}
                        className={badge.containerClassName}
                    >
                        <BadgeDevTools
                            iconName={badge.iconName}
                            className={badge.className}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export const HeroBadges = memo(HeroBadgesComponent);
