import { useState } from "react";

/**
 * Project card modal hook.
 *
 * @description
 * Encapsulates the open/close state and toggle handler for the
 * project detail modal used inside a project card.
 *
 * @returns isOpen flag and toggleModal handler
 */
export function useProjectCardModal() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen((prev) => !prev);
    };

    return { isOpen, toggleModal };
}
