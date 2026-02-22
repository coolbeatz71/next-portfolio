import { domAnimation, LazyMotion } from "motion/react";
import * as m from "motion/react-m";
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
    const gradientOverlayClassName = `
    absolute inset-0 h-full w-full bg-linear-to-r 
    from-parallax-gradient-start to-parallax-gradient-end 
    transform scale-[0.75] rounded-full blur-2xl`;

    const imageContainerClassName = cn(
        "h-[14rem] md:h-[20rem] lg:h-[16rem] 2xl:h-[22rem]",
        "relative shadow-xl bg-parallax-overlay border border-parallax-border",
        "p-1 overflow-hidden rounded-lg flex flex-col justify-end items-start"
    );

    const imageClassName = "h-full object-cover object-left-top rounded-lg";

    return (
        <div className="grid gap-2 md:gap-4">
            {images.map((img) => (
                <LazyMotion features={domAnimation}>
                    <m.div
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
                                width={480}
                                src={img.src}
                                alt={img.alt}
                                loading="lazy"
                                placeholder="blur"
                                height={imageHeight}
                                className={imageClassName}
                                blurDataURL={img.blurData}
                                sizes="(max-width: 640px) 45vw, (max-width: 1024px) 40vw, 360px"
                            />
                        </div>
                    </m.div>
                </LazyMotion>
            ))}
        </div>
    );
}

export const ImageColumn = memo(ImageColumnComponent);
