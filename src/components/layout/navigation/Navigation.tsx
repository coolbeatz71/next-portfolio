import { useWindowScroll } from "react-use";

import NavigationMenu from "@/components/layout/navigation/Navigation.Menu";
import HamburgerMenuButton from "@/components/shared/hamburger-menu/HamburgerMenu.Button";
import LanguageDropDown from "@/components/shared/language-dropdown/LanguageDropDown";
import Logo from "@/components/shared/logo/Logo";
import ThemeToggle from "@/components/shared/theme-toggle/ThemeToggle";
import { useEffect, useState } from "react";

export default function Navigation(): JSX.Element {
    const { y } = useWindowScroll();
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        setScrollY(y);
    }, [y]);

    return (
        <nav
            className={`sticky top-0 z-20 transition duration-100 ${scrollY > 20 ? "dark:bg-slate-800/70 bg-slate-200/70 backdrop-blur-lg shadow" : ""}`}
        >
            <div className="mx-auto px-2 sm:px-2 md:px-4 lg:px-24 xl:px-32 2xl:px-32">
                <div className="relative flex py-3 items-center justify-between gap-3">
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
                    <div className="inset-y-0 right-0 flex items-center justify-center gap-3">
                        <LanguageDropDown placement="bottom" />
                        <ThemeToggle />
                    </div>
                </div>
            </div>
        </nav>
    );
}
