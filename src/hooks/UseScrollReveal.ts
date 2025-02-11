import { useEffect, useRef, useState } from "react";
import type { RefObject } from "react";

export interface UseScrollRevealType {
    ref: RefObject<HTMLDivElement>;
    isVisible: boolean;
}
export function useScrollReveal(): UseScrollRevealType {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            {
                threshold: 0.1
            }
        );

        if (ref.current) observer.observe(ref.current);

        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, []);

    return { ref, isVisible };
}
