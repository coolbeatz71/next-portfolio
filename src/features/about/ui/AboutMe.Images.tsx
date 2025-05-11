import dynamic from "next/dynamic";
import { aboutMeImagesList } from "@/features/about/data/about.images";

export const DynamicParallaxScroll = dynamic(
    async () => {
        const mod = await import(
            /* webpackChunkName: "ParallaxScroll" */
            "@/shared/ui/parallax-scroll/ParallaxScroll"
        );
        return mod.ParallaxScroll;
    },
    { ssr: false }
);

export function AboutMeImages() {
    return <DynamicParallaxScroll images={aboutMeImagesList} />;
}
