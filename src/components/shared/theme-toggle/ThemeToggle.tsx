import { useTheme } from "next-themes";
import { useCallback, useMemo } from "react";
import { FaCloudMoon, FaCloudSun } from "react-icons/fa";

export default function ThemeToggle(): JSX.Element {
    const { theme, setTheme } = useTheme();

    const onToggle = useCallback(() => {
        setTheme(theme === "dark" ? "light" : "dark");
    }, [theme, setTheme]);

    const icon = useMemo(
        () => (theme === "dark" ? <FaCloudMoon /> : <FaCloudSun />),
        [theme]
    );

    return (
        <button
            type="button"
            onClick={onToggle}
            className="group relative text-2xl size-12 sm:size-12 md:size-12 bg-foreground text-background rounded-lg flex justify-center items-center dark:text-indigo-500 text-indigo-700 bg-slate-100 dark:bg-slate-900 hover:bg-slate-300 dark:hover:bg-slate-700"
        >
            {icon}
        </button>
    );
}
