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
