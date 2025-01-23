import { RiMenu4Fill } from "react-icons/ri";

export default function HamburgerMenuButton(): JSX.Element {
    return (
        <button
            type="button"
            className="relative size-12 text-3xl inline-flex items-center justify-center rounded-lg p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none"
            aria-controls="mobile-menu"
            aria-expanded="false"
            title="Open menu"
        >
            <RiMenu4Fill />
        </button>
    );
}
