import dynamic from "next/dynamic";
import { Fragment, memo, useCallback, useState } from "react";
import { IconMenu } from "@/shared/config/icons";

const SideMenu = dynamic(async () => {
    const mod = await import(
        /* webpackChunkName: "SideMenu" */
        "@/layout/side-menu/SideMenu"
    );
    return mod.SideMenu;
});

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
function HamburgerMenuButtonComponent() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = useCallback(() => {
        setIsOpen((prev) => !prev);
    }, []);

    return (
        <Fragment>
            <button
                type="button"
                title="open menu"
                onClick={toggleDrawer}
                aria-controls="mobile-menu"
                aria-expanded={isOpen}
                aria-label={isOpen ? "Close menu" : "Open menu"}
                className={`relative text-2xl p-2 size-10 sm:size-12
                    inline-flex items-center justify-center rounded-lg
                    text-typography-nav bg-surface-raised
                    hover:bg-surface-hover focus:outline-none
                `}
            >
                <IconMenu aria-hidden="true" />
            </button>

            <SideMenu isOpen={isOpen} toggleDrawer={toggleDrawer} />
        </Fragment>
    );
}

export const HamburgerMenuButton = memo(HamburgerMenuButtonComponent);
