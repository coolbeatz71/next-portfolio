/**
 * @interface CompaniesGridProps
 * @property {{ title: string; icon: string }[]} items - List of company entries with name and logo URL
 * @property {string} [className] - Additional class names for the grid container
 */
export interface CompaniesGridProps {
    items: {
        title: string;
        icon: string;
    }[];
    className?: string;
}
