import { SkillSection } from "@/components/layout/skills/Skills.Section";
import { devStackBackend } from "@/config/DevStack.Backend";
import { devStackDatabase } from "@/config/DevStack.Database";
import { devStackFrontend } from "@/config/DevStack.Frontend";
import { devStackInfrastructure } from "@/config/DevStack.Infrastructure";
import { devStackLanguages } from "@/config/DevStack.Language";
import { devStackOthers } from "@/config/DevStack.Other";
import type { Tabs } from "@/config/Projects";

export interface SkillsByStack {
    progress: number;
    title: string;
    lightImage: string;
    darkImage: string;
}

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
