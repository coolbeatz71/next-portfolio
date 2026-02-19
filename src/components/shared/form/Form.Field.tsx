import { cn } from "@/helpers/mergeClassName";
import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";
import {
    BASE_INPUT_CLASSNAME,
    BASE_LABEL_CLASSNAME,
    ERROR_CLASSNAME,
    ERROR_INPUT_CLASSNAME,
    NORMAL_INPUT_CLASSNAME,
    NORMAL_LABEL_CLASSNAME
} from "./style";

type FormFieldProps = {
    name: string;
    label: string;
    className?: string;
    as?: "input" | "textarea";
} & (
    | ({ as?: "input" } & InputHTMLAttributes<HTMLInputElement>)
    | ({ as: "textarea" } & TextareaHTMLAttributes<HTMLTextAreaElement>)
);

export function FormField({
    name,
    label,
    className,
    as = "input",
    ...rest
}: FormFieldProps) {
    const { t } = useTranslation();
    const {
        register,
        formState: { errors }
    } = useFormContext();

    const isError = !!errors[name];
    const errorMessage = String(errors[name]?.message);

    const commonProps = {
        placeholder: " ",
        ...register(name),
        className: cn(
            isError ? ERROR_INPUT_CLASSNAME : NORMAL_INPUT_CLASSNAME,
            BASE_INPUT_CLASSNAME,
            className
        ),
        ...rest
    };

    const textAreaProps =
        commonProps as TextareaHTMLAttributes<HTMLTextAreaElement>;
    const inputProps = commonProps as InputHTMLAttributes<HTMLInputElement>;

    return (
        <div className="relative">
            {as === "textarea" ? (
                <textarea {...textAreaProps} />
            ) : (
                <input {...inputProps} />
            )}
            <label
                htmlFor={name}
                className={cn(
                    isError ? ERROR_CLASSNAME : NORMAL_LABEL_CLASSNAME,
                    BASE_LABEL_CLASSNAME
                )}
            >
                {label}
            </label>
            {isError && (
                <p className={`${ERROR_CLASSNAME} text-sm my-1`}>
                    {t(errorMessage, { label })}
                </p>
            )}
        </div>
    );
}
