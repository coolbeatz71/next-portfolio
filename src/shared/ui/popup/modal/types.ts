import type { ReactNode } from "react";

/**
 * @interface ModalProps
 * @property {boolean} isOpen - Whether the modal is currently visible
 * @property {ReactNode} header - Content rendered in the pinned modal header
 * @property {ReactNode} [footer] - Content rendered in the pinned modal footer
 * @property {string} [className] - Additional class names for the modal panel
 * @property {ReactNode} children - Content rendered inside the modal body
 * @property {() => void} onToggle - Handler to open or close the modal
 */
export interface ModalProps {
    isOpen: boolean;
    header: ReactNode;
    footer?: ReactNode;
    className?: string;
    children: ReactNode;
    onToggle: () => void;
}
