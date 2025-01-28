import LanguageDropDown from "@/components/shared/language-dropdown/LanguageDropDown";
import ThemeToggle from "@/components/shared/theme-toggle/ThemeToggle";

export default function SideMenuFooter(): JSX.Element {
    return (
        <div className="flex items-center justify-between mt-4 w-full">
            <LanguageDropDown placement="top" />
            <ThemeToggle />
        </div>
    );
}
