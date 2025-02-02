export interface BadgeSpanProps {
    text: string;
}

export default function BadgeSpan({ text }: BadgeSpanProps): JSX.Element {
    return (
        <span className="cursor-pointer bg-indigo-100 text-indigo-800 dark:bg-gray-700 dark:text-indigo-400 border border-indigo-400 text-[8pt] font-semibold px-2.5 py-0.5 rounded-lg transition-colors duration-100">
            {text}
        </span>
    );
}
