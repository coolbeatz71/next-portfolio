import { motion } from "motion/react";
import NextImage from "next/image";
import { memo } from "react";
import { cn } from "@/shared/lib/cn";
import type { ImageColumnProps } from "./types";

/**
 * Parallax scroll image column component.
 *
 * @component
 *
 * @description
 * Renders a vertical stack of images that translate along the Y-axis
 * based on a motion value, creating a parallax effect when paired with scroll.
 *
 * @param {ImageColumnProps} props - Component props
 * @param {IAboutMeImage[]} props.images - Images to display in this column
 * @param {MotionValue<number>} props.translate - Motion value controlling vertical translation
 * @param {string} props.columnKey - Unique key prefix used for React list keys
 * @param {number} props.imageHeight - Target display height of each image in pixels
 *
 * @returns The animated image column element
 */
function ImageColumnComponent({
    images,
    translate,
    columnKey,
    imageHeight
}: ImageColumnProps) {
    const gradientOverlayClassName = `absolute inset-0 h-full w-full bg-linear-to-r from-indigo-400 
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
