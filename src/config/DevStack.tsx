import SkillSection from "@/components/layout/skills/Skills.Section";
import type { Tabs } from "@/config/Projects";

import { devStackBackend } from "@/config/DevStack.Backend";
import { devStackDatabase } from "@/config/DevStack.Database";
import { devStackFrontend } from "@/config/DevStack.Frontend";
import { devStackInfrastructure } from "@/config/DevStack.Infrastructure";
import { devStackLanguages } from "@/config/DevStack.Language";
import { devStackOthers } from "@/config/DevStack.Other";

export interface SkillsByStack {
    progress: number;
    title: string;
    lightImage: string;
    darkImage: string;
}

export const devStackTabs: Tabs[] = [
    {
        title: "Language",
        context: "language",
        content: <SkillSection stacks={devStackLanguages} />
    },
    {
        title: "Front-End",
        context: "front-end",
        content: <SkillSection stacks={devStackFrontend} />
    },
    {
        title: "Backend-End",
        context: "backend-end",
        content: <SkillSection stacks={devStackBackend} />
    },
    {
        title: "Infrastructure",
        context: "infrastructure",
        content: <SkillSection stacks={devStackInfrastructure} />
    },
    {
        title: "Database",
        context: "database",
        content: <SkillSection stacks={devStackDatabase} />
    },
    {
        title: "Other interests",
        context: "other-interests",
        content: <SkillSection stacks={devStackOthers} />
    }
];
