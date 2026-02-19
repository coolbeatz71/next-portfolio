import { IconClose } from "@/config/Icon";

export interface PopupCloseButtonProps {
    onClick: () => void;
}

export function PopupCloseButton({ onClick }: PopupCloseButtonProps) {
    return (
        <button
            type="button"
            title="Close"
            onClick={onClick}
            className="absolute top-5 right-4 text-gray-500 hover:text-red-500 transition-colors z-50"
        >
            <IconClose size={24} />
        </button>
    );
}
