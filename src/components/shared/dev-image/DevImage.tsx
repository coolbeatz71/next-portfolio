import NextImage from "next/image";

export interface HeroImageProps {
    src: string;
    className?: string;
}
export default function HeroImage({
    className,
    src
}: HeroImageProps): JSX.Element {
    return (
        <div className={className}>
            <NextImage
                priority
                unoptimized
                width={360}
                height={100}
                src={src}
                alt="hero-image"
            />
        </div>
    );
}
