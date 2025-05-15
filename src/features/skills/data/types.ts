/**
 * @interface ISkillsByStack
 * @property {number} progress - Proficiency level from 0 to 100
 * @property {string} title - Display name of the technology
 * @property {string} lightImage - Path to the logo used in light mode
 * @property {string} darkImage - Path to the logo used in dark mode
 */
export interface ISkillsByStack {
    progress: number;
    title: string;
    lightImage: string;
    darkImage: string;
}

/**
 * @interface IMainStackList
 * @property {string} title - Display name of the technology
 * @property {string} lightImage - Path to the logo used in light mode
 * @property {string} darkImage - Path to the logo used in dark mode
 */
export interface IMainStackList {
    title: string;
    lightImage: string;
    darkImage: string;
}
