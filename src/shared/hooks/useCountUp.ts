import { useEffect, useRef, useState } from "react";

/**
 * Custom hook that animates a number from 0 to a target value.
 *
 * @description
 * Uses requestAnimationFrame with an ease-out cubic easing function.
 * Animation starts after an optional delay.
 *
 * @param {number} end - The target number to count up to
 * @param {number} [duration=2000] - Animation duration in milliseconds
 * @param {number} [delay=0] - Delay before starting in milliseconds
 * @returns {number} The current animated value
 */
export function useCountUp(end: number, duration = 2000, delay = 0): number {
    const [value, setValue] = useState(0);
    const rafRef = useRef<number>(null);

    useEffect(() => {
        const timeout = setTimeout(() => {
            const startTime = performance.now();

            const tick = (now: number) => {
                const elapsed = now - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const eased = 1 - (1 - progress) ** 3;

                setValue(Math.round(eased * end));

                if (progress < 1) {
                    rafRef.current = requestAnimationFrame(tick);
                }
            };

            rafRef.current = requestAnimationFrame(tick);
        }, delay);

        return () => {
            clearTimeout(timeout);
            if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
        };
    }, [end, duration, delay]);

    return value;
}
