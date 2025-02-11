import { ScrollReveal } from "@/components/shared/scroll-reveal/ScrollReveal";
import { RESPONSIVE_CLASSNAME } from "@/config/ThemeStyle";
import { cn } from "@/helpers/mergeClassName";
import FooterContact from "./Footer.Contact";
import FooterCopyright from "./Footer.Copyright";
import FooterMessageForm from "./Footer.Message.Form";
import FooterNavigation from "./Footer.Navigation";
import FooterSocialLink from "./Footer.SocialLink";

export default function Footer(): JSX.Element {
    return (
        <footer
            id="contact"
            className="bg-slate-100 dark:bg-slate-700 relative scroll-mt-24"
        >
            <div className={cn(RESPONSIVE_CLASSNAME, "relative bottom-0")}>
                <ScrollReveal>
                    <div className="grid grid-cols-1 lg:grid-cols-2 items-start py-12 lg:py-24 gap-6 md:gap-6 lg:gap-12">
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
