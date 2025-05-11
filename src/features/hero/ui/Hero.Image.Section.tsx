import { HeroBadges } from "./Hero.Badges";
import { HeroImage } from "./Hero.Image";

export function HeroImageSection() {
    return (
        <div className="relative w-full md:w-[60%] lg:w-[60%] xl:w-full">
            <HeroBadges />
            <HeroImage />
        </div>
    );
}
