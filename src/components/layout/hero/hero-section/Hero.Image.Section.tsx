import HeroBadges from "../hero-badges/Hero.Badges";
import HeroImage from "../hero-image/Hero.Image";

export default function HeroImageSection(): JSX.Element {
    return (
        <div className="relative w-full">
            <HeroBadges />
            <HeroImage />
        </div>
    );
}
