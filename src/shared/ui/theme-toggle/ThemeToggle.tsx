import { motion } from "motion/react";
import { useTheme } from "next-themes";
import { useCallback } from "react";
import {
    moonAnimation,
    moonPath,
    raysVariants,
    rayVariant,
    shineVariant,
    sunAnimation,
    sunPath,
    sunRayPaths
} from "./ThemeToggle.Variants";

/**
 * Theme toggle component.
 *
 * @component
 *
 * @description
 * Renders an animated icon button that switches between light and dark mode.
 * The icon morphs between a sun (light) and a moon (dark) with animated rays and shine effects.
 *
 * @returns The theme toggle button element
 */
export function ThemeToggle() {
    const { theme, setTheme } = useTheme();

    const onToggle = useCallback(() => {
        setTheme(theme === "dark" ? "light" : "dark");
    }, [theme, setTheme]);

    return (
        <button
            type="button"
            onClick={onToggle}
            title="Toggle Theme"
            className="group relative size-12 sm:size-12 md:size-12 bg-foreground text-background rounded-lg flex justify-center items-center text-amber-500 bg-slate-100 dark:bg-slate-900 hover:bg-slate-300 dark:hover:bg-slate-700"
        >
            <motion.svg
                width={25}
                height={25}
                fill="none"
                strokeWidth="4"
                strokeLinecap="round"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
                className="relative inset-0"
                aria-hidden="true"
            >
                <motion.path
                    d={moonPath}
                    initial="hidden"
                    variants={shineVariant}
                    className={"absolute top-0 left-0 stroke-indigo-500 "}
                    animate={theme === "dark" ? "visible" : "hidden"}
                />

                <motion.g
                    initial="hidden"
                    variants={raysVariants}
                    animate={theme === "light" ? "visible" : "hidden"}
                    className="stroke-6 stroke-yellow-400"
                    style={{ strokeLinecap: "round" }}
                >
                    {sunRayPaths.map((d) => (
                        <motion.path
                            key={d}
                            d={d}
                            variants={rayVariant}
                            className="origin-center"
                        />
                    ))}
                </motion.g>

                <motion.path
                    d={sunPath}
                    fill="transparent"
                    transition={{ duration: 0.65, type: "spring" }}
                    initial={{ fillOpacity: 0, strokeOpacity: 0 }}
                    animate={theme === "dark" ? moonAnimation : sunAnimation}
                />
            </motion.svg>
        </button>
    );
}
