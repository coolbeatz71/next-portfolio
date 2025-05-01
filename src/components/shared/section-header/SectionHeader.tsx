import DotBackground from "@/components/shared/background/Dot.Background";

export interface SectionHeaderProps {
    title: string;
    subtitle: string;
}
export default function SectionHeader({
    title,
    subtitle
}: SectionHeaderProps): JSX.Element {
    return (
        <div className="flex flex-col items-center justify-center pb-6 md:pb-12">
            <DotBackground className="h-20 z-0" />
            <div className="text-start sm:text-start lg:text-center px-0 lg:px-32 z-10">
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
