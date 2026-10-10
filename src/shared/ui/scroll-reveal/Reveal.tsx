import { domAnimation, LazyMotion, type Variants } from "motion/react";
import * as m from "motion/react-m";
import { memo } from "react";
import type { RevealProps } from "./types";

const STAGGER_STEP = 0.1;
const STAGGER_CAP = 3;

const TRAVEL = 80;
const DURATION = 0.5;
const EASE = [0.4, 0, 0.2, 1] as const;

const REVEAL_VARIANTS: Variants = {
    hidden: { opacity: 0, y: TRAVEL },
    visible: (index: number) => ({
        y: 0,
        opacity: 1,
        transition: {
            ease: EASE,
            duration: DURATION,
            delay: Math.min(index, STAGGER_CAP) * STAGGER_STEP
        }
    })
};

const VIEWPORT = { once: true, amount: 0.2 } as const;

/**
 * Reveal component.
 *
 * @component
 *
 * @description
 * Reveals a single item the first time it scrolls into view, fading it in and lifting it
 * into place over 80px. Items in a list stagger by position, capped so a long grid never
 * leaves the last card waiting. The wrapper carries no `overflow-hidden`, so a card inside
 * it keeps its hover shadow and its height in a grid.
 *
 * @param {RevealProps} props - Component props
 * @param {ReactNode} props.children - Content revealed when it scrolls into view
 * @param {number} [props.index] - Position in a list, used to stagger the reveal
 * @param {string} [props.className] - Additional class names for the wrapper
 *
 * @returns The reveal wrapper element
 */
function RevealComponent({ index = 0, className, children }: RevealProps) {
    return (
        <LazyMotion features={domAnimation}>
            <m.div
                custom={index}
                initial="hidden"
                viewport={VIEWPORT}
                whileInView="visible"
                className={className}
                variants={REVEAL_VARIANTS}
            >
                {children}
            </m.div>
        </LazyMotion>
    );
}

export const Reveal = memo(RevealComponent);
