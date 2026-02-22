import { cn } from "@/shared/lib/cn";
import { HoverableCard } from "@/shared/ui/cards/hoverable/Hoverable.Card";
import type { CompaniesGridProps } from "./types";

/**
 * Companies logo grid component.
 *
 * @component
 *
 * @description
 * Renders a responsive grid of company logos as hoverable cards. Each card shows
 * an animated background highlight on hover using a shared layoutId for smooth
 * cross-card transitions.
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
            {items.map((item) => (
                <div key={item.title} className="group relative">
                    <span className="absolute inset-0 block h-full w-full rounded-lg bg-surface-hover opacity-0 transition-opacity duration-slow group-hover:opacity-100" />
                    <HoverableCard title={item.title} icon={item.icon} />
                </div>
            ))}
        </div>
    );
}
