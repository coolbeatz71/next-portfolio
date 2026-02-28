import NextLink from "next/link";
import { memo } from "react";

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
function LogoComponent() {
    return (
        <NextLink href="">
            <div className="flex shrink-0 items-center cursor-pointer">
                <h1 className="text-3xl font-bold text-typography-inverse">MJV</h1>
                <span className="text-3xl font-bold text-primary-on-accent">.</span>
            </div>
        </NextLink>
    );
}

export const Logo = memo(LogoComponent);
