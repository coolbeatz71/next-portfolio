import { useTheme } from "next-themes";
import { FaCloudMoon, FaCloudSun } from "react-icons/fa";

export default function ThemeToggle(): JSX.Element {
    const { theme, setTheme } = useTheme();

    const onToggle = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <button
            type="button"
            onClick={onToggle}
            className="text-xl bg-foreground text-background rounded size-12 flex justify-center items-center text-gray-400 hover:bg-gray-700 hover:text-white"
        >
            {theme === "dark" ? <FaCloudSun /> : <FaCloudMoon />}
        </button>
    );
}
