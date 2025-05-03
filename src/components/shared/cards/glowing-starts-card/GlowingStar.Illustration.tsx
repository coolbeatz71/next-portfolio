import { AnimatePresence } from "framer-motion";
import { memo, useEffect, useRef, useState } from "react";
import { Glow } from "./GlowingStar.Glow";
import { Star } from "./GlowingStars.Star";

export interface IllustrationProps {
    stars?: number;
    columns?: number;
    mouseEnter: boolean;
}

function IllustrationComponent({
    mouseEnter,
    stars = 16,
    columns = 4
}: IllustrationProps): JSX.Element {
    const [glowingStars, setGlowingStars] = useState<number[]>([]);

    const highlightedStars = useRef<number[]>([]);

    useEffect(() => {
        const interval = setInterval(() => {
            highlightedStars.current = Array.from({ length: 5 }, () =>
                Math.floor(Math.random() * stars)
            );
            setGlowingStars([...highlightedStars.current]);
        }, 3000);

        return () => clearInterval(interval);
    }, [stars]);

    return (
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
    );
}

export const Illustration = memo(IllustrationComponent);
