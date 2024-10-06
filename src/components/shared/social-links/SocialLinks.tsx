import ShimmerButton from "@/components/shared/buttons/shimmer/Shimmer.Button";
import { socialLink } from "@/config/SocialLink";
import Link from "next/link";
import { Fragment } from "react";

export default function SocialLinks(): JSX.Element {
    return (
        <Fragment>
            {socialLink.map((social) => (
                <Link href={social.href} key={social.platform} target="_blank">
                    <ShimmerButton
                        borderRadius="100%"
                        className={`p-4 text-3xl ${social.hoverColor}`}
                    >
                        {social.icon}
                    </ShimmerButton>
                </Link>
            ))}
        </Fragment>
    );
}
