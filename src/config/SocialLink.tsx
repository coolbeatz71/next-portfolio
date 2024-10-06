import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";

export const socialLink = [
    {
        icon: <FaGithub />,
        href: "https://github.com/coolbeatz71/",
        platform: "github",
        hoverColor: "hover:text-github hover:dark:text-github_dark"
    },
    {
        icon: <FaLinkedin />,
        href: "https://www.linkedin.com/in/mutombo-jv/",
        platform: "linkedin",
        hoverColor: "hover:text-linkedin"
    },
    {
        icon: <FaMedium />,
        href: "https://medium.com/@sigmacool",
        platform: "medium",
        hoverColor: "hover:text-medium hover:dark:text-medium_dark"
    }
];
