/**
 * @interface INavigationItem
 * @property {string} label - i18n key for the link label
 * @property {string} href - Hash or path the link points to
 */
export interface INavigationItem {
    label: string;
    href: string;
}

export const navigationList: INavigationItem[] = [
    { label: "introduction", href: "" },
    { label: "about", href: "#about" },
    { label: "experience", href: "#experience" },
    { label: "contribution", href: "#contribution" },
    { label: "skill", href: "#skill" },
    { label: "contact", href: "#contact" }
    //TODO: add articles when medium and dev.to APIs are integrated
    // { label: "Article", href: "#" },
];
