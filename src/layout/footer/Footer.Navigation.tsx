import NextLink from "next/link";
import { memo } from "react";
import { useTranslation } from "react-i18next";
import { IconLink } from "@/shared/config/icons";
import { navigationList } from "@/shared/config/navigation";

/**
 * Footer navigation links component.
 *
 * @component
 *
 * @description
 * Renders the site navigation links inside the footer, each prefixed with a link icon
 * and styled with hover underline and color transitions.
 *
 * @returns The footer navigation element
 */
function FooterNavigationComponent() {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col gap-2">
            <h3 className="w-full text-2xl font-bold text-typography-primary">{t("navigation")}</h3>

            <div className="flex flex-col gap-2">
                {navigationList.map((item) => (
                    <NextLink
                        href={item.href}
                        key={item.label}
                        className="text-typography-contact hover:text-primary-on-accent hover:underline font-medium"
                    >
                        <span className="flex flex-row justify-start">
                            <IconLink className="mt-1 mr-2 shrink-0" size={16} />
                            {t(item.label)}
                        </span>
                    </NextLink>
                ))}
            </div>
        </div>
    );
}

export const FooterNavigation = memo(FooterNavigationComponent);
