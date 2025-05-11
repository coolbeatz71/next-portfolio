import { Logo } from "@/shared/ui/logo/Logo";
import { SideMenuDrawer } from "@/shared/ui/popup/drawer/SideMenu.Drawer";
import { NavigationMenu } from "@/widgets/navigation/Navigation.Menu";
import { SideMenuProfile } from "./SideMenu.Profile";

export interface SideMenuProps {
    isOpen: boolean;
    toggleDrawer: () => void;
}

export function SideMenu({ isOpen, toggleDrawer }: SideMenuProps) {
    return (
        <SideMenuDrawer
            isOpen={isOpen}
            position="left"
            onToggle={toggleDrawer}
            className="z-50 w-[80%] sm:w-[60%] md:w-[40%]"
            header={
                <div className="flex items-center justify-between mb-4 w-[90%]">
                    <Logo />
                </div>
            }
        >
            <div className="flex flex-col items-start gap-1">
                <SideMenuProfile />
                <div className="flex flex-col py-4 w-full">
                    <NavigationMenu
                        onClick={toggleDrawer}
                        className="w-full p-3"
                    />
                </div>
            </div>
        </SideMenuDrawer>
    );
}
