import { IconBriefcase, IconGlobe } from "@/shared/config/icons";

/**
 * @interface ICreditBadge
 * @property {React.ReactNode} icon - Icon element displayed inside the badge
 * @property {string} className - Additional class names for the badge container
 * @property {number} count - Numeric stat to highlight (e.g. years, projects)
 * @property {string} text - i18n key for the badge label text
 */
export interface ICreditBadge {
    icon: React.ReactNode;
    className: string;
    count: number;
    text: string;
}

export const creditBadgeList: ICreditBadge[] = [
    {
        icon: <IconBriefcase />,
        className: "",
        count: 8,
        text: "years_of_experience"
    },
    {
        icon: <IconGlobe />,
        className: "left-10",
        count: 25,
        text: "live_projects"
    }
];
