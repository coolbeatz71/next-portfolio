import { motion } from "motion/react";
import type { AnimatedLineProps } from "@/shared/config/animation";

/**
 * Animated line component.
 *
 * @component
 *
 * @description
 * Renders an SVG path that morphs between two shapes in a looping animation,
 * creating a flowing curved line effect.
 *
 * @param {AnimatedLineProps} props - Component props
 * @param {string} props.pathD - SVG path data string defining the line shape
 * @param {string} [props.className] - Additional class names for the motion container
 * @param {MotionProps["animate"]} [props.animate] - Motion animate config for the container
 * @param {Transition} [props.transition] - Motion transition config for the container
 *
 * @returns The animated SVG line element
 */
export function AnimatedLine({
    className,
    animate,
    transition,
    pathD
}: AnimatedLineProps) {
    return (
        <motion.div
            className={className}
            animate={animate}
            transition={transition}
        >
            <svg
                viewBox="0 0 100 100"
                className="w-full h-full"
                aria-hidden="true"
            >
                <motion.path
                    d={pathD}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    animate={{
                        d: [pathD, pathD.replace("Q30,40", "Q30,60"), pathD]
                    }}
                    transition={{
                        duration: 5,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut"
                    }}
                />
            </svg>
        </motion.div>
    );
}
