import type { ReactNode } from "react";
import { IProjectByStack } from "@/features/projects/data/types";

/**
 * @interface LinkProps
 * @property {string} [href] - URL the link points to
 * @property {boolean} isVisible - Whether the link is rendered or hidden
 * @property {ReactNode} children - Link label content
 */
export interface LinkProps {
    href?: string;
    isVisible: boolean;
    children: ReactNode;
}

/**
 * @interface IProjectCaseStudy
 * @property {string} category - Short label describing the project domain
 * @property {string} summary - Translated project summary
 * @property {string} role - Translated role held on the project
 * @property {string} contextTitle - Headline of the context section
 * @property {string} contextBody - Narrative explaining why the project existed
 * @property {string} challengeTitle - Headline of the challenge section
 * @property {string} constraint - The constraint that made the project hard
 * @property {string} response - How the constraint was answered
 * @property {string[]} ownership - Responsibilities owned on the project
 * @property {string} outcome - What the project ultimately delivered
 */
export interface IProjectCaseStudy {
    category: string;
    summary: string;
    role: string;
    contextTitle: string;
    contextBody: string;
    challengeTitle: string;
    constraint: string;
    response: string;
    ownership: string[];
    outcome: string;
}

/**
 * @interface ProjectModalProps
 * @property {IProjectByStack} project - Project data to render in the modal
 */
export interface ProjectModalProps {
    project: IProjectByStack;
}

/**
 * @interface ProjectModalDialogProps
 * @property {IProjectByStack[]} projects - Projects the dialog can navigate through
 * @property {number | null} activeIndex - Index of the project on display, or null when closed
 * @property {() => void} onClose - Handler to dismiss the dialog
 * @property {() => void} onPrevious - Handler to show the previous project
 * @property {() => void} onNext - Handler to show the next project
 */
export interface ProjectModalDialogProps {
    projects: IProjectByStack[];
    activeIndex: number | null;
    onClose: () => void;
    onPrevious: () => void;
    onNext: () => void;
}

/**
 * @interface ProjectModalHeaderProps
 * @property {number} current - One-based position of the project on display
 * @property {number} total - Total number of projects in the current list
 * @property {() => void} onBack - Handler to dismiss the dialog and return to the grid
 */
export interface ProjectModalHeaderProps {
    current: number;
    total: number;
    onBack: () => void;
}

/**
 * @interface ProjectModalNavProps
 * @property {() => void} onPrevious - Handler to show the previous project
 * @property {() => void} onNext - Handler to show the next project
 */
export interface ProjectModalNavProps {
    onPrevious: () => void;
    onNext: () => void;
}

/**
 * @interface ProjectModalPreviewProps
 * @property {IProjectByStack} project - Project data providing the images
 */
export interface ProjectModalPreviewProps {
    project: IProjectByStack;
}

/**
 * @interface ProjectModalOverviewProps
 * @property {IProjectByStack} project - Project data providing the name, stack and links
 * @property {IProjectCaseStudy} caseStudy - Translated case study content
 */
export interface ProjectModalOverviewProps {
    project: IProjectByStack;
    caseStudy: IProjectCaseStudy;
}

/**
 * @interface ProjectModalSectionProps
 * @property {number} index - One-based position of the section, rendered as a zero-padded ordinal
 * @property {string} label - Short uppercase label naming the section
 * @property {string} [title] - Optional headline introducing the section body
 * @property {ReactNode} children - Section body content
 */
export interface ProjectModalSectionProps {
    index: number;
    label: string;
    title?: string;
    children: ReactNode;
}

/**
 * @interface ProjectModalChallengeProps
 * @property {string} constraint - The constraint that made the project hard
 * @property {string} response - How the constraint was answered
 */
export interface ProjectModalChallengeProps {
    constraint: string;
    response: string;
}

/**
 * @interface ProjectModalOwnershipProps
 * @property {string[]} items - Responsibilities owned on the project
 */
export interface ProjectModalOwnershipProps {
    items: string[];
}

/**
 * @interface ProjectModalLinksProps
 * @property {IProjectByStack} project - Project data containing link visibility flags and URLs
 */
export interface ProjectModalLinksProps {
    project: IProjectByStack;
}
