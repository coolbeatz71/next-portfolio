import { domAnimation, LazyMotion } from "motion/react";
import * as m from "motion/react-m";
import { memo } from "react";
import type { GlowProps } from "./types";

/**
 * Glow dot component.
 *
 * @component
 *
 * @description
 * Renders a small blurred cyan dot with a pink shadow that fades in and out,
 * used to simulate a glowing effect on individual stars.
 *
 * @param {GlowProps} props - Component props
 * @param {number} props.delay - Animation delay in seconds before the glow appears
 *
 * @returns The glow dot element
 */
function GlowComponent({ delay }: GlowProps) {
    return (
        <LazyMotion features={domAnimation}>
            <m.div
                initial={{
                    opacity: 0
                }}
                animate={{
                    opacity: 1
                }}
                transition={{
                    duration: 2,
                    delay: delay,
                    ease: "easeInOut"
                }}
                exit={{
                    opacity: 0
                }}
                className={`
                absolute translate-x-1/5 z-10 size-px rounded-full
                bg-glow-star blur-[1px] shadow-md shadow-glow-shadow
            `}
            />
        </LazyMotion>
    );
}

export const Glow = memo(GlowComponent);
