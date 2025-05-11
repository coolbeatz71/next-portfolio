import type { MotionProps } from "motion/react";

export interface AnimatedShapeProps extends MotionProps {
    className?: string;
}

export interface AnimatedLineProps extends AnimatedShapeProps {
    pathD: string;
}
