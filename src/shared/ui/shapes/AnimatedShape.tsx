import { AnimatedShapeProps } from "@shared/config/types";
import { motion } from "motion/react";

/**
 * Animated shape component.
 *
 * @component
 *
 * @description
 * A generic motion div wrapper that applies animation and transition props.
 * Used to render decorative animated shapes (circles, blobs, etc.) in the hero section.
 *
 * @param {AnimatedShapeProps} props - Component props
 * @param {string} [props.className] - Class names for sizing, color, and positioning
 * @param {MotionProps["animate"]} [props.animate] - Motion animate config
 * @param {Transition} [props.transition] - Motion transition config
 *
 * @returns The animated shape element
 */
export function AnimatedShape({
    className,
    animate,
    transition,
    ...props
}: AnimatedShapeProps) {
    return (
        <motion.div
            className={className}
            animate={animate}
            transition={transition}
            {...props}
        />
    );
}
