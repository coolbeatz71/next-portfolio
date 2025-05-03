import { aboutMeImagesList } from "@/config/AboutMe.Images";
import dynamic from "next/dynamic";

export const DynamicParallaxScroll = dynamic(
    async () => {
        const mod = await import(
            /* webpackChunkName: "ParallaxScroll" */
            "./../../shared/parallax-scroll/ParallaxScroll"
        );
        return mod.ParallaxScroll;
    },
    { ssr: false }
);

export function AboutMeImages(): JSX.Element {
    return <DynamicParallaxScroll images={aboutMeImagesList} />;
}
