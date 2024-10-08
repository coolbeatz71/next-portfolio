import type { ProjectByStack } from "@/config/Projects";

export const projectsOpenSource: ProjectByStack[] = [
    {
        name: "Coolest Dark",
        description:
            "A Visual Studio Code theme inspired by One Dark Pro and Bear themes. It offers a sleek color palette for optimal readability and reduced eye strain, perfect for Dart/Flutter developers. It's fully customizable and open-source",
        stack: ["JSON", "Color Scheme", "Vsce", "Npm"],
        images: ["/placeholder.svg?height=300&width=400"],
        link: "https://marketplace.visualstudio.com/items?itemName=mutomboJeanVincent.coolest-dark",
        hasLink: true
    },
    {
        name: "React Excel Grid Export",
        description:
            "A data exporter library built with and for ReactJs. It allows users to export data from a Grid to Excel formats such as Xlsx or Csv, with support for customizing appearance and data structure.",
        stack: ["ReactJs", "JavaScript", "NodeJs", "Npm"],
        images: ["/placeholder.svg?height=300&width=400"],
        link: "https://www.npmjs.com/package/react-excel-grid-export",
        hasLink: true
    }
];
