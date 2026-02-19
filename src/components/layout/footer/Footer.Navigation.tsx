import { IconLink } from "@/config/Icon";
import { navigationList } from "@/config/Navigation";
import NextLink from "next/link";
import { useTranslation } from "react-i18next";

export function FooterNavigation() {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col gap-2">
            <h3 className="w-full text-2xl font-bold text-slate-700 dark:text-slate-300">
                {t("navigation")}
            </h3>

            <div className="flex flex-col gap-2">
                {navigationList.map((item) => (
                    <NextLink
                        href={item.href}
                        key={item.label}
                        className="text-gray-500 dark:text-gray-400 hover:text-indigo-700 hover:dark:text-indigo-500 hover:underline font-medium"
                    >
                        <span className="flex flex-row justify-start">
                            <IconLink
                                className="mt-1 mr-2 shrink-0"
                                size={16}
                            />
                            {t(item.label)}
                        </span>
                    </NextLink>
                ))}
            </div>
        </div>
    );
}
