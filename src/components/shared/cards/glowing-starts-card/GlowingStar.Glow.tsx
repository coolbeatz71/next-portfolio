import { motion } from "framer-motion";
import { memo } from "react";

export interface GlowProps {
    delay: number;
}

function GlowComponent({ delay }: GlowProps): JSX.Element {
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
                delay: delay,
                ease: "easeInOut"
            }}
            exit={{
                opacity: 0
            }}
            className={`
                absolute translate-x-1/5 z-10 size-[1px] rounded-full
                bg-cyan-300 dark:bg-cyan-500 blur-[1px] shadow-md shadow-pink-500
            `}
        />
    );
}

export const Glow = memo(GlowComponent);
