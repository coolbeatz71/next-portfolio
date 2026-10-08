import { IProjectByStack } from "./types";

export const projectsOpenSource: IProjectByStack[] = [
    {
        name: "Coolest Dark",
        role: "software_engineer",
        description: "projects_description.coolestdark",
        caseStudy: "projects_case_study.coolestdark",
        stack: ["JSON", "Color Scheme", "Vsce", "Npm", "TextMate Grammar", "VS Code Marketplace"],
        images: [
            {
                alt: "coolest-dark-preview",
                src: "/projects/coolestdark/coolestdark_preview.png"
            }
        ],
        blurURL:
            "data:image/webp;base64,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",
        liveLink:
            "https://marketplace.visualstudio.com/items?itemName=mutomboJeanVincent.coolest-dark",
        sourceCodeLink: "https://github.com/coolbeatz71/coolest-dark",
        hasLiveLink: true,
        hasSourceCode: true,
        hasPreviewImage: false
    },
    {
        name: "React Excel Grid Export",
        role: "software_engineer",
        description: "projects_description.rege",
        caseStudy: "projects_case_study.rege",
        stack: ["ReactJs", "JavaScript", "NodeJs", "Npm", "Xlsx", "Csv"],
        images: [
            {
                alt: "rege-preview",
                src: "/no_preview.webp"
            }
        ],
        blurURL:
            "data:image/webp;base64,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",
        sourceCodeLink: "https://github.com/coolbeatz71/react-excel-grid-export",
        liveLink: "https://www.npmjs.com/package/react-excel-grid-export",
        hasLiveLink: true,
        hasSourceCode: true,
        hasPreviewImage: false
    }
];
