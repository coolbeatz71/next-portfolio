import { IoMdCloseCircle } from "react-icons/io";

export interface PopupCloseButtonProps {
    onClick: () => void;
}

export default function PopupCloseButton({
    onClick
}: PopupCloseButtonProps): JSX.Element {
    return (
        <button
            type="button"
            title="Close"
            onClick={onClick}
            className="absolute top-5 right-4 text-gray-500 hover:text-red-500 transition-colors z-50"
        >
            <IoMdCloseCircle size={24} />
        </button>
    );
}
