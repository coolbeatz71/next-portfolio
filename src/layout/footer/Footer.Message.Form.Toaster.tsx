import { Toaster } from "react-hot-toast";
import { toastOptions } from "./hooks/useFooterMessageForm";

/**
 * Footer message form toaster component.
 *
 * @component
 *
 * @description
 * Renders the react-hot-toast Toaster with success and error styling
 * configured for the footer contact form.
 *
 * @returns The toaster element
 */
export function FooterMessageFormToaster() {
    return <Toaster toastOptions={toastOptions} />;
}
