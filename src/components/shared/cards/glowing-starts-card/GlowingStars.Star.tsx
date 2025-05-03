import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { memo } from "react";

export interface StarProps {
    isGlowing: boolean;
    delay: number;
}

function StarComponent({ delay, isGlowing }: StarProps): JSX.Element {
    const { resolvedTheme } = useTheme();

    const glowColor = resolvedTheme === "dark" ? "#fff" : "#ddd";
    const baseColor = resolvedTheme === "dark" ? "#666" : "#ccc";

    return (
        <motion.div
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
            className="size-[1px] rounded-full relative z-20"
        />
    );
}

export const Star = memo(StarComponent);
