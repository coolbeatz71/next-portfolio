import {
    motion,
    useAnimationFrame,
    useMotionTemplate,
    useMotionValue,
    useTransform
} from "framer-motion";
import { Fragment, type SVGProps, memo, useRef } from "react";

interface MovingBorderProps extends SVGProps<SVGSVGElement> {
    children: React.ReactNode;
    duration?: number;
    rx?: string;
    ry?: string;
}

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
            <motion.div
                style={{
                    top: 0,
                    left: 0,
                    transform,
                    position: "absolute",
                    display: "inline-block"
                }}
            >
                {children}
            </motion.div>
        </Fragment>
    );
}

export const MovingBorder = memo(MovingBorderComponent);
