/**
 * @interface ICompanyLogo
 * @property {string} title - Display name of the company
 * @property {string} icon - Tailwind background-image class for the company logo (supports light/dark variants)
 */
export interface ICompanyLogo {
    title: string;
    icon: string;
}

export const companyLogoList: ICompanyLogo[] = [
    {
        title: "Bestseller",
        icon: "bg-logo_bestseller_light dark:bg-logo_bestseller_dark"
    },
    {
        title: "The Room",
        icon: "bg-logo_theroom_light dark:bg-logo_theroom_dark"
    },
    {
        title: "Reconstruction",
        icon: "bg-logo_reconstruction_light dark:bg-logo_reconstruction_dark"
    },
    {
        title: "Code of Africa",
        icon: "bg-logo_codeofafrica_light dark:bg-logo_codeofafrica_dark"
    },
    {
        title: "Alfatier",
        icon: "bg-logo_alfatier_light dark:bg-logo_alfatier_dark"
    },
    {
        title: "Exuus",
        icon: "bg-logo_exuus_light dark:bg-logo_exuus_dark"
    },
    {
        title: "EzyAgric",
        icon: "bg-logo_ezyagric"
    },
    {
        title: "Andela",
        icon: "bg-logo_andela_light dark:bg-logo_andela_dark"
    }
];
