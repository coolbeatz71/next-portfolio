import { Fragment } from "react";
import { useTranslation } from "react-i18next";

export function FormHeader(): JSX.Element {
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
