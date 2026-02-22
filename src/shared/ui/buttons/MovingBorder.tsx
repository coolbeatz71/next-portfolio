import {
    domAnimation,
    LazyMotion,
    useAnimationFrame,
    useMotionTemplate,
    useMotionValue,
    useTransform
} from "motion/react";
import * as m from "motion/react-m";

import { Fragment, memo, useRef } from "react";
import type { MovingBorderProps } from "./types";

/**
 * Moving border primitive component.
 *
 * @component
 *
 * @description
 * Animates a child element along the perimeter of a rounded SVG rectangle,
 * creating the illusion of a glowing element traveling around the border.
 *
 * @param {MovingBorderProps} props - Component props
 * @param {ReactNode} props.children - The element that travels along the border
 * @param {number} [props.duration] - Time in milliseconds to complete one full loop; defaults to 2000
 * @param {string} [props.rx] - SVG horizontal border radius (e.g. "30%")
 * @param {string} [props.ry] - SVG vertical border radius (e.g. "30%")
 *
 * @returns The animated moving border element
 */
function MovingBorderComponent({
    children,
    duration = 2000,
    rx,
    ry,
    ...otherProps
}: MovingBorderProps) {
    const progress = useMotionValue<number>(0);
    const pathRef = useRef<SVGRectElement>(null);

    useAnimationFrame((time) => {
        const length = pathRef.current?.getTotalLength();
        if (length) {
            const pxPerMillisecond = length / duration;
            progress.set((time * pxPerMillisecond) % length);
        }
    });

    const x = useTransform(
        progress,
        (val) => pathRef.current?.getPointAtLength(val).x
    );
    const y = useTransform(
        progress,
        (val) => pathRef.current?.getPointAtLength(val).y
    );

    const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

    return (
        <Fragment>
            <svg
                width="100%"
                height="100%"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute h-full w-full"
                {...otherProps}
            >
                <title>button</title>
                <rect
                    rx={rx}
                    ry={ry}
                    fill="none"
                    width="100%"
                    height="100%"
                    ref={pathRef}
                />
            </svg>
            <LazyMotion features={domAnimation}>
                <m.div
                    style={{
                        top: 0,
                        left: 0,
                        transform,
                        position: "absolute",
                        display: "inline-block"
                    }}
                >
                    {children}
                </m.div>
            </LazyMotion>
        </Fragment>
    );
}

export const MovingBorder = memo(MovingBorderComponent);
