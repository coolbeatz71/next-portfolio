import { imageFirstList } from "@/config/ImageSwiper";
import NextImage from "next/image";
import { Fragment } from "react";

export default function AboutMeImages(): JSX.Element {
    return (
        <Fragment>
            {imageFirstList.map((img) => (
                <div key={img.alt}>
                    <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-400 to-teal-500 transform scale-[0.75] rounded-full blur-3xl" />
                    <div className="relative shadow-xl bg-indigo-500/[0.2] border border-gray-800/[0.1] p-1 overflow-hidden rounded-xl flex flex-col justify-end items-start">
                        <NextImage
                            priority
                            width={250}
                            height={350}
                            alt={img.alt}
                            src={img.src}
                            sizes="50vw"
                            className="rounded-xl"
                        />
                    </div>
                </div>
            ))}
        </Fragment>
    );
}
