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

/**
 * About me images component.
 *
 * @component
 *
 * @description
 * Renders the parallax scrolling photo grid for the about section.
 * The ParallaxScroll component is loaded client-side only to avoid SSR issues.
 *
 * @returns The about me parallax image grid element
 */
export function AboutMeImages() {
    return <DynamicParallaxScroll images={aboutMeImagesList} />;
}
