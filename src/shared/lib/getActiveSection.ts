import { navigationList } from "@/shared/config/navigation";

/**
 * Determines which navigation section is currently active based on scroll position.
 * A section is considered active when its top edge is within 100px of the viewport top.
 *
 * @returns The `href` of the active section (e.g. `"#about"`), or `""` when at the top of the page
 */
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
