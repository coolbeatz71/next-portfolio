import { cn } from "@/helpers/mergeClassName";
import { useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";

export interface FormTextAreaProps {
    name: string;
    label: string;
    rows?: number;
    className?: string;
}

export function FormTextArea({
    label,
    name,
    rows = 4,
    className
}: FormTextAreaProps): JSX.Element {
    const { t } = useTranslation();
    const {
        register,
        formState: { errors }
    } = useFormContext();

    const isError = errors[name];
    const errorMessage = String(errors[name]?.message);

    return (
        <div className="relative">
            <textarea
                rows={rows}
                placeholder=" "
                {...register(name)}
                className={cn(
                    `${isError ? "border-pink-400 focus:ring-pink-300 dark:focus:ring-indigo-800 dark:focus:border-indigo-500" : "border-slate-200 dark:border-slate-500 focus:border-indigo-700 focus:ring-indigo-300 dark:focus:ring-indigo-800 dark:focus:border-indigo-500"} peer block border rounded-lg px-4 pb-2 pt-6 w-full resize-none focus:outline-none focus:ring-4 bg-white dark:bg-slate-600`,
                    className
                )}
            />
            <label
                htmlFor={name}
                className={`${isError ? "text-pink-500" : "text-slate-400 dark:text-slate-100"} absolute left-4 top-4 origin-[0] -translate-y-3 scale-75 duration-150 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-90 peer-focus:-translate-y-3 peer-focus:scale-75 first-letter:uppercase`}
            >
                {label}
            </label>
            {errors[name] && (
                <p className="text-pink-500 text-sm my-1">
                    {t(errorMessage, { label })}
                </p>
            )}
        </div>
    );
}
