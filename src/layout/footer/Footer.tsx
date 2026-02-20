import { RESPONSIVE_CLASSNAME } from "@/shared/config/style";
import { cn } from "@/shared/lib/cn";
import { ScrollReveal } from "@/shared/ui/scroll-reveal/ScrollReveal";
import { FooterContact } from "./Footer.Contact";
import { FooterCopyright } from "./Footer.Copyright";
import { FooterMessageForm } from "./Footer.Message.Form";
import { FooterNavigation } from "./Footer.Navigation";
import { FooterSocialLink } from "./Footer.SocialLink";

/**
 * Footer widget.
 *
 * @component
 *
 * @description
 * Renders the full-width site footer with a two-column layout: contact info, navigation
 * links, and social links on the left; a message form on the right. Includes a copyright
 * bar at the bottom, wrapped in a scroll reveal animation.
 *
 * @returns The footer element
 */
export function Footer() {
    return (
        <footer
            id="contact"
            className="bg-slate-100 dark:bg-slate-700 relative scroll-mt-24"
        >
            <div className={cn(RESPONSIVE_CLASSNAME, "relative bottom-0")}>
                <ScrollReveal className="delay-300">
                    <div className="grid grid-cols-1 lg:grid-cols-2 items-start py-12 lg:py-24 xl:py-26 2xl:py-40 gap-6 md:gap-6 lg:gap-12">
                        <div className="flex flex-col gap-8 pb-6 lg:pb-0 border-b lg:border-b-0 lg:border-r border-slate-200 dark:border-slate-600">
                            <FooterContact />
                            <FooterNavigation />
                            <FooterSocialLink />
                        </div>

                        <div className="flex flex-col items-start">
                            <FooterMessageForm />
                        </div>
                    </div>
                </ScrollReveal>
            </div>
            <div className="bg-white dark:bg-slate-800 w-full py-4 relative bottom-0">
                <FooterCopyright />
            </div>
        </footer>
    );
}
