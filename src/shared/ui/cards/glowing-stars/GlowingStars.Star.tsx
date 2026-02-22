import { domAnimation, LazyMotion } from "motion/react";
import * as m from "motion/react-m";
import { useTheme } from "next-themes";
import { memo } from "react";

import type { StarProps } from "./types";

/**
 * Individual star component.
 *
 * @component
 *
 * @description
 * Renders a single animated star dot that scales and changes color when glowing.
 * The glow color adapts to the current light or dark theme.
 *
 * @param {StarProps} props - Component props
 * @param {boolean} props.isGlowing - Whether the star is currently in its glowing state
 * @param {number} props.delay - Animation delay in seconds
 *
 * @returns The star dot element
 */
function StarComponent({ delay, isGlowing }: StarProps) {
    const { resolvedTheme } = useTheme();

    const glowColor = resolvedTheme === "dark" ? "#fff" : "#ddd";
    const baseColor = resolvedTheme === "dark" ? "#666" : "#ccc";

    return (
        <LazyMotion features={domAnimation}>
            <m.div
                key={delay}
                initial={{
                    scale: 1
                }}
                animate={{
                    scale: isGlowing ? [1, 1.2, 2.5, 2.2, 1.5] : 1,
                    background: isGlowing ? glowColor : baseColor
                }}
                transition={{
                    duration: 2,
                    ease: "easeInOut",
                    delay: delay
                }}
                className="size-px rounded-full relative z-20"
            />
        </LazyMotion>
    );
}

export const Star = memo(StarComponent);
