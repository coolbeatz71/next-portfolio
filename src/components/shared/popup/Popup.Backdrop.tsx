import { memo } from "react";

export interface PopupBackdropProps {
    onClick: () => void;
}

function PopupBackdropComponent({ onClick }: PopupBackdropProps) {
    return (
        <div
            onClick={onClick}
            onKeyDown={onClick}
            pointer-events-none="true"
            className="fixed z-40 w-screen h-screen top-0 left-0 right-0 overflow-hidden bg-black bg-opacity-70 backdrop-blur"
        />
    );
}

export const PopupBackdrop = memo(PopupBackdropComponent);
