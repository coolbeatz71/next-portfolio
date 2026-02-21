import Head from "next/head";
import { Fragment, useEffect, useState } from "react";
import { Main } from "@/layout/main";

/**
 * Home page.
 *
 * @description
 * Entry point for the portfolio. Defers rendering of the main content to the
 * client side (`isClient` flag) to avoid SSR hydration mismatches, then mounts
 * the `Main` which composes all sections and widgets.
 *
 * @returns The home page element
 */
export default function IndexPage() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <Fragment>
            <Head>
                <title>Meet | Mutombo Jean-vincent</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
            </Head>

            {isClient && <Main />}
        </Fragment>
    );
}
