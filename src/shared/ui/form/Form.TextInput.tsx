import type { HTMLInputTypeAttribute } from "react";
import { FormField } from "./Form.Field";

export interface FormTextInputProps {
    name: string;
    label: string;
    type: HTMLInputTypeAttribute;
    className?: string;
}

export function FormTextInput(props: FormTextInputProps) {
    return <FormField as="input" {...props} />;
}
