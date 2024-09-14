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
                hero_shape: "url('/hero/shape.svg')",
                hero_shape_dark: "url('/hero/shape-dark.svg')",
                hero_shape_light: "url('/hero/shape-light.svg')",
                pattern_dark: "url('/background/bg-pattern-dark.svg')",
                pattern_light: "url('/background/bg-pattern-dark.svg')",
                icon_react: "url('/dev-tools/react.svg')",
                icon_vue: "url('/dev-tools/vue.svg')",
                icon_node: "url('/dev-tools/node.svg')",
                icon_angular: "url('/dev-tools/angular.svg')",
                icon_flutter: "url('/dev-tools/flutter.svg')",
                icon_laravel: "url('/dev-tools/laravel.svg')"
            }
        }
    },
    plugins: []
};
export default config;
