import { useTranslation } from "react-i18next";
import { IconEmail, IconLocation, IconPhone } from "@/shared/config/icons";

export function FooterContact() {
    const { t } = useTranslation();
    return (
        <div className="flex flex-col items-start gap-2">
            <h3 className="w-full text-2xl font-bold text-slate-700 dark:text-slate-300">
                {t("address")}
            </h3>
            <span className="w-full md:w-auto justify-start text-gray-500 dark:text-gray-400 flex items-center gap-2">
                <IconLocation />
                KN 134 Street, Kigali, Rwanda
            </span>

            <a
                target="_blank"
                rel="noopener noreferrer"
                href="mailto:jeanvincent.mutombo@gmail.com"
                className="hover:font-medium w-full md:w-auto "
            >
                <span className="hover:underline text-gray-500 dark:text-gray-400 hover:text-indigo-700 hover:dark:text-indigo-500 flex justify-start items-center gap-2">
                    <IconEmail />
                    jeanvincent.mutombo@gmail.com
                </span>
            </a>
            <a
                href="tel:(+250) 078 071 2761"
                rel="noopener noreferrer"
                className="hover:font-medium w-full md:w-auto"
            >
                <span className="hover:underline text-gray-500 dark:text-gray-400 hover:text-indigo-700 hover:dark:text-indigo-500 flex justify-start items-center gap-2">
                    <IconPhone />
                    (+250) 78 071 2761
                </span>
            </a>
        </div>
    );
}
