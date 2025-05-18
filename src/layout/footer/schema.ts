import * as yup from "yup";

/**
 * Footer contact form validation schema.
 *
 * @description
 * Yup validation schema for the footer message form fields.
 * All fields are required; email must be a valid email address.
 * Error message keys are i18n translation keys resolved at runtime.
 */
export const schema = yup.object().shape({
    name: yup.string().required("validation.required"),
    email: yup
        .string()
        .email("validation.invalid_email")
        .required("validation.required"),
    message: yup.string().required("validation.required")
});
