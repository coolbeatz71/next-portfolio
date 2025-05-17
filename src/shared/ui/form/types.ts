import type { HTMLInputTypeAttribute } from "react";

/**
 * @interface FormTextInputProps
 * @property {string} name - Field name used for registration and error lookup
 * @property {string} label - Floating label text shown above the input
 * @property {HTMLInputTypeAttribute} type - HTML input type (e.g. "text", "email")
 * @property {string} [className] - Additional class names for the input element
 */
export interface FormTextInputProps {
    name: string;
    label: string;
    type: HTMLInputTypeAttribute;
    className?: string;
}

/**
 * @interface FormTextAreaProps
 * @property {string} name - Field name used for registration and error lookup
 * @property {string} label - Floating label text shown above the textarea
 * @property {number} [rows] - Number of visible text rows; defaults to 4
 * @property {string} [className] - Additional class names for the textarea element
 */
export interface FormTextAreaProps {
    name: string;
    label: string;
    rows?: number;
    className?: string;
}
