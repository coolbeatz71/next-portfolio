import { ParallaxScroll } from "@/components/shared/parallax-scroll/ParallaxScroll";
import { aboutMeImagesList } from "@/config/AboutMe.Images";
import { Fragment } from "react";

export default function AboutMeImages(): JSX.Element {
    return (
        <Fragment>
            <ParallaxScroll images={aboutMeImagesList} />
        </Fragment>
    );
}
