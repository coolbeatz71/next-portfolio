import svgToDataUri from "mini-svg-data-uri";
import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";
import type { PluginAPI } from "tailwindcss/types/config";

type StringObjectType = Record<string, string>;

function addVariablesForColors({ addBase, theme }: PluginAPI): void {
    const allColors: StringObjectType = flattenColorPalette(theme("colors"));
    const newVars = Object.fromEntries(
        Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
    );
    addBase({
        ":root": newVars
    });
}

function addBackgroundPatterns({ matchUtilities, theme }: PluginAPI): void {
    matchUtilities(
        {
            "bg-grid": (value: string) => ({
                backgroundImage: `url("${svgToDataUri(
                    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
                )}")`
            }),
            "bg-grid-small": (value: string) => ({
                backgroundImage: `url("${svgToDataUri(
                    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
                )}")`
            }),
            "bg-dot": (value: string) => ({
                backgroundImage: `url("${svgToDataUri(
                    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
                )}")`
            })
        },
        {
            values: flattenColorPalette(theme("backgroundColor")),
            type: "color"
        }
    );
}

const config: Config = {
    darkMode: ["selector"],
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/**/*.{js,ts,jsx,tsx,mdx}"
    ],
    theme: {
        animation: {
            shimmer: "shimmer 2s linear infinite",
            spotlight: "spotlight 2s ease .75s 1 forwards"
        },
        keyframes: {
            shimmer: {
                from: {
                    backgroundPosition: "0 0"
                },
                to: {
                    backgroundPosition: "-200% 0"
                }
            },
            spotlight: {
                "0%": {
                    opacity: "0",
                    transform: "translate(-72%, -62%) scale(0.5)"
                },
                "100%": {
                    opacity: "0.3",
                    transform: "translate(-50%,-40%) scale(1)"
                }
            }
        },
        fontFamily: {
            sans: ['"Montserrat"', ...fontFamily.sans]
        },
        extend: {
            brightness: {
                25: ".25",
                900: "9"
            },
            colors: {
                medium: "#000000",
                medium_dark: "#ffc21e",
                github: "#000000",
                github_dark: "#ffffff",
                linkedin: "#0077B5",
                light: "rgb(226 232 240)",
                dark: "rgb(30 41 59)"
            },
            backgroundImage: {
                pattern_dark: "url('/background/bg-pattern-dark.svg')",
                pattern_light: "url('/background/bg-pattern-light.svg')",
                icon_react: "url('/dev-tools/react.svg')",
                icon_vue: "url('/dev-tools/vue.svg')",
                icon_node: "url('/dev-tools/node.svg')",
                icon_angular: "url('/dev-tools/angular.svg')",
                icon_flutter: "url('/dev-tools/flutter.svg')",
                icon_laravel: "url('/dev-tools/laravel.svg')",
                logo_andela_light: "url('/company-logo/andela_light.png')",
                logo_ezyagric: "url('/company-logo/ezyagric.png')",
                logo_exuus_light: "url('/company-logo/exuus_light.png')",
                logo_codeofafrica_light:
                    "url('/company-logo/codeofafrica_light.png')",
                logo_alfatier_light: "url('/company-logo/alfatier_light.png')",
                logo_reconstruction_light:
                    "url('/company-logo/reconstruction_light.png')",
                logo_theroom_light: "url('/company-logo/theroom_light.png')",
                logo_bestseller_light:
                    "url('/company-logo/bestseller_light.png')",
                logo_andela_dark: "url('/company-logo/andela_dark.png')",
                logo_exuus_dark: "url('/company-logo/exuus_dark.png')",
                logo_codeofafrica_dark:
                    "url('/company-logo/codeofafrica_dark.png')",
                logo_alfatier_dark: "url('/company-logo/alfatier_dark.png')",
                logo_reconstruction_dark:
                    "url('/company-logo/reconstruction_dark.png')",
                logo_theroom_dark: "url('/company-logo/theroom_dark.png')",
                logo_bestseller_dark: "url('/company-logo/bestseller_dark.png')"
            }
        }
    },
    plugins: [addVariablesForColors, addBackgroundPatterns]
};

export default config;
