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
        () => (theme === "dark" ? <FaCloudSun /> : <FaCloudMoon />),
        [theme]
    );
    const tooltipText = useMemo(
        () => (theme === "dark" ? "Light Mode" : "Dark Mode"),
        [theme]
    );

    return (
        <Tooltip text={tooltipText}>
            <button
                type="button"
                onClick={onToggle}
                className="group relative text-xl bg-foreground text-background rounded size-12 flex justify-center items-center text-gray-400 hover:bg-gray-700 hover:text-white"
            >
                {icon}
            </button>
        </Tooltip>
    );
}
