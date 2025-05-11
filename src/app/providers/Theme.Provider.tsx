import { ThemeProvider as NextThemeProvider } from "next-themes";
import type { ReactNode } from "react";

interface ThemeProviderProps {
    children: ReactNode;
}

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
