import dynamic from "next/dynamic";
import { aboutMeImagesList } from "@/config/AboutMe.Images";

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

export function AboutMeImages() {
    return <DynamicParallaxScroll images={aboutMeImagesList} />;
}
