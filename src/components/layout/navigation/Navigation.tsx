import { useWindowScroll } from "react-use";

import NavigationMenu from "@/components/layout/navigation/Navigation.Menu";
import HamburgerMenuButton from "@/components/shared/hamburger-menu/HamburgerMenu.Button";
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
            id=""
            className={`sticky top-0 z-20 transition duration-100 ${scrollY > 20 ? "dark:bg-slate-800/70 bg-slate-200/70 backdrop-blur-xl shadow" : ""}`}
        >
            <div className="mx-auto max-w-7xl">
                <div className="relative flex sm:h-24 h-20  items-center justify-between">
                    <div className="inset-y-0 left-0 flex items-center sm:hidden">
                        <HamburgerMenuButton />
                    </div>
                    <div className="flex items-center justify-center sm:items-stretch sm:justify-start w-full">
                        <Logo />
                        <div className="hidden sm:ml-6 sm:flex justify-center w-full">
                            <div className="flex space-x-2">
                                <NavigationMenu />
                            </div>
                        </div>
                    </div>
                    <div className="inset-y-0 right-0 flex items-center sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <ThemeToggle />
                    </div>
                </div>
            </div>
        </nav>
    );
}
