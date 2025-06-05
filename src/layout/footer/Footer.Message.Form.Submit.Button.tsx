import { useTranslation } from "react-i18next";
import { SpinnerIcon } from "@/shared/ui/icon/Spinner.Icon";
import type { FooterMessageFormSubmitButtonProps } from "./types";

/**
 * Message form submit button component.
 *
 * @component
 *
 * @description
 * Renders the submit button for the contact form. Shows a spinner and disables
 * the button while the form submission is in progress.
 *
 * @param {FooterMessageFormSubmitButtonProps} props - Component props
 * @param {boolean} props.isLoading - Whether the form submission is in progress
 *
 * @returns The form submit button element
 */
export function FooterMessageFormSubmitButton({
    isLoading
}: FooterMessageFormSubmitButtonProps) {
    const { t } = useTranslation();

    return (
        <button
            type="submit"
            disabled={isLoading}
            className={`
                disabled:cursor-not-allowed disabled:bg-surface-hover w-full md:w-44
                focus:outline-none text-text-on-primary bg-primary-fill hover:bg-primary-deep focus:ring-4
                focus:ring-ring-primary font-medium rounded-lg
                text-sm p-3 lg:p-4
            `}
        >
            {isLoading && <SpinnerIcon />}
            {t("send_message")}
        </button>
    );
}
