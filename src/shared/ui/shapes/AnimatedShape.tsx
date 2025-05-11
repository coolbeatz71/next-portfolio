import { motion } from "motion/react";
import type { AnimatedShapeProps } from "@/shared/config/animation";

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
