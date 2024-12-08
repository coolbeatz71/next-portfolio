import NextLink from "next/link";
import { Fragment } from "react";

export default function NavigationMenu(): JSX.Element {
    const menuItems = [
        { label: "Introduction", href: "#", current: true },
        { label: "About", href: "#", current: false },
        { label: "Contribution", href: "#", current: false },
        { label: "Experience", href: "#", current: false },
        { label: "Skill", href: "#", current: false },
        { label: "Article", href: "#", current: false }
    ];

    return (
        <Fragment>
            {menuItems.map((item) => (
                <NextLink
                    key={item.label}
                    href={item.href}
                    className={`rounded-md px-3 py-2 text-sm font-medium ${
                        item.current
                            ? "dark:bg-slate-900 bg-slate-700 text-white"
                            : "dark:text-slate-300 text-slate-700 hover:bg-slate-300 dark:hover:bg-slate-700"
                    }`}
                    aria-current={item.current ? "page" : undefined}
                >
                    {item.label}
                </NextLink>
            ))}
        </Fragment>
    );
}
