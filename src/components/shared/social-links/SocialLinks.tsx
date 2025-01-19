import ShimmerButton from "@/components/shared/buttons/shimmer/Shimmer.Button";
import { socialLinksList } from "@/config/SocialLink";
import NextLink from "next/link";
import { Fragment } from "react";

export default function SocialLinks(): JSX.Element {
    return (
        <Fragment>
            {socialLinksList.slice(0, 3).map((social) => (
                <NextLink
                    target="_blank"
                    href={social.href}
                    key={social.platform}
                >
                    <ShimmerButton
                        borderRadius="100%"
                        className={`p-4 text-3xl ${social.hoverColor}`}
                    >
                        {social.icon}
                    </ShimmerButton>
                </NextLink>
            ))}
        </Fragment>
    );
}
