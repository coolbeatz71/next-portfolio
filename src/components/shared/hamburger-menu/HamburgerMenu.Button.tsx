import { MdOutlineMenu } from "react-icons/md";

export default function HamburgerMenuButton(): JSX.Element {
    return (
        <button
            type="button"
            className="relative text-3xl inline-flex items-center justify-center rounded-lg p-2 dark:text-slate-300 text-slate-700 bg-slate-100 dark:bg-slate-900 hover:bg-slate-300 dark:hover:bg-slate-700 focus:outline-none"
            aria-controls="mobile-menu"
            aria-expanded="false"
            title="Open menu"
        >
            <MdOutlineMenu />
        </button>
    );
}
