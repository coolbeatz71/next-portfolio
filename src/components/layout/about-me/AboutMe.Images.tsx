import { ParallaxScroll } from "@/components/shared/parallax-scroll/ParallaxScroll";
import { imageFirstList } from "@/config/ImageSwiper";
import { Fragment } from "react";

export default function AboutMeImages(): JSX.Element {
    return (
        <Fragment>
            <ParallaxScroll images={imageFirstList} />
        </Fragment>
    );
}
