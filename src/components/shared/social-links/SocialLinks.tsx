import { OutlineButton } from "@/components/shared/buttons/outline/Outline.Button";
import { socialLinksList } from "@/config/SocialLink";
import NextLink from "next/link";
import { Fragment } from "react";

export function SocialLinks(): JSX.Element {
    return (
        <Fragment>
            {socialLinksList.slice(0, 3).map((social) => (
                <NextLink
                    target="_blank"
                    href={social.href}
                    key={social.platform}
                >
                    <OutlineButton
                        className={`p-3 md:p-4 text-3xl ${social.hoverColor} duration-300`}
                    >
                        {social.icon}
                    </OutlineButton>
                </NextLink>
            ))}
        </Fragment>
    );
}
