import { useMemo } from "react";
import { NavigationMenu } from "@/layout/navigation/Navigation.Menu";
import { Logo } from "@/shared/ui/logo/Logo";
import { SideMenuDrawer } from "@/shared/ui/popup/drawer/SideMenu.Drawer";
import { SideMenuProfile } from "./SideMenu.Profile";
import type { SideMenuProps } from "./types";

/**
 * Side menu widget.
 *
 * @component
 *
 * @description
 * Renders a slide-in drawer from the left containing the site logo, user profile
 * block, and full navigation menu for mobile and tablet viewports.
 *
 * @param {SideMenuProps} props - Component props
 * @param {boolean} props.isOpen - Whether the side menu drawer is open
 * @param {() => void} props.toggleDrawer - Callback to toggle the drawer open/closed
 *
 * @returns The side menu drawer element
 */
export function SideMenu({ isOpen, toggleDrawer }: SideMenuProps) {
    const sideMenuHeader = useMemo(
        () => (
            <div className="flex items-center justify-between mb-4 w-[90%]">
                <Logo />
            </div>
        ),
        []
    );

    return (
        <SideMenuDrawer
            isOpen={isOpen}
            position="left"
            onToggle={toggleDrawer}
            className="z-50 w-[80%] sm:w-[60%] md:w-[40%]"
            header={sideMenuHeader}
        >
            <div className="flex flex-col items-start gap-1">
                <SideMenuProfile />
                <div className="flex flex-col py-4 w-full">
                    <NavigationMenu onClick={toggleDrawer} className="w-full p-3" />
                </div>
            </div>
        </SideMenuDrawer>
    );
}
