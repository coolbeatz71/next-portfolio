import type { MotionProps, Transition } from "motion/react";
import type { IUseAnimation } from "./types";

/**
 * Custom hook for reusable motion animation presets.
 *
 * @description
 * Provides float, rotate, and pulse animation variants for use with `motion` components.
 * All animations loop infinitely with an easeInOut transition of 4 seconds.
 *
 * @returns {IUseAnimation} Animation presets and shared transition config
 * @returns {MotionProps["animate"]} floatAnimation - Vertical float with slight scale
 * @returns {MotionProps["animate"]} rotateAnimation - Full 360° rotation
 * @returns {MotionProps["animate"]} pulseAnimation - Scale and opacity pulse
 * @returns {Transition} transition - Shared transition (4s, infinite, easeInOut)
 */
export const useAnimation = (): IUseAnimation => {
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
