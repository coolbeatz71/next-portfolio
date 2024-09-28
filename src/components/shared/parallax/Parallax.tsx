import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useWindowSize } from "react-use";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export interface ParallaxProps {
    id?: string;
    speed?: number;
    className: string;
    children: JSX.Element;
}
export default function Parallax({
    children,
    className,
    speed = 1,
    id = "parallax"
}: ParallaxProps): JSX.Element {
    const target = useRef();
    const trigger = useRef();
    const timeline = useRef<gsap.core.Timeline>();

    const { width: windowWidth } = useWindowSize();

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const y = windowWidth * speed * 0.1;

        const setY = gsap.quickSetter(target.current, "y", "px");

        timeline.current = gsap.timeline({
            scrollTrigger: {
                id: id,
                scrub: true,
                end: "bottom top",
                start: "top bottom",
                trigger: trigger.current,
                onUpdate: (e) => {
                    setY(e.progress * y);
                }
            }
        });

        return () => {
            timeline?.current?.kill();
        };
    }, [id, speed, windowWidth]);

    return (
        <div ref={trigger} className={className}>
            <div ref={target}>{children}</div>
        </div>
    );
}
