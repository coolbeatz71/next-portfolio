import { Fragment } from "react";
import NextLink from "next/link";

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
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white"
                    }`}
                    aria-current={item.current ? "page" : undefined}
                >
                    {item.label}
                </NextLink>
            ))}
        </Fragment>
    );
}
