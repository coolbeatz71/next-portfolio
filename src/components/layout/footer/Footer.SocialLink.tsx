import { socialLinksList } from "@/config/SocialLink";
import NextLink from "next/link";
import { useTranslation } from "react-i18next";

export default function FooterSocialLink(): JSX.Element {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col justify-center md:justify-start items-start gap-2">
            <h3 className="text-center w-full md:text-start text-2xl font-bold text-slate-700 dark:text-slate-300">
                {t("follow_me")}
            </h3>

            <div className="flex text-center justify-center w-full px-12 sm:px-0 sm:w-72 gap-2">
                {socialLinksList.map((social) => (
                    <NextLink
                        href={social.href}
                        key={social.platform}
                        target="_blank"
                    >
                        <button
                            type="button"
                            className={`text-slate-500 dark:text-slate-400 hover:bg-slate-200 hover:dark:bg-slate-600 ${social.hoverColor} focus:outline-none font-medium rounded-lg text-3xl text-center items-center p-[0.685rem]`}
                        >
                            {social.icon}
                        </button>
                    </NextLink>
                ))}
            </div>
        </div>
    );
}
