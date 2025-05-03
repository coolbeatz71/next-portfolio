import { memo } from "react";

export interface PopupBackdropProps {
    onClick: () => void;
}

function PopupBackdropComponent({ onClick }: PopupBackdropProps): JSX.Element {
    return (
        <div
            onClick={onClick}
            onKeyDown={onClick}
            className="pointer-events-none fixed z-40 w-screen h-screen top-0 left-0 right-0 overflow-hidden bg-black bg-opacity-70 backdrop-blur"
        />
    );
}

export const PopupBackdrop = memo(PopupBackdropComponent);
