import NextLink from "next/link";
import { Fragment, memo, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { navigationList } from "@/shared/config/navigation";
import { cn } from "@/shared/lib/cn";
import { getActiveSection } from "@/shared/lib/getActiveSection";
import { throttle } from "@/shared/lib/throttle";
import type { NavigationMenuProps } from "./types";

/**
 * Navigation menu component.
 *
 * @component
 *
 * @description
 * Renders a list of navigation links that highlight the active section based on scroll
 * position. Tracks the viewport via throttled scroll and hashchange events and updates
 * the URL hash accordingly.
 *
 * @param {NavigationMenuProps} props - Component props
 * @param {string} [props.className] - Additional class names for each nav link
 * @param {() => void} [props.onClick] - Callback fired when a nav link is clicked
 *
 * @returns The navigation menu element
 */
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
