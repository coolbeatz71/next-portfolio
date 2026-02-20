import { useEffect, useState } from "react";
import { useWindowScroll } from "react-use";
import { NavigationMenu } from "@/layout/navigation/Navigation.Menu";
import { RESPONSIVE_CLASSNAME } from "@/shared/config/style";
import { LanguageDropDown } from "@/shared/ui/dropdown/language/Language.Dropdown";
import { HamburgerMenuButton } from "@/shared/ui/hamburger-menu/HamburgerMenu.Button";
import { Logo } from "@/shared/ui/logo/Logo";
import { ThemeToggle } from "@/shared/ui/theme-toggle/ThemeToggle";

/**
 * Top navigation bar widget.
 *
 * @component
 *
 * @description
 * Renders the sticky top navigation bar with logo, navigation menu, language switcher,
 * and theme toggle. Applies a frosted glass backdrop when the user scrolls past 20px.
 *
 * @returns The navigation bar element
 */
export function Navigation() {
    const { y } = useWindowScroll();
    const [scrollY, setScrollY] = useState(0);

    const scrollBackdrop =
        scrollY > 20
            ? "dark:bg-slate-800/70 bg-slate-200/70 backdrop-blur-md shadow"
            : "";

    useEffect(() => {
        setScrollY(y);
    }, [y]);

    return (
        <nav
            className={`sticky top-0 z-40 transition duration-100 ${scrollBackdrop}`}
        >
            <div className={RESPONSIVE_CLASSNAME}>
                <div className="relative flex py-4 sm:py-4 lg:py-5 items-center justify-between gap-2">
                    <div className="inset-y-0 left-0 flex items-center lg:hidden">
                        <HamburgerMenuButton />
                    </div>
                    <div className="flex items-center justify-start w-full">
                        <Logo />
                        <div className="hidden md:ml-6 lg:flex justify-center w-full">
                            <div className="flex space-x-2">
                                <NavigationMenu />
                            </div>
                        </div>
                    </div>
                    <div className="inset-y-0 right-0 flex items-center justify-center gap-2">
                        <LanguageDropDown placement="bottom" />
                        <ThemeToggle />
                    </div>
                </div>
            </div>
        </nav>
    );
}
