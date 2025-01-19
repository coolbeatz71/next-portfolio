import type { HTMLInputTypeAttribute } from "react";

export interface FormTextInputProps {
    id: string;
    label: string;
    type: HTMLInputTypeAttribute;
}

export function FormTextInput({
    id,
    type,
    label
}: FormTextInputProps): JSX.Element {
    return (
        <div className="relative">
            <input
                id={id}
                type={type}
                placeholder=""
                className="peer block border border-zinc-300 dark:border-zinc-400 rounded px-4 pb-2 pt-6 w-full focus:outline-none focus:ring-4 focus:border-indigo-700 focus:ring-indigo-300 dark:focus:ring-indigo-800 dark:focus:border-indigo-500 bg-white dark:bg-slate-600"
            />
            <label
                htmlFor="email"
                className="text-slate-400 dark:text-slate-100 absolute left-4 top-4 origin-[0] -translate-y-3 scale-75 duration-150 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-90 peer-focus:-translate-y-3 peer-focus:scale-75"
            >
                {label}
            </label>
        </div>
    );
}
