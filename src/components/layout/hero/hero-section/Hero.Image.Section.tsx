import { HeroBadges } from "../hero-badges/Hero.Badges";
import { HeroImage } from "../hero-image/Hero.Image";

export function HeroImageSection() {
    return (
        <div className="relative w-full md:w-[60%] lg:w-[60%] xl:w-full">
            <HeroBadges />
            <HeroImage />
        </div>
    );
}
