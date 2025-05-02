import { HoverableCard } from "@/components/shared/cards/hoverable-card/Hoverable.Card";
import { cn } from "@/helpers/mergeClassName";
import { useState } from "react";

export interface CompaniesGridProps {
    items: {
        title: string;
        icon: string;
    }[];
    className?: string;
}
export function CompaniesGrid({
    items,
    className
}: CompaniesGridProps): JSX.Element {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div className={cn("grid grid-cols-2 lg:grid-cols-3 gap-4", className)}>
            {items.map((item, i) => (
                <HoverableCard
                    key={item.title}
                    title={item.title}
                    icon={item.icon}
                    currentIndex={i}
                    hoveredIndex={hoveredIndex}
                    onMouseEnter={() => setHoveredIndex(i)}
                    onMouseLeave={() => setHoveredIndex(null)}
                />
            ))}
        </div>
    );
}
