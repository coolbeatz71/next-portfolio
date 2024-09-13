import Logo from "@/components/shared/logo/Logo";
import ThemeToggle from "@/components/shared/theme-toggle/ThemeToggle";
import HamburgerMenuButton from "@/components/shared/hamburger-menu/HamburgerMenu.Button";
import NavigationMenu from "@/components/layout/navigation/Navigation.Menu";

export const Navigation = (): JSX.Element => {
    return (
        <nav className="bg-gray-800">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
};
