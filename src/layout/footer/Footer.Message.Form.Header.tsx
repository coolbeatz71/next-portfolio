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
            <h3 className="w-full text-2xl font-bold text-slate-700 dark:text-slate-300">
                {t("lets_connect")} ✨
            </h3>
            <p className="w-full font-medium text-gray-500 dark:text-gray-400">
                {t("lets_connect_description")}
            </p>
        </Fragment>
    );
}
