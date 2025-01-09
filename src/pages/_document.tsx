import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head />
            <meta charSet="UTF-8" />
            <meta content="IE=Edge" http-equiv="X-UA-Compatible" />
            <meta name="description" content="Meet Mutombo Jean-vincent" />

            {/* iOS meta tags & icons */}
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta
                name="apple-mobile-web-app-status-bar-style"
                content="black"
            />
            <meta name="apple-mobile-web-app-title" content="meet" />
            <link rel="apple-touch-icon" href="icons/Icon-192.png" />
            <link rel="icon" href="favicon.ico" type="image/x-icon" />

            <title>Meet | Mutombo Jean-vincent</title>
            <link rel="manifest" href="manifest.json" />
            <body className="scrollbar  overflow-y-scroll">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
