import { navigationList } from "@/config/Navigation";
import NextLink from "next/link";
import { useTranslation } from "react-i18next";
import { CiLink } from "react-icons/ci";

export default function FooterNavigation(): JSX.Element {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col items-start gap-2">
            <h3 className="text-2xl font-bold text-slate-700 dark:text-slate-300">
                {t("navigation")}
            </h3>

            {navigationList.map((item) => (
                <NextLink
                    href={item.href}
                    key={item.label}
                    className="text-gray-500 dark:text-gray-400 hover:text-indigo-700 hover:dark:text-indigo-500 hover:underline font-medium"
                >
                    <span className="flex flex-row">
                        <CiLink className="mt-1 mr-2 flex-shrink-0" size={16} />
                        {t(item.label)}
                    </span>
                </NextLink>
            ))}
        </div>
    );
}
