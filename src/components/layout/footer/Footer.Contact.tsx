import { useTranslation } from "react-i18next";
import { FaPhoneSquare } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function FooterContact(): JSX.Element {
    const { t } = useTranslation();
    return (
        <div className="flex flex-col items-start gap-2">
            <h3 className="text-xl font-bold text-slate-700 dark:text-slate-300">
                {t("address")}
            </h3>
            <span className="text-gray-500 dark:text-gray-400 flex justify-between items-center gap-2">
                <FaLocationDot />
                KN 134 Street, Kigali, Rwanda
            </span>

            <a
                target="_blank"
                rel="noopener noreferrer"
                href="mailto:jeanvincent.mutombo@gmail.com"
                className="hover:underline hover:font-medium"
            >
                <span className="text-gray-500 dark:text-gray-400 hover:text-indigo-700 hover:dark:text-indigo-500 flex justify-between items-center gap-2">
                    <MdEmail />
                    jeanvincent.mutombo@gmail.com
                </span>
            </a>
            <a
                href="tel:(+250) 078 071 2761"
                rel="noopener noreferrer"
                className="hover:underline hover:font-medium"
            >
                <span className="text-gray-500 dark:text-gray-400 hover:text-indigo-700 hover:dark:text-indigo-500 flex justify-between items-center gap-2">
                    <FaPhoneSquare />
                    (+250) 78 071 2761
                </span>
            </a>
        </div>
    );
}
