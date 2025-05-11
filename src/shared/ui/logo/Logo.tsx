import NextLink from "next/link";

/**
 * Logo component.
 *
 * @component
 *
 * @description
 * Renders the site logo as a styled text link ("MJV.") that navigates to the home page.
 *
 * @returns The logo link element
 */
export function Logo() {
    return (
        <NextLink href="">
            <div className="flex shrink-0 items-center cursor-pointer">
                <h1 className="text-3xl font-bold dark:text-white text-black">
                    MJV
                </h1>
                <span className="text-3xl font-bold text-indigo-600">.</span>
            </div>
        </NextLink>
    );
}
