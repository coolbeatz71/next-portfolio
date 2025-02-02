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
        <div className="flex flex-col items-center justify-center pb-12">
            <DotBackground className="h-20 z-0" />
            <div className="text-center lg:px-64 z-10">
                <h2 className="mb-4 text-3xl font-bold !leading-relaxed text-slate-700 dark:text-slate-300">
                    {title}
                </h2>
                <p className="text-md md:text-lg text-slate-500 dark:text-slate-400 !leading-relaxed">
                    {subtitle}
                </p>
            </div>
        </div>
    );
}
