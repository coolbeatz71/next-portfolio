import type { ReactNode } from "react";

import { ProjectSection } from "@/components/layout/projects/Projects.Section";

import { projectsFrontend } from "@/config/Projects.Frontend";
import { projectsFullStack } from "@/config/Projects.FullStack";
import { projectsMobile } from "@/config/Projects.Mobile";
import { projectsOpenSource } from "@/config/Projects.OpenSource";

export interface Tabs {
    title: string;
    context: string;
    content: ReactNode;
}

export interface Image {
    alt: string;
    src: string;
    description?: string;
}

export interface ProjectByStack {
    name: string;
    role: string;
    description: string;
    stack: string[];
    images: Image[];
    blurURL: string;
    hasPreviewImage: boolean;
    hasLiveLink: boolean;
    liveLink?: string;
    hasSourceCode: boolean;
    sourceCodeLink?: string;
}

export const projectsTabs: Tabs[] = [
    {
        title: "projects.fullstack",
        context: "full-stack",
        content: <ProjectSection projects={projectsFullStack} />
    },
    {
        title: "projects.frontend",
        context: "front-end",
        content: <ProjectSection projects={projectsFrontend} />
    },
    {
        title: "projects.mobile_apps",
        context: "mobile-apps",
        content: <ProjectSection projects={projectsMobile} />
    },
    {
        title: "projects.open_source",
        context: "open-source",
        content: <ProjectSection projects={projectsOpenSource} />
    }
];
