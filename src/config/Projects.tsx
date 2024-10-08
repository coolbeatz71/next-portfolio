import type { ReactNode } from "react";

import ProjectsFullStack from "@/components/layout/projects/Projects.FullStack";
import ProjectsMobile from "@/components/layout/projects/Projects.Mobile";
import ProjectsOpenSource from "@/components/layout/projects/Projects.OpenSource";
import ProjectsFrontend from "@/components/layout/projects/Projects.Frontend";

export interface Tabs {
    title: string;
    context: string;
    content: ReactNode;
}

export interface ProjectByStack {
    name: string;
    description: string;
    stack: string[];
    images: string[];
    hasLink: boolean;
    link: string;
}

export const projectsTabs: Tabs[] = [
    {
        title: "Full-Stack",
        context: "full-stack",
        content: <ProjectsFullStack />
    },
    {
        title: "Front-End",
        context: "front-end",
        content: <ProjectsFrontend />
    },
    {
        title: "Mobile Apps",
        context: "mobile-apps",
        content: <ProjectsMobile />
    },
    {
        title: "Open-Source",
        context: "open-source",
        content: <ProjectsOpenSource />
    }
];
