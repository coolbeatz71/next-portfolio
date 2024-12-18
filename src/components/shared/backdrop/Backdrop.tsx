export interface BackdropProps {
    onClick: () => void;
}
export default function Backdrop({ onClick }: BackdropProps): JSX.Element {
    return (
        <div
            onClick={onClick}
            onKeyDown={onClick}
            pointer-events-none
            className="fixed top-0 bottom-0 inset-0 z-40 bg-black bg-opacity-70 backdrop-blur"
        />
    );
}
