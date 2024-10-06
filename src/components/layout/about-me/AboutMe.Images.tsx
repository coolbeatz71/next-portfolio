import Parallax from "@/components/shared/parallax/Parallax";
import { imageFirstList } from "@/config/ImageSwiper";
import Image from "next/image";

export default function AboutMeImages(): JSX.Element {
    return (
        <>
            {imageFirstList.map((img) => (
                <Parallax key={img.alt} className={img.className}>
                    <>
                        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-400 to-teal-500 transform scale-[0.75] rounded-full blur-3xl" />
                        <div className="relative shadow-xl bg-blue-400/[0.2] border border-gray-800/[0.1] p-1 overflow-hidden rounded-md flex flex-col justify-end items-start">
                            <Image
                                priority
                                width={250}
                                height={350}
                                alt={img.alt}
                                src={img.src}
                                sizes="50vw"
                                className="rounded-md"
                            />
                        </div>
                    </>
                </Parallax>
            ))}
        </>
    );
}
