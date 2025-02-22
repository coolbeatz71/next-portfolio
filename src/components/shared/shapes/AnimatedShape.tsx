import type { AnimatedShapeProps } from "@/config/Animation";
import { motion } from "framer-motion";

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
