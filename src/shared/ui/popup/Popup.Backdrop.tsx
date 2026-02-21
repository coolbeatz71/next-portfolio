import { memo } from "react";
import type { PopupBackdropProps } from "./types";

/**
 * Popup backdrop component.
 *
 * @component
 *
 * @description
 * Renders a fixed full-screen dark overlay behind modals and drawers.
 * Clicking or pressing a key on the backdrop triggers the close handler.
 *
 * @param {PopupBackdropProps} props - Component props
 * @param {() => void} props.onClick - Handler called when the backdrop is clicked or a key is pressed
 *
 * @returns The popup backdrop overlay element
 */
function PopupBackdropComponent({ onClick }: PopupBackdropProps) {
    return (
        <div
            onClick={onClick}
            onKeyDown={onClick}
            pointer-events-none="true"
            className="fixed z-40 w-screen h-screen top-0 left-0 right-0 overflow-hidden bg-black/70 backdrop-blur-xl"
        />
    );
}

export const PopupBackdrop = memo(PopupBackdropComponent);
