export interface PopupBackdropProps {
    onClick: () => void;
}
export function PopupBackdrop({ onClick }: PopupBackdropProps): JSX.Element {
    return (
        <div
            onClick={onClick}
            onKeyDown={onClick}
            pointer-events-none
            className="fixed z-40 w-screen h-screen top-0 left-0 right-0 overflow-hidden bg-black bg-opacity-70 backdrop-blur"
        />
    );
}
