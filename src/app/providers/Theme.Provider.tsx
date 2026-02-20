import { ThemeProvider as NextThemeProvider } from "next-themes";
import type { ReactNode } from "react";

/**
 * @interface ThemeProviderProps
 * @property {ReactNode} children - Child elements to render inside the provider
 */
interface ThemeProviderProps {
    children: ReactNode;
}

/**
 * Theme provider component.
 *
 * @component
 *
 * @description
 * Wraps the application with `next-themes` ThemeProvider, enabling system-preference
 * detection and `light` / `dark` class-based theme switching with `light` as the default.
 *
 * @param {ThemeProviderProps} props - Component props
 * @param {ReactNode} props.children - Child elements to render inside the provider
 *
 * @returns The theme-enabled children element
 */
export function ThemeProvider({ children }: ThemeProviderProps) {
    return (
        <NextThemeProvider
            enableSystem
            attribute="class"
            defaultTheme="light"
            themes={["light", "dark"]}
        >
            {children}
        </NextThemeProvider>
    );
}
