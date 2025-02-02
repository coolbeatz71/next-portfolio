import Drawer from "@/components/shared/popup/drawer/Drawer";
import NavigationMenu from "../navigation/Navigation.Menu";
import SideMenuHeader from "./SideMenu.Header";
import SideMenuFooter from "./Sidemenu.Footer";

export interface SideMenuProps {
    isOpen: boolean;
    toggleDrawer: () => void;
}

export default function SideMenu({
    isOpen,
    toggleDrawer
}: SideMenuProps): JSX.Element {
    return (
        <Drawer
            isOpen={isOpen}
            position="left"
            className="w-[90%] sm:w-[60%] md:w-[40%]"
            onToggle={toggleDrawer}
            header={<SideMenuHeader />}
            footer={<SideMenuFooter />}
        >
            <div className="flex flex-col items-start gap-1">
                <NavigationMenu onClick={toggleDrawer} className="w-full p-3" />
            </div>
        </Drawer>
    );
}
