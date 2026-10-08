/**
 * Lower bound of each proficiency band, highest first.
 */
const SKILL_LEVELS = [
    { threshold: 85, key: "skill_level_expert" },
    { threshold: 70, key: "skill_level_advanced" },
    { threshold: 50, key: "skill_level_proficient" },
    { threshold: 0, key: "skill_level_familiar" }
] as const;

/**
 * Resolves a proficiency percentage to the i18n key of its band.
 *
 * @param progress - Proficiency level from 0 to 100
 * @returns The translation key naming that band
 */
export const getSkillLevelKey = (progress: number): string => {
    const level = SKILL_LEVELS.find((entry) => progress >= entry.threshold);
    return level?.key ?? "skill_level_familiar";
};
