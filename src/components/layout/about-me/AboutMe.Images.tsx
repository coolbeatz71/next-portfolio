import { aboutMeImagesList } from "@/config/AboutMe.Images";
import dynamic from "next/dynamic";

const DynamicParallaxScroll = dynamic(
    () => import("./../../shared/parallax-scroll/ParallaxScroll"),
    {
        ssr: false
    }
);

export default function AboutMeImages(): JSX.Element {
    return <DynamicParallaxScroll images={aboutMeImagesList} />;
}
