import type { ReactNode } from "react";
import { projectsFrontend } from "@/features/projects/data/projects.frontend";
import { projectsFullStack } from "@/features/projects/data/projects.fullstack";
import { projectsMobile } from "@/features/projects/data/projects.mobile";
import { projectsOpenSource } from "@/features/projects/data/projects.opensource";
import { ProjectSection } from "@/features/projects/ui/Projects.Section";

/**
 * @interface Tabs
 * @property {string} title - i18n translation key for the tab label
 * @property {string} context - URL-safe slug used to identify the active tab
 * @property {ReactNode} content - The rendered panel content shown when this tab is selected
 */
export interface Tabs {
    title: string;
    context: string;
    content: ReactNode;
}

/**
 * @interface Image
 * @property {string} alt - Accessible alt text for the image
 * @property {string} src - Path or URL to the image asset
 * @property {string} [description] - Optional caption displayed beneath the image
 */
export interface Image {
    alt: string;
    src: string;
    description?: string;
}

/**
 * @interface ProjectByStack
 * @property {string} name - Project display name
 * @property {string} role - Role played in the project (e.g. "Lead Developer")
 * @property {string} description - Short summary of the project
 * @property {string[]} stack - List of technologies used
 * @property {Image[]} images - Screenshots or preview images for the project
 * @property {string} blurURL - Base64 blur placeholder shown while images load
 * @property {boolean} hasPreviewImage - Whether a preview image is available
 * @property {boolean} hasLiveLink - Whether the project has a public live URL
 * @property {string} [liveLink] - URL to the live deployment, if available
 * @property {boolean} hasSourceCode - Whether the source code is publicly accessible
 * @property {string} [sourceCodeLink] - URL to the source code repository, if available
 */
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
