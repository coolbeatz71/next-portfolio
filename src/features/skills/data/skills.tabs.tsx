import type { Tabs } from "@/features/projects/data/projects.tabs";
import { devStackBackend } from "@/features/skills/data/skills.backend";
import { devStackDatabase } from "@/features/skills/data/skills.database";
import { devStackFrontend } from "@/features/skills/data/skills.frontend";
import { devStackInfrastructure } from "@/features/skills/data/skills.infrastructure";
import { devStackLanguages } from "@/features/skills/data/skills.language";
import { devStackOthers } from "@/features/skills/data/skills.other";
import { SkillSection } from "@/features/skills/ui/Skills.Section";

/**
 * @interface SkillsByStack
 * @property {number} progress - Proficiency level from 0 to 100
 * @property {string} title - Display name of the technology
 * @property {string} lightImage - Path to the logo used in light mode
 * @property {string} darkImage - Path to the logo used in dark mode
 */
export interface SkillsByStack {
    progress: number;
    title: string;
    lightImage: string;
    darkImage: string;
}

/** Dev stack skills grouped by category, used to populate the tab panels */
export const devStackTabs: Tabs[] = [
    {
        title: "skills.language",
        context: "language",
        content: <SkillSection stacks={devStackLanguages} />
    },
    {
        title: "skills.frontend",
        context: "front-end",
        content: <SkillSection stacks={devStackFrontend} />
    },
    {
        title: "skills.backend",
        context: "backend-end",
        content: <SkillSection stacks={devStackBackend} />
    },
    {
        title: "skills.infrastructure",
        context: "infrastructure",
        content: <SkillSection stacks={devStackInfrastructure} />
    },
    {
        title: "skills.database",
        context: "database",
        content: <SkillSection stacks={devStackDatabase} />
    },
    {
        title: "skills.other_interests",
        context: "other-interests",
        content: <SkillSection stacks={devStackOthers} />
    }
];
