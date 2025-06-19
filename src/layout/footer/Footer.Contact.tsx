import { useTranslation } from "react-i18next";
import { IconEmail, IconLocation, IconPhone } from "@/shared/config/icons";

/**
 * Footer contact info component.
 *
 * @component
 *
 * @description
 * Displays the physical address, email, and phone number with clickable links
 * for the email and phone entries.
 *
 * @returns The footer contact info element
 */
export function FooterContact() {
    const { t } = useTranslation();
    return (
        <div className="flex flex-col items-start gap-2">
            <h3 className="w-full text-2xl font-bold text-typography-primary">
                {t("address")}
            </h3>
            <span className="w-full md:w-auto justify-start text-typography-contact flex items-center gap-2">
                <IconLocation />
                KN 134 Street, Kigali, Rwanda
            </span>

            <a
                target="_blank"
                rel="noopener noreferrer"
                href="mailto:jeanvincent.mutombo@gmail.com"
                className="hover:font-medium w-full md:w-auto "
            >
                <span className="hover:underline text-typography-contact hover:text-primary-on-accent hover:text-primary-on-accent flex justify-start items-center gap-2">
                    <IconEmail />
                    jeanvincent.mutombo@gmail.com
                </span>
            </a>
            <a
                href="tel:(+250) 078 071 2761"
                rel="noopener noreferrer"
                className="hover:font-medium w-full md:w-auto"
            >
                <span className="hover:underline text-typography-contact hover:text-primary-on-accent hover:text-primary-on-accent flex justify-start items-center gap-2">
                    <IconPhone />
                    (+250) 78 071 2761
                </span>
            </a>
        </div>
    );
}
