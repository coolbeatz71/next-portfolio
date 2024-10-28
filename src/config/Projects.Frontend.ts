import type { ProjectByStack } from "@/config/Projects";

export const projectsFrontend: ProjectByStack[] = [
    {
        name: "SavePlus",
        description:
            "A for-profit crowdfunding web application that allows people to raise money for events ranging from life events such as celebrations and graduations to challenging circumstances like accidents and illnesses",
        stack: [
            "ReactJs",
            "NextJs",
            "Typescript",
            "AntDesign",
            "Redux",
            "ExpressJs"
        ],
        images: ["/projects/saveplus/saveplus_preview.jpg"],
        link: "https://saveplus.io/",
        hasLink: true
    },
    {
        name: "Reconstruction",
        description:
            "A Black-culture educational web application that highlights the rich legacy of African descendants through engaging content. The app reshapes traditional narratives, celebrating the significant global contributions of the Black community.",
        stack: [
            "ReactJs",
            "Typescript",
            "CoreUI",
            "AWS lambda",
            "GraphQL/Apollo",
            "Hasura"
        ],
        images: ["/projects/reconstruction/reconstruction_preview.jpg"],
        link: "https://reconstruction.us/",
        hasLink: true
    },
    {
        name: "Alfatier",
        description:
            "The platform offers cloud tasking, optimization, and development services for businesses to manage their public cloud infrastructure. It focuses on enhancing security, reducing costs, and enabling quick digital transformation using platforms like Microsoft Azure and Google Cloud.",
        stack: [
            "ReactJs",
            "NextJs",
            "Typescript",
            "Material-UI",
            "Firebase",
            "Hubspot"
        ],
        images: ["/projects/alfatier/alfatier_preview.jpg"],
        link: "https://alfatier.io/",
        hasLink: true
    },
    {
        name: "StorM",
        description:
            "A Digital Asset Management (DAM) system designed to replace Bestseller DAM. It helps to manage images, videos, and 3D assets for all the brands, collection, etc. focusing on speed, stability, and user satisfaction",
        stack: [
            "ReactJs",
            "NextJs",
            "Typescript",
            "Chakra-UI",
            "InstantSearchJs",
            "Storybook"
        ],
        images: ["/projects/storm/storm_preview.jpg"],
        link: "https://storm.bestseller.com/",
        hasLink: true
    },
    {
        name: "Meet v1",
        description:
            "A sleek portfolio web app designed to showcase creative work effortlessly. With a user-friendly interface and customizable templates, it highlights projects, skills, and experiences in a visually stunning format.",
        stack: [
            "Flutter Web",
            "Riverpod",
            "Responsive Framework",
            "Flutter Hooks",
            "Seo"
        ],
        images: ["/projects/meet/meet_preview.jpg"],
        link: "https://coolbeatz71.github.io/meet/#/",
        hasLink: true
    }
];
