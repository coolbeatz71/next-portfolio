import SideMenu from "@/components/layout/side-menu/SideMenu";
import { Fragment, useState } from "react";
import { MdOutlineMenu } from "react-icons/md";

export default function HamburgerMenuButton(): JSX.Element {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Fragment>
            <button
                type="button"
                onClick={toggleDrawer}
                aria-controls="mobile-menu"
                className="relative text-2xl p-2 size-12 sm:size-12 md:size-12 inline-flex items-center justify-center rounded-lg dark:text-slate-300 text-slate-700 bg-slate-100 dark:bg-slate-900 hover:bg-slate-300 dark:hover:bg-slate-700 focus:outline-none"
            >
                <MdOutlineMenu />
            </button>

            <SideMenu isOpen={isOpen} toggleDrawer={toggleDrawer} />
        </Fragment>
    );
}
