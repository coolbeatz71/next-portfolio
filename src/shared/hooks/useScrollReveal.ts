import { useEffect, useRef, useState } from "react";
import type { IUseScrollRevealType } from "./types";

/**
 * TEMPORARY: when true, every element reports as visible immediately and the
 * IntersectionObserver never runs, so a full page screenshot captures everything.
 * Set back to false to restore the scroll reveal animations.
 */
const DISABLE_SCROLL_REVEAL = false;

/**
 * Custom hook to detect when an element enters the viewport.
 *
 * @description
 * Uses IntersectionObserver to track visibility of a div element.
 * The element is considered visible when at least 10% of it is in view.
 *
 * @returns {IUseScrollRevealType} Scroll reveal state and ref
 * @returns {RefObject<HTMLDivElement | null>} ref - Attach to the target element
 * @returns {boolean} isVisible - Whether the element is currently in the viewport
 */
export function useScrollReveal(): IUseScrollRevealType {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(DISABLE_SCROLL_REVEAL);

    useEffect(() => {
        if (DISABLE_SCROLL_REVEAL) return;

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
