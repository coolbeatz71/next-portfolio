import { aboutMeImagesList } from "@/config/AboutMe.Images";
import dynamic from "next/dynamic";
import { Fragment } from "react";

const DynamicParallaxScroll = dynamic(
    () => import("./../../shared/parallax-scroll/ParallaxScroll"),
    {
        ssr: false
    }
);

export default function AboutMeImages(): JSX.Element {
    return (
        <Fragment>
            <DynamicParallaxScroll images={aboutMeImagesList} />
        </Fragment>
    );
}
