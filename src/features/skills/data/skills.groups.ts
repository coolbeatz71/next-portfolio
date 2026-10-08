import { devStackBackend } from "@/features/skills/data/skills.backend";
import { devStackDatabase } from "@/features/skills/data/skills.database";
import { devStackFrontend } from "@/features/skills/data/skills.frontend";
import { devStackInfrastructure } from "@/features/skills/data/skills.infrastructure";
import { devStackLanguages } from "@/features/skills/data/skills.language";
import { devStackOthers } from "@/features/skills/data/skills.other";
import type { ISkillsByStack } from "./types";

/**
 * Skill categories rendered as cards, each pairing an i18n title with its entries.
 */
export const devStackGroups: { title: string; stacks: ISkillsByStack[] }[] = [
    { title: "skills.language", stacks: devStackLanguages },
    { title: "skills.frontend", stacks: devStackFrontend },
    { title: "skills.backend", stacks: devStackBackend },
    { title: "skills.infrastructure", stacks: devStackInfrastructure },
    { title: "skills.database", stacks: devStackDatabase },
    { title: "skills.other_interests", stacks: devStackOthers }
];
