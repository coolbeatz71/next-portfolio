import { Fragment } from "react";
import {
    OG_IMAGE,
    OG_IMAGE_HEIGHT,
    OG_IMAGE_WIDTH,
    SITE_DESCRIPTION,
    SITE_TITLE,
    SITE_URL
} from "@/shared/config/seo";

export function OpenGraphTags() {
    return (
        <Fragment>
            <meta property="og:type" content="website" key="og:type" />
            <meta property="og:url" content={SITE_URL} key="og:url" />
            <meta property="og:title" content={SITE_TITLE} key="og:title" />
            <meta property="og:description" content={SITE_DESCRIPTION} key="og:description" />
            <meta property="og:image" content={OG_IMAGE} key="og:image" />
            <meta property="og:image:width" content={OG_IMAGE_WIDTH} key="og:image:width" />
            <meta property="og:image:height" content={OG_IMAGE_HEIGHT} key="og:image:height" />
            <meta property="og:image:alt" content="Mutombo Jean-Vincent" key="og:image:alt" />
            <meta property="og:site_name" content="mutombo.dev" key="og:site_name" />
            <meta property="og:locale" content="en_US" key="og:locale" />
            <meta property="og:locale:alternate" content="fr_FR" key="og:locale:fr" />
        </Fragment>
    );
}
