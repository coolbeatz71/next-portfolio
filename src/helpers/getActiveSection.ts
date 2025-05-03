import { navigationList } from "@/config/Navigation";

export function getActiveSection(): string {
    const scrollPosition = window.scrollY;

    if (scrollPosition === 0) return "";

    let active = "";
    for (const { href } of navigationList) {
        if (!href.startsWith("#")) continue;

        const section = document.querySelector(href);
        if (section) {
            const { top } = section.getBoundingClientRect();
            if (top <= 100) active = href;
        }
    }
    return active;
}
