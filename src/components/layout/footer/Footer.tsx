import Spotlight from "@/components/shared/spotlight/Spotlight";
import FooterContact from "./Footer.Contact";
import FooterCopyright from "./Footer.Copyright";
import FooterMessageForm from "./Footer.Message.Form";
import FooterNavigation from "./Footer.Navigation";
import FooterSocialLink from "./Footer.SocialLink";

export default function Footer(): JSX.Element {
    return (
        <footer className="bg-slate-100 dark:bg-slate-700 relative">
            <div className="mx-auto max-w-7xl relative bottom-0">
                <Spotlight />
                <div className="grid grid-cols-1 xl:grid-cols-2 items-start py-24 gap-12">
                    <div className="flex flex-col gap-8 border-r border-slate-200 dark:border-slate-600">
                        <FooterContact />
                        <FooterNavigation />
                        <FooterSocialLink />
                    </div>

                    <div className="flex flex-col items-start">
                        <FooterMessageForm />
                    </div>
                </div>
            </div>
            <div className="bg-white dark:bg-slate-800 w-full py-4 relative bottom-0">
                <p className="text-sm text-center">
                    <FooterCopyright />
                </p>
            </div>
        </footer>
    );
}
