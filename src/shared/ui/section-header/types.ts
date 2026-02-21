/**
 * @interface SectionHeaderProps
 * @property {string} title - Main heading text displayed as an h2
 * @property {string} subtitle - Supporting description rendered below the title
 * @property {string} [className] - Additional class names for the text container
 */
export interface SectionHeaderProps {
    title: string;
    subtitle: string;
    className?: string;
}
