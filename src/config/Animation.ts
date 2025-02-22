import type { MotionProps } from "framer-motion";

export interface AnimatedShapeProps extends MotionProps {
    className?: string;
}

export interface AnimatedLineProps extends AnimatedShapeProps {
    pathD: string;
}
