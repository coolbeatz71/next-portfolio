import type { ReactNode } from "react";

/**
 * @interface ITabs
 * @property {string} title - i18n translation key for the tab label
 * @property {string} context - URL-safe slug used to identify the active tab
 * @property {ReactNode} content - The rendered panel content shown when this tab is selected
 */
export interface ITabs {
    title: string;
    context: string;
    content: ReactNode;
}

/**
 * @interface IImage
 * @property {string} alt - Accessible alt text for the image
 * @property {string} src - Path or URL to the image asset
 * @property {string} [description] - Optional caption displayed beneath the image
 */
export interface IImage {
    alt: string;
    src: string;
    description?: string;
}

/**
 * @interface IProjectByStack
 * @property {string} name - Project display name
 * @property {string} role - Role played in the project (e.g. "Lead Developer")
 * @property {string} description - Short summary of the project
 * @property {string[]} stack - List of technologies used
 * @property {IImage[]} images - Screenshots or preview images for the project
 * @property {string} blurURL - Base64 blur placeholder shown while images load
 * @property {boolean} hasPreviewImage - Whether a preview image is available
 * @property {boolean} hasLiveLink - Whether the project has a public live URL
 * @property {string} [liveLink] - URL to the live deployment, if available
 * @property {boolean} hasSourceCode - Whether the source code is publicly accessible
 * @property {string} [sourceCodeLink] - URL to the source code repository, if available
 */
export interface IProjectByStack {
    name: string;
    role: string;
    description: string;
    stack: string[];
    images: IImage[];
    blurURL: string;
    hasPreviewImage: boolean;
    hasLiveLink: boolean;
    liveLink?: string;
    hasSourceCode: boolean;
    sourceCodeLink?: string;
}
