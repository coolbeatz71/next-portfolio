import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

export const socialLinksList = [
    {
        icon: <FaGithub />,
        platform: "github",
        href: "https://github.com/coolbeatz71/",
        hoverColor: "hover:text-github hover:dark:text-github_dark"
    },
    {
        icon: <FaLinkedin />,
        platform: "linkedin",
        href: "https://www.linkedin.com/in/mutombo-jv/",
        hoverColor: "hover:text-linkedin"
    },
    {
        icon: <FaMedium />,
        platform: "medium",
        href: "https://medium.com/@sigmacool",
        hoverColor: "hover:text-medium hover:dark:text-medium_dark"
    },
    {
        icon: <FaYoutube />,
        platform: "youtube",
        href: "https://www.youtube.com/@sigmacoolbeatz?sub_confirmation=1",
        hoverColor: "hover:text-youtube"
    },
    {
        icon: <RiInstagramFill />,
        platform: "instagram",
        href: "https://www.instagram.com/glodymutomboriy/",
        hoverColor: "hover:text-instagram"
    }
];
