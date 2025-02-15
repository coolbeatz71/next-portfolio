import { navigationList } from "@/config/Navigation";
import { cn } from "@/helpers/mergeClassName";
import NextLink from "next/link";
import { Fragment, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export interface NavigationMenuProps {
    onClick?: () => void;
    className?: string;
}

export default function NavigationMenu({
    onClick,
    className
}: NavigationMenuProps): JSX.Element {
    const { t } = useTranslation();
    const [activeLink, setActiveLink] = useState(
        () => window.location.hash || ""
    );

    useEffect(() => {
        const updateActiveLink = () => {
            const scrollPosition = window.scrollY;
            let activeSection = "";

            if (scrollPosition === 0) activeSection = "";
            else {
                for (const { href } of navigationList) {
                    if (!href.startsWith("#")) continue;

                    const section = document.querySelector(href);
                    if (section) {
                        const { top } = section.getBoundingClientRect();
                        if (top <= 100) activeSection = href;
                    }
                }
            }

            if (activeSection !== activeLink) {
                setActiveLink(activeSection);
                history.replaceState(null, "", activeSection || "/");
            }
        };

        window.addEventListener("scroll", updateActiveLink);
        window.addEventListener("hashchange", updateActiveLink);

        updateActiveLink();

        return () => {
            window.removeEventListener("scroll", updateActiveLink);
            window.removeEventListener("hashchange", updateActiveLink);
        };
    }, [activeLink]);

    return (
        <Fragment>
            {navigationList.map((item) => {
                const isCurrent = activeLink === item.href;

                return (
                    <NextLink
                        key={item.label}
                        href={item.href}
                        className={cn(
                            `rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                                isCurrent
                                    ? "dark:bg-slate-900 bg-slate-700 text-white"
                                    : "dark:text-slate-300 text-slate-700 hover:bg-slate-300 dark:hover:bg-slate-700"
                            }`,
                            className
                        )}
                        aria-current={isCurrent ? "page" : undefined}
                        onClick={() => {
                            setActiveLink(item.href);
                            onClick?.();
                        }}
                        suppressHydrationWarning
                    >
                        {t(item.label)}
                    </NextLink>
                );
            })}
        </Fragment>
    );
}
