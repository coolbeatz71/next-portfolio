import { useTranslation } from "react-i18next";
import { creditBadgeList } from "@/shared/config/credit-badge";
import { devToolsLogoList } from "@/shared/config/dev-tools";
import { Badge } from "@/shared/ui/badge/Badge";
import { BadgeDevTools } from "@/shared/ui/badge/Badge.DevTools";

export function HeroBadges() {
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
