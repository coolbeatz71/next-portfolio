import { Head, Html, Main, NextScript } from "next/document";

import { CUSTOM_SCROLLBAR } from "@/config/ThemeStyle";
import { cn } from "@/helpers/mergeClassName";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <meta charSet="UTF-8" key="charset" />
                <meta
                    content="IE=Edge"
                    httpEquiv="X-UA-Compatible"
                    key="http-equiv"
                />
                <meta
                    name="description"
                    content={`Discover the professional journey and achievements of Mutombo Jean-vincent. 
                        Explore his portfolio, projects, and career highlights.
                    `}
                    key="description"
                />

                {/* iOS meta tags & icons */}
                <meta
                    name="mobile-web-app-capable"
                    content="yes"
                    key="mobile-web-app-capable"
                />
                <meta
                    name="apple-mobile-web-app-status-bar-style"
                    content="black"
                    key="status-bar-style"
                />
                <meta
                    name="apple-mobile-web-app-title"
                    content="meet"
                    key="mobile-web-app-title"
                />
                <link
                    rel="apple-touch-icon"
                    href="icons/Icon-192.png"
                    key="apple-touch-icon"
                />
                <link
                    rel="icon"
                    href="favicon.ico"
                    type="image/x-icon"
                    key="favicon"
                />
                <link rel="manifest" href="manifest.json" key="manifest" />
            </Head>

            <body
                className={cn(
                    CUSTOM_SCROLLBAR,
                    "overflow-y-auto overflow-x-hidden"
                )}
            >
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
