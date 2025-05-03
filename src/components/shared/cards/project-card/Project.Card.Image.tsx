import Image from "next/image";

export interface ProjectImageProps {
    src: string;
    alt: string;
    blurDataURL: string;
    onClick: () => void;
}

export function ProjectCardImage({
    src,
    alt,
    onClick,
    blurDataURL
}: ProjectImageProps) {
    return (
        <div
            onClick={onClick}
            onKeyDown={onClick}
            className="w-full md:w-1/2 h-56 md:h-auto relative overflow-hidden cursor-pointer"
        >
            <Image
                fill
                sizes="100%"
                quality={55}
                placeholder="blur"
                alt={alt}
                src={src}
                blurDataURL={blurDataURL}
                className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div
                className={`
                    absolute inset-0 bg-gradient-to-t from-black/50 to-transparent
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300
                `}
            />
        </div>
    );
}
