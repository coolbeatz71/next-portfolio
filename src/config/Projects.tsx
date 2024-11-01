import type { ReactNode } from "react";

import ProjectSection from "@/components/layout/projects/Projects.Section";

import { projectsFrontend } from "@/config/Projects.Frontend";
import { projectsFullStack } from "@/config/Projects.FullStack";
import { projectsMobile } from "@/config/Projects.Mobile";
import { projectsOpenSource } from "@/config/Projects.OpenSource";

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
    blurURL: string;
    hasLink: boolean;
    link: string;
}

export const projectsTabs: Tabs[] = [
    {
        title: "Full-Stack",
        context: "full-stack",
        content: <ProjectSection projects={projectsFullStack} />
    },
    {
        title: "Front-End",
        context: "front-end",
        content: <ProjectSection projects={projectsFrontend} />
    },
    {
        title: "Mobile Apps",
        context: "mobile-apps",
        content: <ProjectSection projects={projectsMobile} />
    },
    {
        title: "Open-Source",
        context: "open-source",
        content: <ProjectSection projects={projectsOpenSource} />
    }
];
