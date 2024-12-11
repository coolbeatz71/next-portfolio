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
            <div className="text-center lg:px-64">
                <h2 className="mb-4 text-2xl font-bold !leading-tight md:text-2xl xl:text-3xl text-slate-700 dark:text-slate-300">
                    {title}
                </h2>
                <p className="text-lg font-light text-gray-500 dark:text-gray-400 !leading-8">
                    {subtitle}
                </p>
            </div>
        </div>
    );
}
