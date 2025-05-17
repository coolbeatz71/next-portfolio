import type { ReactNode } from "react";

/**
 * @interface DrawerBackdropProps
 * @property {boolean} isOpen - Whether the drawer is currently open
 */
export interface DrawerBackdropProps {
    isOpen: boolean;
}

/**
 * @interface DrawerProps
 * @property {string} [width] - CSS width of the drawer panel; defaults to "50vw"
 * @property {ReactNode} header - Content rendered in the sticky header
 * @property {ReactNode} [footer] - Optional content rendered in the footer
 * @property {boolean} isOpen - Whether the drawer is currently open
 * @property {() => void} onToggle - Handler to open or close the drawer
 * @property {ReactNode} children - Main content inside the drawer
 * @property {string} [className] - Additional class names for the outer container
 * @property {"right" | "left"} [position] - Side the drawer slides in from; defaults to "right"
 */
export interface DrawerProps {
    width?: string;
    header: ReactNode;
    footer?: ReactNode;
    isOpen: boolean;
    onToggle: () => void;
    children: ReactNode;
    className?: string;
    position?: "right" | "left";
}

/**
 * @interface DrawerContainerProps
 * @property {string} width - CSS width of the panel (e.g. "50vw")
 * @property {boolean} isOpen - Whether the drawer is currently open
 * @property {ReactNode} children - Content rendered inside the drawer panel
 * @property {"right" | "left"} position - Side the panel slides in from
 */
export interface DrawerContainerProps {
    width: string;
    isOpen: boolean;
    children: ReactNode;
    position: "right" | "left";
}

/**
 * @interface SideMenuDrawerProps
 * @property {ReactNode} header - Content rendered in the sticky header
 * @property {ReactNode} [footer] - Optional content rendered in the footer
 * @property {boolean} isOpen - Whether the drawer is currently open
 * @property {() => void} onToggle - Handler to open or close the drawer
 * @property {ReactNode} children - Main content inside the drawer
 * @property {string} [className] - Additional class names for the aside element
 * @property {"right" | "left"} [position] - Side the drawer slides in from; defaults to "right"
 */
export interface SideMenuDrawerProps {
    header: ReactNode;
    footer?: ReactNode;
    isOpen: boolean;
    onToggle: () => void;
    children: ReactNode;
    className?: string;
    position?: "right" | "left";
}
