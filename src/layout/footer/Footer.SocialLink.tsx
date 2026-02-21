import NextLink from "next/link";
import { useTranslation } from "react-i18next";
import { socialLinksList } from "@/shared/config/social-links";

/**
 * Footer social links component.
 *
 * @component
 *
 * @description
 * Renders a row of social platform icon buttons that open the corresponding profile
 * pages in a new tab.
 *
 * @returns The footer social links element
 */
export function FooterSocialLink() {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col  items-start gap-2">
            <h3 className="w-full text-2xl font-bold text-typography-primary">
                {t("follow_me")}
            </h3>

            <div className="flex w-full gap-2">
                {socialLinksList.map((social) => (
                    <NextLink
                        href={social.href}
                        key={social.platform}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${social.platform} (opens in new tab)`}
                        className={`
                            text-typography-contact hover:bg-surface-hover ${social.hoverColor}
                            focus:outline-none font-medium rounded-lg text-3xl text-center items-center p-[0.685rem] duration-moderate inline-flex
                        `}
                    >
                        <span aria-hidden="true">{social.icon}</span>
                    </NextLink>
                ))}
            </div>
        </div>
    );
}
