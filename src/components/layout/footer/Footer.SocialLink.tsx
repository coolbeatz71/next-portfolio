import { socialLinksList } from "@/config/SocialLink";
import NextLink from "next/link";
import { useTranslation } from "react-i18next";

export function FooterSocialLink(): JSX.Element {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col  items-start gap-2">
            <h3 className="w-full text-2xl font-bold text-slate-700 dark:text-slate-300">
                {t("follow_me")}
            </h3>

            <div className="flex w-full gap-2">
                {socialLinksList.map((social) => (
                    <NextLink
                        href={social.href}
                        key={social.platform}
                        target="_blank"
                    >
                        <button
                            type="button"
                            className={`
                                text-slate-500 dark:text-slate-400 hover:bg-slate-200 hover:dark:bg-slate-600 ${social.hoverColor}
                                focus:outline-none font-medium rounded-lg text-3xl text-center items-center p-[0.685rem] duration-300
                            `}
                        >
                            {social.icon}
                        </button>
                    </NextLink>
                ))}
            </div>
        </div>
    );
}
