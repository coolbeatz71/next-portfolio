import type { RefObject } from "react";
import { useEffect, useRef, useState } from "react";

export interface UseScrollRevealType {
    ref: RefObject<HTMLDivElement | null>;
    isVisible: boolean;
}

/**
 * Custom hook to detect when an element enters the viewport.
 *
 * @description
 * Uses IntersectionObserver to track visibility of a div element.
 * The element is considered visible when at least 10% of it is in view.
 *
 * @returns {UseScrollRevealType} Scroll reveal state and ref
 * @returns {RefObject<HTMLDivElement | null>} ref - Attach to the target element
 * @returns {boolean} isVisible - Whether the element is currently in the viewport
 */
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
            observer.disconnect();
        };
    }, []);

    return { ref, isVisible };
}
