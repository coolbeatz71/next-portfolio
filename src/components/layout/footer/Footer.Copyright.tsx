import { useTranslation } from "react-i18next";

interface LinkProps {
    href: string;
    children: React.ReactNode;
}

const Link = ({ href, children }: LinkProps) => (
    <a
        href={href}
        className="text-indigo-700 hover:underline font-medium"
        target="_blank"
        rel="noopener noreferrer"
    >
        {children}
    </a>
);

export default function FooterCopyright(): JSX.Element {
    const { t } = useTranslation();
    return (
        <p className="text-sm text-center">
            <span className="font-semibold text-gray-600 dark:text-gray-300">
                &copy; {new Date().getFullYear()} Mutombo Jean-Vincent |
            </span>{" "}
            <span className="font-light text-gray-500 dark:text-gray-400">
                {" "}
                {t("designed_with")} <span className="text-pink-500">❤️</span>{" "}
                {t("and")}{" "}
                <Link href="https://tailwindcss.com/">Tailwind CSS</Link>
                {" & "}
                <Link href="https://ui.aceternity.com/">Aceternity UI</Link>.
            </span>
        </p>
    );
}
