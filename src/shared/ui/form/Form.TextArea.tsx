import { FormField } from "./Form.Field";
import type { FormTextAreaProps } from "./types";

/**
 * Form textarea component.
 *
 * @component
 *
 * @description
 * Renders a multi-line textarea form field with a floating label.
 * Thin wrapper around FormField configured with `as="textarea"`.
 *
 * @param {FormTextAreaProps} props - Component props
 * @param {string} props.name - Field name used for registration and error lookup
 * @param {string} props.label - Floating label text shown above the textarea
 * @param {number} [props.rows] - Number of visible text rows; defaults to 4
 * @param {string} [props.className] - Additional class names for the textarea element
 *
 * @returns The form textarea element
 */
export function FormTextArea({ rows = 4, ...props }: FormTextAreaProps) {
    return <FormField as="textarea" rows={rows} {...props} />;
}
