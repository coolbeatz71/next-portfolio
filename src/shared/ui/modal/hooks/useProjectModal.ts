import { useCallback, useState } from "react";
import { useKey } from "react-use";

/**
 * Project modal hook.
 *
 * @description
 * Owns the index of the project currently displayed in the detail modal and the
 * handlers to open, dismiss and cycle through the list. Navigation wraps around
 * both ends and is also bound to the Escape and arrow keys.
 *
 * @param total - Number of projects the modal can navigate through
 *
 * @returns The active project index, an open flag and the open, close and navigation handlers
 */
export function useProjectModal(total: number) {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const open = useCallback((index: number) => setActiveIndex(index), []);
    const close = useCallback(() => setActiveIndex(null), []);

    const goToPrevious = useCallback(() => {
        setActiveIndex((index) => (index === null ? index : (index - 1 + total) % total));
    }, [total]);

    const goToNext = useCallback(() => {
        setActiveIndex((index) => (index === null ? index : (index + 1) % total));
    }, [total]);

    useKey("Escape", close);
    useKey("ArrowLeft", goToPrevious);
    useKey("ArrowRight", goToNext);

    return { activeIndex, isOpen: activeIndex !== null, open, close, goToPrevious, goToNext };
}
