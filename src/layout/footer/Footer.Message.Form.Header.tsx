import { Fragment } from "react";
import { useTranslation } from "react-i18next";

/**
 * Message form header component.
 *
 * @component
 *
 * @description
 * Renders the heading and subtitle for the footer contact form, inviting
 * visitors to get in touch.
 *
 * @returns The message form header element
 */
export function FooterMessageFormHeader() {
    const { t } = useTranslation();

    return (
        <Fragment>
            <h3 className="w-full text-2xl font-bold text-typography-primary">
                {t("lets_connect")} ✨
            </h3>
            <p className="w-full font-medium text-typography-contact">
                {t("lets_connect_description")}
            </p>
        </Fragment>
    );
}
