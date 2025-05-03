import { cn } from "@/helpers/mergeClassName";
import { DotBackground } from "../background/Dot.Background";

export interface SectionHeaderProps {
    title: string;
    subtitle: string;
    className?: string;
}

export function SectionHeader({
    title,
    subtitle,
    className
}: SectionHeaderProps): JSX.Element {
    return (
        <div className="flex flex-col items-center justify-center pb-6 md:pb-12">
            <DotBackground className="h-20 z-0" />
            <div
                className={cn(
                    "text-start sm:text-start lg:text-center lg:px-32 px-0 z-10",
                    className
                )}
            >
                <h2 className="mb-4 text-3xl xl:text-4xl font-bold !leading-relaxed text-stone-700 dark:text-stone-200">
                    {title}
                </h2>
                <p className="text-md sm:text-lg md:text-xl lg:text-xl text-neutral-500 dark:text-neutral-400 !leading-relaxed">
                    {subtitle}
                </p>
            </div>
        </div>
    );
}
