import { domAnimation, LazyMotion } from "motion/react";
import * as m from "motion/react-m";
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
            suppressHydrationWarning
            aria-label={
                theme === "dark"
                    ? "Switch to light mode"
                    : "Switch to dark mode"
            }
            className={`
                group relative size-12 sm:size-12 md:size-12 
                rounded-lg flex justify-center items-center text-sun 
                bg-surface-raised hover:bg-surface-hover hover:duration-slow`}
        >
            <LazyMotion features={domAnimation}>
                <m.svg
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
                    <m.path
                        d={moonPath}
                        initial="hidden"
                        variants={shineVariant}
                        className={
                            "absolute top-0 left-0 stroke-primary-subtle"
                        }
                        animate={theme === "dark" ? "visible" : "hidden"}
                    />

                    <m.g
                        initial="hidden"
                        variants={raysVariants}
                        animate={theme === "light" ? "visible" : "hidden"}
                        className="stroke-6 stroke-sun"
                        style={{ strokeLinecap: "round" }}
                    >
                        {sunRayPaths.map((d) => (
                            <m.path
                                key={d}
                                d={d}
                                variants={rayVariant}
                                className="origin-center"
                            />
                        ))}
                    </m.g>

                    <m.path
                        d={sunPath}
                        fill="transparent"
                        transition={{ duration: 0.65, type: "spring" }}
                        initial={{
                            d: sunPath,
                            fillOpacity: 0,
                            strokeOpacity: 0
                        }}
                        animate={
                            theme === "dark" ? moonAnimation : sunAnimation
                        }
                    />
                </m.svg>
            </LazyMotion>
        </button>
    );
}
