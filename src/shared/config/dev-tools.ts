/**
 * @interface IDevToolLogo
 * @property {string} className - Tailwind classes for the logo card element
 * @property {string} containerClassName - Tailwind grid placement classes for the container
 * @property {string} iconName - Tailwind background-image class for the technology icon
 */
export interface IDevToolLogo {
    className: string;
    containerClassName: string;
    iconName: string;
}

/** Dev tool logos rendered in the hero badge grid. */
export const devToolsLogoList: IDevToolLogo[] = [
    {
        className: "w-16 h-16 lg:w-20 lg:h-20",
        containerClassName: "col-start-2 row-start-1",
        iconName: "bg-icon_node w-8 h-8 lg:w-10 lg:h-10"
    },
    {
        containerClassName: "col-start-1 row-start-2",
        className: "w-16 h-16 lg:w-20 lg:h-20",
        iconName: "bg-icon_react w-8 h-8 lg:w-10 lg:h-10"
    },
    {
        containerClassName: "col-start-2 row-start-3",
        className: "w-16 h-16 lg:w-20 lg:h-20",
        iconName: "bg-icon_angular w-8 h-8 lg:w-10 lg:h-10"
    },
    {
        containerClassName: "col-start-1 row-start-4",
        className: "w-16 h-16 lg:w-20 lg:h-20",
        iconName: "bg-icon_flutter w-8 h-8 lg:w-10 lg:h-10"
    },
    {
        containerClassName: "col-start-2 row-start-5",
        className: "w-16 h-16 lg:w-20 lg:h-20",
        iconName: "bg-icon_laravel w-8 h-8 lg:w-10 lg:h-10"
    }
];
