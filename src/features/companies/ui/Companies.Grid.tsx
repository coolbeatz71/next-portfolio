import { cn } from "@/shared/lib/cn";
import { HoverableCard } from "@/shared/ui/cards/hoverable/Hoverable.Card";
import { Reveal } from "@/shared/ui/scroll-reveal/Reveal";
import type { CompaniesGridProps } from "./types";

/**
 * Companies logo grid component.
 *
 * @component
 *
 * @description
 * Renders a responsive grid of company logos as hoverable cards. Each card reveals
 * itself as it scrolls into view and shows a background highlight on hover.
 *
 * @param {CompaniesGridProps} props - Component props
 * @param {{ title: string; icon: string }[]} props.items - Company logo entries to display
 * @param {string} [props.className] - Additional class names for the grid container
 *
 * @returns The companies logo grid element
 */
export function CompaniesGrid({ items, className }: CompaniesGridProps) {
    return (
        <div className={cn("grid grid-cols-2 gap-4 lg:grid-cols-3", className)}>
            {items.map((item, index) => (
                <Reveal key={item.title} index={index} className="group relative">
                    <span className="absolute inset-0 block h-full w-full rounded-lg bg-surface-hover opacity-0 transition-opacity duration-slow group-hover:opacity-100" />
                    <HoverableCard title={item.title} icon={item.icon} />
                </Reveal>
            ))}
        </div>
    );
}
