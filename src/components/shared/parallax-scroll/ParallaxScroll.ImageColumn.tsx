import type { AboutMeImage } from "@/config/AboutMe.Images";
import { cn } from "@/helpers/mergeClassName";
import { type MotionValue, motion } from "framer-motion";
import NextImage from "next/image";
import { memo } from "react";

export interface ImageColumnProps {
    columnKey: string;
    imageHeight: number;
    images: AboutMeImage[];
    translate: MotionValue<number>;
}

function ImageColumnComponent({
    images,
    translate,
    columnKey,
    imageHeight
}: ImageColumnProps) {
    const gradientOverlayClassName = `absolute inset-0 h-full w-full bg-gradient-to-r from-indigo-400 
        to-indigo-900 transform scale-[0.75] rounded-full blur-2xl`;

    const imageContainerClassName = cn(
        "h-[14rem] md:h-[20rem] lg:h-[16rem] 2xl:h-[22rem]",
        "relative shadow-xl bg-indigo-500/[0.2] border border-gray-800/[0.1]",
        "p-1 overflow-hidden rounded-lg flex flex-col justify-end items-start"
    );

    const imageClassName = "h-full object-cover object-left-top rounded-lg";

    return (
        <div className="grid gap-2 md:gap-4">
            {images.map((img) => (
                <motion.div
                    className="relative"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    style={{ y: translate }}
                    transition={{ duration: 1 }}
                    key={`${columnKey}-${img.alt}`}
                >
                    <div className={gradientOverlayClassName} />
                    <div className={imageContainerClassName}>
                        <NextImage
                            width={360}
                            src={img.src}
                            alt={img.alt}
                            loading="lazy"
                            placeholder="blur"
                            height={imageHeight}
                            className={imageClassName}
                            blurDataURL={img.blurData}
                        />
                    </div>
                </motion.div>
            ))}
        </div>
    );
}

export const ImageColumn = memo(ImageColumnComponent);
