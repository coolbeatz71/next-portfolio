import { useTheme } from "next-themes";
import dynamic from "next/dynamic";
import { useCallback, useMemo } from "react";
import { FaCloudMoon, FaCloudSun } from "react-icons/fa";

const DynamicTooltip = dynamic(() => import("./../tooltip/Tooltip"), {
    ssr: false
});

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
        <DynamicTooltip text={tooltipText}>
            <button
                type="button"
                onClick={onToggle}
                className="group relative text-2xl bg-foreground text-background rounded size-12 flex justify-center items-center dark:text-indigo-500 text-indigo-700 hover:bg-slate-300 dark:hover:bg-slate-700"
            >
                {icon}
            </button>
        </DynamicTooltip>
    );
}
