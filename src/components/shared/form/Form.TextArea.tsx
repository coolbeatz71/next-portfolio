import { cn } from "../../../helpers/mergeClassName";

export interface FormTextAreaProps {
    id: string;
    label: string;
    rows?: number;
    className?: string;
}

export function FormTextArea({
    id,
    label,
    rows = 4,
    className
}: FormTextAreaProps): JSX.Element {
    return (
        <div className="relative">
            <textarea
                id={id}
                rows={rows}
                placeholder=""
                className={cn(
                    "peer block border border-zinc-300 dark:border-zinc-400 rounded px-4 pb-2 pt-6 w-full resize-none focus:outline-none focus:ring-4 focus:border-indigo-700 dark:focus:border-indigo-300 bg-white dark:bg-slate-600",
                    className
                )}
            />
            <label
                htmlFor={id}
                className="text-slate-400 dark:text-slate-100 absolute left-4 top-4 origin-[0] -translate-y-3 scale-75 duration-150 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-90 peer-focus:-translate-y-3 peer-focus:scale-75"
            >
                {label}
            </label>
        </div>
    );
}
