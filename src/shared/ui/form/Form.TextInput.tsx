import { FormField } from "./Form.Field";
import type { FormTextInputProps } from "./types";

/**
 * Form text input component.
 *
 * @component
 *
 * @description
 * Renders a single-line input form field with a floating label.
 * Thin wrapper around FormField configured with `as="input"`.
 *
 * @param {FormTextInputProps} props - Component props
 * @param {string} props.name - Field name used for registration and error lookup
 * @param {string} props.label - Floating label text shown above the input
 * @param {HTMLInputTypeAttribute} props.type - HTML input type (e.g. "text", "email")
 * @param {string} [props.className] - Additional class names for the input element
 *
 * @returns The form text input element
 */
export function FormTextInput(props: FormTextInputProps) {
    return <FormField as="input" {...props} />;
}
