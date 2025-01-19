import { cn } from "@/helpers/mergeClassName";
import type { HTMLInputTypeAttribute } from "react";
import { useFormContext } from "react-hook-form";

export interface FormTextInputProps {
    id: string;
    label: string;
    type: HTMLInputTypeAttribute;
    className?: string;
}

export function FormTextInput({
    id,
    type,
    label,
    className
}: FormTextInputProps): JSX.Element {
    const {
        register,
        formState: { errors }
    } = useFormContext();

    const isError = errors[id];

    return (
        <div className="relative">
            <input
                id={id}
                type={type}
                placeholder=""
                {...register(id)}
                className={cn(
                    `${isError ? "border-red-400 focus:ring-red-300 dark:focus:ring-indigo-800 dark:focus:border-indigo-500" : "border-zinc-300 dark:border-zinc-400 focus:border-indigo-700 focus:ring-indigo-300 dark:focus:ring-indigo-800 dark:focus:border-indigo-500"} peer block border  rounded px-4 pb-2 pt-6 w-full resize-none focus:outline-none focus:ring-4 bg-white dark:bg-slate-600`,
                    className
                )}
            />
            <label
                htmlFor="email"
                className="text-slate-400 dark:text-slate-100 absolute left-4 top-4 origin-[0] -translate-y-3 scale-75 duration-150 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-90 peer-focus:-translate-y-3 peer-focus:scale-75"
            >
                {label}
            </label>
            {errors[id] && (
                <p className="text-red-500 text-sm mt-1 first-letter:uppercase">
                    {String(errors[id]?.message)}
                </p>
            )}
        </div>
    );
}
