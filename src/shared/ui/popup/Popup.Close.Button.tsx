import { IconClose } from "@/shared/config/icons";
import type { PopupCloseButtonProps } from "./types";

/**
 * Popup close button component.
 *
 * @component
 *
 * @description
 * Renders an icon button positioned at the top-right of a popup to dismiss it.
 * The icon turns red on hover.
 *
 * @param {PopupCloseButtonProps} props - Component props
 * @param {() => void} props.onClick - Handler called when the close button is clicked
 *
 * @returns The close button element
 */
export function PopupCloseButton({ onClick }: PopupCloseButtonProps) {
    return (
        <button
            type="button"
            title="Close"
            onClick={onClick}
            className="absolute top-5 right-4 text-typography-contact hover:text-danger transition-colors z-50"
        >
            <IconClose size={24} />
        </button>
    );
}
