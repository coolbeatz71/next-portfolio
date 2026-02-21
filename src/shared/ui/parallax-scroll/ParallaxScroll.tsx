import { cn } from "@/shared/lib/cn";
import { useParallaxScroll } from "./hooks/useParallaxScroll";
import { ImageColumn } from "./ParallaxScroll.ImageColumn";
import type { ParallaxScrollProps } from "./types";

/**
 * Parallax scroll component.
 *
 * @component
 *
 * @description
 * Displays a two-column image grid where each column scrolls at different speeds
 * based on the page scroll position. Images are randomly selected every 5 seconds
 * without repeating the previous set.
 *
 * @param {ParallaxScrollProps} props - Component props
 * @param {IAboutMeImage[]} props.images - Full list of images to randomly pick from
 * @param {string} [props.className] - Additional class names for the outer container
 *
 * @returns The parallax scroll image grid element
 */
export function ParallaxScroll({ images, className }: ParallaxScrollProps) {
    const {
        firstColumn,
        secondColumn,
        imageHeight,
        translateFirst,
        translateSecond
    } = useParallaxScroll(images);

    return (
        <div className={cn("w-full pt-12", className)}>
            <div className="grid grid-cols-2 items-start max-w-5xl mx-auto gap-2 md:gap-4">
                <ImageColumn
                    images={firstColumn}
                    columnKey="first-column"
                    imageHeight={imageHeight}
                    translate={translateFirst}
                />
                <ImageColumn
                    images={secondColumn}
                    columnKey="second-column"
                    imageHeight={imageHeight}
                    translate={translateSecond}
                />
            </div>
        </div>
    );
}
