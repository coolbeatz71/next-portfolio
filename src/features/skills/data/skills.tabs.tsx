import { devStackBackend } from "@/features/skills/data/skills.backend";
import { devStackDatabase } from "@/features/skills/data/skills.database";
import { devStackFrontend } from "@/features/skills/data/skills.frontend";
import { devStackInfrastructure } from "@/features/skills/data/skills.infrastructure";
import { devStackLanguages } from "@/features/skills/data/skills.language";
import { devStackOthers } from "@/features/skills/data/skills.other";
import { SkillSection } from "@/features/skills/ui/Skills.Section";

import type { ITabs } from "../../projects/data/types";

export const devStackTabs: ITabs[] = [
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
