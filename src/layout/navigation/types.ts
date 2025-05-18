/**
 * @interface NavigationMenuProps
 * @property {string} [className] - Additional class names for each nav link
 * @property {() => void} [onClick] - Callback fired when a nav link is clicked
 */
export interface NavigationMenuProps {
    className?: string;
    onClick?: () => void;
}
