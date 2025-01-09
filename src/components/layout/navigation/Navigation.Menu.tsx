import NextLink from "next/link";
import { Fragment, useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const menuItems = [
    { label: "introduction", href: "" },
    { label: "about", href: "#about" },
    { label: "experience", href: "#experience" },
    { label: "contribution", href: "#contribution" },
    { label: "skill", href: "#skill" }
    //TODO: add articles when medium and dev.to APIs are integrated
    // { label: "Article", href: "#" }
];

export default function NavigationMenu(): JSX.Element {
    const { t } = useTranslation();
    const [currentItem, setCurrentItem] = useState("");

    const handleHashChange = useCallback(() => {
        const newHash = window.location.hash;
        if (newHash !== currentItem) setCurrentItem(newHash);
    }, [currentItem]);

    useEffect(() => {
        window.addEventListener("hashchange", handleHashChange);

        handleHashChange();

        return () => {
            window.removeEventListener("hashchange", handleHashChange);
        };
    }, [handleHashChange]);

    return (
        <Fragment>
            {menuItems.map((item) => {
                const isCurrent = currentItem === item.href;

                return (
                    <NextLink
                        key={item.label}
                        href={item.href}
                        className={`rounded-md px-3 py-2 text-sm font-medium ${
                            isCurrent
                                ? "dark:bg-slate-900 bg-slate-700 text-white"
                                : "dark:text-slate-300 text-slate-700 hover:bg-slate-300 dark:hover:bg-slate-700"
                        }`}
                        aria-current={isCurrent ? "page" : undefined}
                        onClick={() => setCurrentItem(item.href)}
                    >
                        {t(item.label)}
                    </NextLink>
                );
            })}
        </Fragment>
    );
}
