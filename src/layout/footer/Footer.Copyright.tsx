import { useTranslation } from "react-i18next";
import type { LinkProps } from "./types";

const CURRENT_YEAR = new Date().getFullYear();

const Link = ({ href, children }: LinkProps) => (
    <a
        href={href}
        className="text-primary-on-accent hover:underline font-medium"
        target="_blank"
        rel="noopener noreferrer"
    >
        {children}
    </a>
);

/**
 * Footer copyright bar component.
 *
 * @component
 *
 * @description
 * Renders the copyright line with the current year, owner name, and links to
 * Tailwind CSS and Aceternity UI.
 *
 * @returns The footer copyright element
 */
export function FooterCopyright() {
    const { t } = useTranslation();
    return (
        <p className="text-sm text-center">
            <span className="font-semibold text-typography-copyright">
                &copy; {CURRENT_YEAR} Mutombo Jean-Vincent |
            </span>{" "}
            <span className="font-light text-typography-contact">
                {" "}
                {t("designed_with")} <span className="text-love">❤️</span>{" "}
                {t("and")}{" "}
                <Link href="https://tailwindcss.com/">Tailwind CSS</Link>
                {" & "}
                <Link href="https://ui.aceternity.com/">Aceternity UI</Link>.
            </span>
        </p>
    );
}
