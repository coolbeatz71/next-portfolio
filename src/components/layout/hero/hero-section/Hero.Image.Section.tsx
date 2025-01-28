import { Fragment } from "react";

import Badge from "@/components/shared/badge/Badge";
import BadgeDevTools from "@/components/shared/badge/Badge.DevTools";
import { creditBadgeList } from "@/config/CreditBadge";
import { devToolsLogoList } from "@/config/DevTools";

import { useTranslation } from "react-i18next";
import HeroImage from "../hero-image/Hero.Image";

export default function HeroImageSection(): JSX.Element {
    const { t } = useTranslation();
    return (
        <Fragment>
            {creditBadgeList.map((badge) => (
                <Badge
                    key={badge.text}
                    className={badge.className}
                    icon={badge.icon}
                    endCountNumber={badge.count}
                    badgeText={t(badge.text)}
                />
            ))}

            <HeroImage className="bg-no-repeat relative" />

            {devToolsLogoList.map((badge) => (
                <BadgeDevTools
                    key={badge.iconName}
                    className={badge.className}
                    iconName={badge.iconName}
                />
            ))}
        </Fragment>
    );
}
