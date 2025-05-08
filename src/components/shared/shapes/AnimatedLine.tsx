import { motion } from "motion/react";
import type { AnimatedLineProps } from "@/config/Animation";

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
