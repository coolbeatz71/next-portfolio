import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { HoverableCard } from "@/components/shared/cards/hoverable-card/Hoverable.Card";
import { cn } from "@/helpers/mergeClassName";

export interface CompaniesGridProps {
    items: {
        title: string;
        icon: string;
    }[];
    className?: string;
}
export function CompaniesGrid({ items, className }: CompaniesGridProps) {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div className={cn("grid grid-cols-2 gap-4 lg:grid-cols-3", className)}>
            {items.map((item, i) => (
                <div
                    key={item.title}
                    className="relative"
                    onMouseEnter={() => setHoveredIndex(i)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <AnimatePresence>
                        {hoveredIndex === i && (
                            <motion.span
                                className="absolute inset-0 block h-full w-full rounded-lg bg-slate-300 dark:bg-slate-700"
                                layoutId="hoverBackground"
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: 1,
                                    transition: { duration: 0.15 }
                                }}
                                exit={{
                                    opacity: 0,
                                    transition: { duration: 0.15, delay: 0.15 }
                                }}
                            />
                        )}
                    </AnimatePresence>
                    <HoverableCard title={item.title} icon={item.icon} />
                </div>
            ))}
        </div>
    );
}
