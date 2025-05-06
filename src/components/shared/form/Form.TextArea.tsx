import { FormField } from "./Form.Field";

export interface FormTextAreaProps {
    name: string;
    label: string;
    rows?: number;
    className?: string;
}

export function FormTextArea({ rows = 4, ...props }: FormTextAreaProps) {
    return <FormField as="textarea" rows={rows} {...props} />;
}
