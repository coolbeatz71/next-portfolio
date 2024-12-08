import { cn } from "@/helpers/mergeClassName";
import { AnimatePresence, motion } from "framer-motion";
import { type ReactNode, useEffect, useRef, useState } from "react";

export interface GlowingStarsCardProps {
    className?: string;
    children?: ReactNode;
}

export default function GlowingStarsCard({
    className,
    children
}: GlowingStarsCardProps): JSX.Element {
    const [mouseEnter, setMouseEnter] = useState(false);

    return (
        <div
            onMouseEnter={() => {
                setMouseEnter(true);
            }}
            onMouseLeave={() => {
                setMouseEnter(false);
            }}
            className={cn(
                "bg-[linear-gradient(110deg,#fff_0.6%,#ccc)] dark:bg-[linear-gradient(110deg,#444_0.6%,#333)] max-w-[5rem] max-h-[5rem] h-full w-full rounded-xl box-shadow-xl border-4 border-slate-300 dark:border-slate-500 relative flex items-center justify-center",
                className
            )}
        >
            <div className="absolute inset-0 z-0">
                <Illustration mouseEnter={mouseEnter} />
            </div>
            <div className="relative z-10 flex justify-center items-center">
                {children}
            </div>
        </div>
    );
}

export const Illustration = ({ mouseEnter }: { mouseEnter: boolean }) => {
    const stars = 25;
    const columns = 5;

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
    }, []);

    return (
        <div
            className="h-20 p-1 w-full"
            style={{
                display: "grid",
                gridTemplateColumns: `repeat(${columns}, 1fr)`,
                gap: "1px"
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
                            isGlowing={mouseEnter ? true : isGlowing}
                            delay={mouseEnter ? staticDelay : delay}
                        />
                        {mouseEnter && <Glow delay={staticDelay} />}
                        <AnimatePresence mode="wait">
                            {isGlowing && <Glow delay={delay} />}
                        </AnimatePresence>
                    </div>
                );
            })}
        </div>
    );
};

function Star({
    isGlowing,
    delay
}: { isGlowing: boolean; delay: number }): JSX.Element {
    return (
        <motion.div
            key={delay}
            initial={{
                scale: 1
            }}
            animate={{
                scale: isGlowing ? [1, 1.2, 2.5, 2.2, 1.5] : 1,
                background: isGlowing ? "#fff" : "#666"
            }}
            transition={{
                duration: 2,
                ease: "easeInOut",
                delay: delay
            }}
            className={cn(
                "bg-[#666] h-[1px] w-[1px] rounded-full relative z-20"
            )}
        />
    );
}

function Glow({ delay }: { delay: number }): JSX.Element {
    return (
        <motion.div
            initial={{
                opacity: 0
            }}
            animate={{
                opacity: 1
            }}
            transition={{
                duration: 2,
                ease: "easeInOut",
                delay: delay
            }}
            exit={{
                opacity: 0
            }}
            className="absolute  left-1/2 -translate-x-1/2 z-10 h-[4px] w-[4px] rounded-full bg-blue-500 blur-[1px] shadow-2xl shadow-blue-400"
        />
    );
}
