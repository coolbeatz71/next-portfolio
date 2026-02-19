import type { MotionProps, Transition } from "framer-motion";

export const useAnimation = () => {
    const floatAnimation: MotionProps["animate"] = {
        y: [0, -20, 0],
        scale: [1, 1.1, 1]
    };

    const rotateAnimation: MotionProps["animate"] = {
        rotate: [0, 360]
    };

    const pulseAnimation: MotionProps["animate"] = {
        scale: [0, 1, 0],
        opacity: [0, 1, 0]
    };

    const transition: Transition = {
        duration: 4,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut"
    };

    return { floatAnimation, rotateAnimation, pulseAnimation, transition };
};
