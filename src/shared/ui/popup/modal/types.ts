import type { ReactNode } from "react";

/**
 * @interface ModalProps
 * @property {boolean} isOpen - Whether the modal is currently visible
 * @property {ReactNode} header - Content rendered in the sticky modal header
 * @property {string} [className] - Additional class names for the modal panel
 * @property {ReactNode} children - Content rendered inside the modal body
 * @property {() => void} onToggle - Handler to open or close the modal
 */
export interface ModalProps {
    isOpen: boolean;
    header: ReactNode;
    className?: string;
    children: ReactNode;
    onToggle: () => void;
}
