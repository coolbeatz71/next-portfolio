import Tooltip from "@/components/shared/tooltip/Tooltip";
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
    const tooltipText = useMemo(
        () => (theme === "dark" ? "Light mode" : "Dark mode"),
        [theme]
    );

    return (
        <Tooltip text={tooltipText}>
            <button
                type="button"
                onClick={onToggle}
                className="group relative text-2xl bg-foreground text-background rounded size-12 flex justify-center items-center dark:text-indigo-500 text-indigo-700  hover:bg-slate-300 dark:hover:bg-slate-700"
            >
                {icon}
            </button>
        </Tooltip>
    );
}
