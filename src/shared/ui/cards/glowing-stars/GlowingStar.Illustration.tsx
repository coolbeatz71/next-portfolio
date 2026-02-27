import { AnimatePresence, domAnimation, LazyMotion } from "motion/react";
import { memo, useEffect, useRef, useState } from "react";
import { Glow } from "./GlowingStar.Glow";
import { Star } from "./GlowingStars.Star";
import type { IllustrationProps } from "./types";

/**
 * Glowing stars illustration component.
 *
 * @component
 *
 * @description
 * Renders a grid of stars that randomly glow on an interval.
 * When the mouse enters the parent card, all stars glow simultaneously.
 *
 * @param {IllustrationProps} props - Component props
 * @param {boolean} props.mouseEnter - Whether the parent card is hovered
 * @param {number} [props.stars] - Total number of stars in the grid; defaults to 16
 * @param {number} [props.columns] - Number of grid columns; defaults to 4
 *
 * @returns The glowing stars illustration element
 */
function IllustrationComponent({
    mouseEnter,
    stars = 16,
    columns = 4
}: IllustrationProps) {
    const highlightedStars = useRef<number[]>([]);
    const [glowingStars, setGlowingStars] = useState<number[]>([]);

    useEffect(() => {
        const interval = setInterval(() => {
            highlightedStars.current = Array.from({ length: 5 }, () =>
                Math.floor(Math.random() * stars)
            );
            setGlowingStars((prev) => {
                const next = highlightedStars.current;
                if (
                    prev.length === next.length &&
                    prev.every((v, i) => v === next[i])
                )
                    return prev;
                return [...next];
            });
        }, 3000);

        return () => clearInterval(interval);
    }, [stars]);

    return (
        <LazyMotion features={domAnimation}>
            <div
                className="h-full w-full"
                style={{
                    display: "grid",
                    gridTemplateColumns: `repeat(${columns}, 1fr)`
                }}
            >
                {[...Array(stars)].map((star, starIdx) => {
                    const isGlowing = glowingStars.includes(starIdx);
                    const delay = (starIdx % 10) * 0.1;
                    const staticDelay = starIdx * 0.01;

                    return (
                        <div
                            key={`matrix-col-${star}-${
                                // biome-ignore lint/suspicious/noArrayIndexKey: need to use index as key
                                starIdx
                            }`}
                            className="relative flex items-center justify-center"
                        >
                            <Star
                                isGlowing={mouseEnter || isGlowing}
                                delay={mouseEnter ? staticDelay : delay}
                            />
                            {mouseEnter && <Glow delay={staticDelay} />}
                            <AnimatePresence mode="wait">
                                {isGlowing && (
                                    <Glow
                                        delay={mouseEnter ? staticDelay : delay}
                                    />
                                )}
                            </AnimatePresence>
                        </div>
                    );
                })}
            </div>
        </LazyMotion>
    );
}

export const Illustration = memo(IllustrationComponent);
