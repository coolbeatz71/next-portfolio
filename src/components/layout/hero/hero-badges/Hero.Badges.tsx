import Badge from "@/components/shared/badge/Badge";
import BadgeDevTools from "@/components/shared/badge/Badge.DevTools";
import { creditBadgeList } from "@/config/CreditBadge";
import { devToolsLogoList } from "@/config/DevTools";
import { useTranslation } from "react-i18next";

export default function HeroBadges(): JSX.Element {
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
            <div className="grid grid-cols-2 h-[12rem] place-items-center gap-2 md:gap-4">
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
