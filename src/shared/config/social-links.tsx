import {
    IconGithub,
    IconInstagram,
    IconLinkedIn,
    IconMedium,
    IconYoutube
} from "@/shared/config/icons";

/**
 * @interface ISocialLink
 * @property {React.ReactNode} icon - Icon element representing the platform
 * @property {string} platform - Platform identifier (e.g. `"github"`, `"linkedin"`)
 * @property {string} href - URL of the profile page
 * @property {string} hoverColor - Tailwind hover color class for the icon button
 */
export interface ISocialLink {
    icon: React.ReactNode;
    platform: string;
    href: string;
    hoverColor: string;
}

export const socialLinksList: ISocialLink[] = [
    {
        icon: <IconGithub />,
        platform: "github",
        href: "https://github.com/coolbeatz71/",
        hoverColor: "hover:text-github hover:dark:text-github_dark"
    },
    {
        icon: <IconLinkedIn />,
        platform: "linkedin",
        href: "https://www.linkedin.com/in/mutombo-jv/",
        hoverColor: "hover:text-linkedin"
    },
    {
        icon: <IconMedium />,
        platform: "medium",
        href: "https://medium.com/@sigmacool",
        hoverColor: "hover:text-medium hover:dark:text-medium_dark"
    },
    {
        icon: <IconYoutube />,
        platform: "youtube",
        href: "https://www.youtube.com/@sigmacoolbeatz?sub_confirmation=1",
        hoverColor: "hover:text-youtube"
    },
    {
        icon: <IconInstagram />,
        platform: "instagram",
        href: "https://www.instagram.com/glodymutomboriy/",
        hoverColor: "hover:text-instagram"
    }
];
