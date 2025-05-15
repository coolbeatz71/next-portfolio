import type { MotionProps } from "motion/react";
import type { ReactNode } from "react";

/**
 * @interface AnimatedShapeProps
 * @property {string} [className] - Additional class names for the motion element
 */
export interface AnimatedShapeProps extends MotionProps {
    className?: string;
}

/**
 * @interface AnimatedLineProps
 * @property {string} pathD - SVG `d` attribute value for the path to animate
 */
export interface AnimatedLineProps extends AnimatedShapeProps {
    pathD: string;
}

/**
 * @interface INavigationItem
 * @property {string} label - i18n key for the link label
 * @property {string} href - Hash or path the link points to
 */
export interface INavigationItem {
    label: string;
    href: string;
}

/**
 * @interface IDevToolLogo
 * @property {string} className - Tailwind classes for the logo card element
 * @property {string} containerClassName - Tailwind grid placement classes for the container
 * @property {string} iconName - Tailwind background-image class for the technology icon
 */
export interface IDevToolLogo {
    className: string;
    containerClassName: string;
    iconName: string;
}

/**
 * @interface ISocialLink
 * @property {ReactNode} icon - Icon element representing the platform
 * @property {string} platform - Platform identifier (e.g. `"github"`, `"linkedin"`)
 * @property {string} href - URL of the profile page
 * @property {string} hoverColor - Tailwind hover color class for the icon button
 */
export interface ISocialLink {
    icon: ReactNode;
    platform: string;
    href: string;
    hoverColor: string;
}

/**
 * @interface ICreditBadge
 * @property {ReactNode} icon - Icon element displayed inside the badge
 * @property {string} className - Additional class names for the badge container
 * @property {number} count - Numeric stat to highlight (e.g. years, projects)
 * @property {string} text - i18n key for the badge label text
 */
export interface ICreditBadge {
    icon: ReactNode;
    className: string;
    count: number;
    text: string;
}

/**
 * @interface ILanguage
 * @property {string} code - BCP 47 language code (e.g. `"en"`, `"fr"`)
 * @property {string} name - Human-readable language name
 * @property {ReactNode} flag - Flag icon element for the language
 */
export interface ILanguage {
    code: string;
    name: string;
    flag: ReactNode;
}
