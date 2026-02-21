import type { MotionProps, Transition } from "motion/react";
import type { RefObject } from "react";

/**
 * @interface IUseAnimation
 * @property {MotionProps["animate"]} floatAnimation - Vertical float with slight scale
 * @property {MotionProps["animate"]} rotateAnimation - Full 360° rotation
 * @property {MotionProps["animate"]} pulseAnimation - Scale and opacity pulse
 * @property {Transition} transition - Shared transition config (4s, infinite, easeInOut)
 */
export interface IUseAnimation {
    floatAnimation: MotionProps["animate"];
    rotateAnimation: MotionProps["animate"];
    pulseAnimation: MotionProps["animate"];
    transition: Transition;
}

/**
 * @interface IUseScrollRevealType
 * @property {boolean} isVisible - Whether the element is currently in the viewport
 * @property {RefObject<HTMLDivElement | null>} ref - Attach to the target element
 */
export interface IUseScrollRevealType {
    isVisible: boolean;
    ref: RefObject<HTMLDivElement | null>;
}
