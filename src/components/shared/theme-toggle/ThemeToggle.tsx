import { useTheme } from "next-themes";
import dynamic from "next/dynamic";
import { useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { FaCloudMoon, FaCloudSun } from "react-icons/fa";

const DynamicTooltip = dynamic(() => import("./../tooltip/Tooltip"), {
    ssr: false
});

export default function ThemeToggle(): JSX.Element {
    const { t } = useTranslation();
    const { theme, setTheme } = useTheme();

    const onToggle = useCallback(() => {
        setTheme(theme === "dark" ? "light" : "dark");
    }, [theme, setTheme]);

    const icon = useMemo(
        () => (theme === "dark" ? <FaCloudMoon /> : <FaCloudSun />),
        [theme]
    );
    const tooltipText = useMemo(
        () => (theme === "dark" ? "light_mode" : "dark_mode"),
        [theme]
    );

    return (
        <DynamicTooltip text={t(tooltipText)}>
            <button
                type="button"
                onClick={onToggle}
                className="group relative text-2xl bg-foreground text-background rounded-lg size-10 md:size-12 flex justify-center items-center dark:text-indigo-500 text-indigo-700 bg-slate-100 dark:bg-slate-900 hover:bg-slate-300 dark:hover:bg-slate-700"
            >
                {icon}
            </button>
        </DynamicTooltip>
    );
}
