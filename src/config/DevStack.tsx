import type { Tabs } from "@/config/Projects";
import SkillSection from "@/components/layout/skills/Skills.Section";

import { devStackLanguages } from "@/config/DevStack.Language";
import { devStackFrontend } from "@/config/DevStack.Frontend";
import { devStackBackend } from "@/config/DevStack.Backend";
import { devStackInfrastructure } from "@/config/DevStack.Infrastructure";
import { devStackOthers } from "@/config/DevStack.Other";
import { devStackDatabase } from "@/config/DevStack.Database";

export interface SkillsByStack {
    progress: number;
    title: string;
    lightImage: string;
    darkImage: string;
}

export const devStackTabs: Tabs[] = [
    {
        title: "Programming Language",
        context: "programming-language",
        content: <SkillSection stack={devStackLanguages} />
    },
    {
        title: "Front-End",
        context: "front-end",
        content: <SkillSection stack={devStackFrontend} />
    },
    {
        title: "Backend-End",
        context: "backend-end",
        content: <SkillSection stack={devStackBackend} />
    },
    {
        title: "Infrastructure",
        context: "infrastructure",
        content: <SkillSection stack={devStackInfrastructure} />
    },
    {
        title: "Database",
        context: "database",
        content: <SkillSection stack={devStackDatabase} />
    },
    {
        title: "Other interests",
        context: "other-interests",
        content: <SkillSection stack={devStackOthers} />
    }
];
