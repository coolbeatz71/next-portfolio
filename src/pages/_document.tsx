import { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";
import { SITE_DESCRIPTION, SITE_URL } from "@/shared/config/seo";
import { CUSTOM_SCROLLBAR } from "@/shared/config/style";
import { cn } from "@/shared/lib/cn";
import { OpenGraphTags } from "@/shared/ui/seo/OpenGraph.Tags";
import { TwitterCardTags } from "@/shared/ui/seo/TwitterCard.Tags";

/**
 * Custom Next.js Document component.
 *
 * @description
 * Defines the HTML shell for all pages: sets charset, IE compatibility, SEO
 * description, iOS PWA meta tags, favicon, manifest, and applies the custom
 * scrollbar class to the body.
 *
 * @returns The HTML document shell
 */
export default function Document() {
    return (
        <Html lang="en" suppressHydrationWarning>
            <Head>
                {process.env.NODE_ENV === "development" && (
                    <Script
                        src="//unpkg.com/react-scan/dist/auto.global.js"
                        crossOrigin="anonymous"
                        strategy="beforeInteractive"
                    />
                )}
                <meta charSet="UTF-8" key="charset" />
                <meta content="IE=Edge" httpEquiv="X-UA-Compatible" key="http-equiv" />

                {/* Primary SEO */}
                <meta name="description" content={SITE_DESCRIPTION} key="description" />
                <meta name="author" content="Mutombo Jean-Vincent" key="author" />
                <link rel="canonical" href={SITE_URL} key="canonical" />

                {/* hreflang — bilingual EN/FR */}
                <link rel="alternate" hrefLang="en" href={SITE_URL} key="hreflang-en" />
                <link rel="alternate" hrefLang="fr" href={SITE_URL} key="hreflang-fr" />
                <link rel="alternate" hrefLang="x-default" href={SITE_URL} key="hreflang-default" />

                <OpenGraphTags />
                <TwitterCardTags />

                {/* iOS meta tags & icons */}
                <meta name="mobile-web-app-capable" content="yes" key="mobile-web-app-capable" />
                <meta name="apple-mobile-web-app-status-bar-style" content="black" key="status-bar-style" />
                <meta name="apple-mobile-web-app-title" content="meet" key="mobile-web-app-title" />
                <link rel="apple-touch-icon" href="icons/Icon-192.png" key="apple-touch-icon" />
                <link rel="icon" href="favicon.ico" type="image/x-icon" key="favicon" />
                <link rel="manifest" href="manifest.json" key="manifest" />
            </Head>

            <body className={cn(CUSTOM_SCROLLBAR, "overflow-y-auto overflow-x-hidden")}>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
