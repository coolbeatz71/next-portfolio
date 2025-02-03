import { useWindowScroll } from "react-use";

import NavigationMenu from "@/components/layout/navigation/Navigation.Menu";
import LanguageDropDown from "@/components/shared/dropdown/Language.Dropdown";
import HamburgerMenuButton from "@/components/shared/hamburger-menu/HamburgerMenu.Button";
import Logo from "@/components/shared/logo/Logo";
import ThemeToggle from "@/components/shared/theme-toggle/ThemeToggle";
import { RESPONSIVE_CLASSNAME } from "@/config/ThemeStyle";
import { useEffect, useState } from "react";

export default function Navigation(): JSX.Element {
    const { y } = useWindowScroll();
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        setScrollY(y);
    }, [y]);

    return (
        <nav
            className={`sticky top-0 z-30 transition duration-100 ${scrollY > 20 ? "dark:bg-slate-800/70 bg-slate-200/70 backdrop-blur-lg shadow" : ""}`}
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
