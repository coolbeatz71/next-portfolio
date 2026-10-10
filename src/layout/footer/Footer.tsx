import { RESPONSIVE_CLASSNAME } from "@/shared/config/style";
import { cn } from "@/shared/lib/cn";
import { Reveal } from "@/shared/ui/scroll-reveal/Reveal";
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
 * links, and social links on the left; a message form on the right. Each block reveals
 * itself as it scrolls into view, and a copyright bar closes the footer.
 *
 * @returns The footer element
 */
export function Footer() {
    return (
        <footer id="contact" className="bg-surface-footer relative scroll-mt-24">
            <div className={cn(RESPONSIVE_CLASSNAME, "relative bottom-0")}>
                <div className="grid grid-cols-1 lg:grid-cols-2 items-start py-12 lg:py-24 xl:py-26 2xl:py-40 gap-6 lg:gap-12">
                    <div className="flex flex-col gap-8 pb-6 lg:pb-0 border-b lg:border-b-0 lg:border-r border-outlined">
                        <Reveal>
                            <FooterContact />
                        </Reveal>
                        <Reveal index={1}>
                            <FooterNavigation />
                        </Reveal>
                        <Reveal index={2}>
                            <FooterSocialLink />
                        </Reveal>
                    </div>

                    <Reveal index={1} className="flex flex-col items-start">
                        <FooterMessageForm />
                    </Reveal>
                </div>
            </div>
            <div className="bg-surface-bar w-full py-4 relative bottom-0">
                <Reveal>
                    <FooterCopyright />
                </Reveal>
            </div>
        </footer>
    );
}
