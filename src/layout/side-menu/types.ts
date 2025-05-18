/**
 * @interface SideMenuProps
 * @property {boolean} isOpen - Whether the side menu drawer is open
 * @property {() => void} toggleDrawer - Callback to toggle the drawer open/closed
 */
export interface SideMenuProps {
    isOpen: boolean;
    toggleDrawer: () => void;
}
