import { useEffect, useRef, useState } from "react";
import type { RefObject } from "react";

export interface UseScrollRevealType {
    ref: RefObject<HTMLDivElement | null>;
    isVisible: boolean;
}
export function useScrollReveal(): UseScrollRevealType {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting !== isVisible) {
                    setIsVisible(entry.isIntersecting);
                }
            },
            {
                threshold: 0.1
            }
        );

        if (ref.current) observer.observe(ref.current);

        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, [isVisible]);

    return { ref, isVisible };
}
