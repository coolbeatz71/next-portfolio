/**
 * Returns a throttled version of a function that executes
 * at most once per `limit` milliseconds.
 *
 * @param func - The function to throttle
 * @param limit - Minimum time in milliseconds between invocations
 * @returns A throttled wrapper function
 *
 * @example
 * window.addEventListener("scroll", throttle(handleScroll, 200))
 */
export function throttle(func: (...args: unknown[]) => void, limit: number) {
    let lastFunc: NodeJS.Timeout;
    let lastRan: number;

    return (...args: unknown[]) => {
        if (!lastRan) {
            func(...args);
            lastRan = Date.now();
        } else {
            clearTimeout(lastFunc);
            lastFunc = setTimeout(
                () => {
                    if (Date.now() - lastRan >= limit) {
                        func(...args);
                        lastRan = Date.now();
                    }
                },
                limit - (Date.now() - lastRan)
            );
        }
    };
}
