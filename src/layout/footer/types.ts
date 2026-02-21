import type { ReactNode } from "react";

/**
 * @interface LinkProps
 * @property {string} href - URL the link points to
 * @property {ReactNode} children - Link label content
 */
export interface LinkProps {
    href: string;
    children: ReactNode;
}

/**
 * @interface FooterMessageFormSubmitButtonProps
 * @property {boolean} isLoading - Whether the form submission is in progress
 */
export interface FooterMessageFormSubmitButtonProps {
    isLoading: boolean;
}
