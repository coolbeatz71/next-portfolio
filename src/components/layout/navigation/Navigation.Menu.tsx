import { navigationList } from "@/config/Navigation";
import { getActiveSection } from "@/helpers/getActiveSection";
import { cn } from "@/helpers/mergeClassName";
import { throttle } from "@/helpers/throttle";
import NextLink from "next/link";
import { Fragment, memo, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export interface NavigationMenuProps {
    className?: string;
    onClick?: () => void;
}

function NavigationMenuComponent({ onClick, className }: NavigationMenuProps) {
    const { t } = useTranslation();
    const [activeLink, setActiveLink] = useState(
        () => window.location.hash || ""
    );

    useEffect(() => {
        const handleNavigation = throttle(() => {
            const current = getActiveSection();
            if (current !== activeLink) {
                setActiveLink(current);
                history.replaceState(null, "", current || "/");
            }
        }, 100);

        window.addEventListener("scroll", handleNavigation);
        window.addEventListener("hashchange", handleNavigation);

        handleNavigation();

        return () => {
            window.removeEventListener("scroll", handleNavigation);
            window.removeEventListener("hashchange", handleNavigation);
        };
    }, [activeLink]);

    return (
        <Fragment>
            {navigationList.map(({ label, href }) => {
                const isCurrent = activeLink === href;
                const linkClasses = cn(
                    "rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-300",
                    isCurrent
                        ? "dark:bg-slate-900 bg-slate-700 text-white"
                        : "dark:text-slate-300 text-slate-700 hover:bg-slate-300 dark:hover:bg-slate-700",
                    className
                );

                return (
                    <NextLink
                        key={label}
                        href={href}
                        className={linkClasses}
                        aria-current={isCurrent ? "page" : undefined}
                        onClick={() => {
                            setActiveLink(href);
                            onClick?.();
                        }}
                        suppressHydrationWarning
                    >
                        {t(label)}
                    </NextLink>
                );
            })}
        </Fragment>
    );
}

export const NavigationMenu = memo(NavigationMenuComponent);
