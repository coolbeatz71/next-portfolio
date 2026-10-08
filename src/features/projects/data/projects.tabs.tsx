import { projectsFrontend } from "@/features/projects/data/projects.frontend";
import { projectsFullStack } from "@/features/projects/data/projects.fullstack";
import { projectsMobile } from "@/features/projects/data/projects.mobile";
import { projectsOpenSource } from "@/features/projects/data/projects.opensource";
import { ProjectSection } from "@/features/projects/ui/Projects.Section";
import type { ITabs } from "./types";

export const projectsTabs: ITabs[] = [
    {
        title: "projects.fullstack",
        context: "full-stack",
        count: projectsFullStack.length,
        content: <ProjectSection projects={projectsFullStack} />
    },
    {
        title: "projects.frontend",
        context: "front-end",
        count: projectsFrontend.length,
        content: <ProjectSection projects={projectsFrontend} />
    },
    {
        title: "projects.mobile_apps",
        context: "mobile-apps",
        count: projectsMobile.length,
        content: <ProjectSection projects={projectsMobile} />
    },
    {
        title: "projects.open_source",
        context: "open-source",
        count: projectsOpenSource.length,
        content: <ProjectSection projects={projectsOpenSource} />
    }
];
