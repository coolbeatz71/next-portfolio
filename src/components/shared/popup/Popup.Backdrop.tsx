export interface PopupBackdropProps {
    onClick: () => void;
}
export default function PopupBackdrop({
    onClick
}: PopupBackdropProps): JSX.Element {
    return (
        <div
            onClick={onClick}
            onKeyDown={onClick}
            pointer-events-none
            className="fixed top-0 bottom-0 overflow-hidden inset-0 z-40 bg-black bg-opacity-70 backdrop-blur"
        />
    );
}
