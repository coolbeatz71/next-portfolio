import { Fragment } from "react";
import { OG_IMAGE, SITE_DESCRIPTION, SITE_TITLE } from "@/shared/config/seo";

export function TwitterCardTags() {
    return (
        <Fragment>
            <meta name="twitter:card" content="summary" key="twitter:card" />
            <meta name="twitter:title" content={SITE_TITLE} key="twitter:title" />
            <meta name="twitter:description" content={SITE_DESCRIPTION} key="twitter:description" />
            <meta name="twitter:image" content={OG_IMAGE} key="twitter:image" />
            <meta name="twitter:image:alt" content="Mutombo Jean-Vincent" key="twitter:image:alt" />
        </Fragment>
    );
}
