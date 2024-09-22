import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
    darkMode: ["selector"],
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['"Montserrat"', ...fontFamily.sans]
            },
            backgroundImage: {
                // PATTERNS and SHAPES
                hero_shape: "url('/hero/shape.svg')",
                hero_shape_dark: "url('/hero/shape-dark.svg')",
                hero_shape_light: "url('/hero/shape-light.svg')",
                pattern_dark: "url('/background/bg-pattern-dark.svg')",
                pattern_light: "url('/background/bg-pattern-dark.svg')",
                // DEV TOOLS
                icon_react: "url('/dev-tools/react.svg')",
                icon_vue: "url('/dev-tools/vue.svg')",
                icon_node: "url('/dev-tools/node.svg')",
                icon_angular: "url('/dev-tools/angular.svg')",
                icon_flutter: "url('/dev-tools/flutter.svg')",
                icon_laravel: "url('/dev-tools/laravel.svg')",
                // COMPANIES
                // LIGHT
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
                // DARK
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
    plugins: []
};
export default config;
