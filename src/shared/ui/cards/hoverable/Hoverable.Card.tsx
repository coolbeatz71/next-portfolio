import { cn } from "@/shared/lib/cn";

export interface HoverableCardProps {
    icon: string;
    title: string;
}

export function HoverableCard({ icon }: HoverableCardProps) {
    return (
        <div className="relative group block p-3 md:p-2 lg:p-3.5 h-20 w-full border border-slate-300 dark:border-slate-700 rounded-lg cursor-pointer">
            <div
                className={cn(
                    "rounded-lg h-full w-full p-4 overflow-hidden border border-transparent relative z-20 opacity-70 filter grayscale dark:brightness-900 bg-no-repeat bg-contain bg-center group-hover:opacity-100 group-hover:filter-none",
                    icon
                )}
            />
        </div>
    );
}
