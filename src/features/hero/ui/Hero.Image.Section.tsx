import { HeroBadges } from "./Hero.Badges";
import { HeroImage } from "./Hero.Image";

/**
 * Hero image section component.
 *
 * @component
 *
 * @description
 * Combines the hero profile image and the floating badges overlay
 * into a single positioned container.
 *
 * @returns The hero image section element
 */
export function HeroImageSection() {
    return (
        <div className="relative w-full md:w-[60%] xl:w-full">
            <HeroBadges />
            <HeroImage />
        </div>
    );
}
