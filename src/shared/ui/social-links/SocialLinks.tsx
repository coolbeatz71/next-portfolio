import NextLink from "next/link";
import { Fragment } from "react";
import { socialLinksList } from "@/shared/config/social-links";
import { OutlineButton } from "@/shared/ui/buttons/Outline.Button";

/**
 * Social links component.
 *
 * @component
 *
 * @description
 * Renders the first three social platform links as outline icon buttons
 * that open in a new tab. Each button uses the platform's hover color.
 *
 * @returns The social links element
 */
export function SocialLinks() {
    return (
        <Fragment>
            {socialLinksList.slice(0, 3).map((social) => (
                <NextLink
                    target="_blank"
                    href={social.href}
                    key={social.platform}
                    rel="noopener noreferrer"
                    aria-label={`${social.platform} (opens in new tab)`}
                >
                    <OutlineButton
                        as="span"
                        className={`p-3 md:p-4 text-3xl ${social.hoverColor} duration-moderate`}
                    >
                        <span aria-hidden="true">{social.icon}</span>
                    </OutlineButton>
                </NextLink>
            ))}
        </Fragment>
    );
}
