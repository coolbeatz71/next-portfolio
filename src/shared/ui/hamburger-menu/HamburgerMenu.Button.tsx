import { Fragment, useState } from "react";
import { SideMenu } from "@/layout/side-menu/SideMenu";
import { IconMenu } from "@/shared/config/icons";

/**
 * Hamburger menu button component.
 *
 * @component
 *
 * @description
 * Renders a toggle button that opens and closes the mobile side menu drawer.
 *
 * @returns The hamburger menu button and side menu drawer
 */
export function HamburgerMenuButton() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Fragment>
            <button
                type="button"
                title="open menu"
                onClick={toggleDrawer}
                aria-controls="mobile-menu"
                className={`relative text-2xl p-2 size-10 sm:size-12 md:size-12 
                    inline-flex items-center justify-center rounded-lg
                    dark:text-slate-300 text-slate-700 bg-slate-100 dark:bg-slate-900
                    hover:bg-slate-300 dark:hover:bg-slate-700 focus:outline-none
                `}
            >
                <IconMenu />
            </button>

            <SideMenu isOpen={isOpen} toggleDrawer={toggleDrawer} />
        </Fragment>
    );
}
