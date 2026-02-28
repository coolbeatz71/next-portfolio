import type { GetStaticProps } from "next";
import Head from "next/head";
import { Fragment } from "react";
import { Main } from "@/layout/main";
import { personJsonLd } from "@/shared/config/seo.jsonld";

/**
 * Home page.
 *
 * @description
 * Entry point for the portfolio. Statically generated at build time via
 * `getStaticProps`, serving a fully rendered HTML page to crawlers and users
 * alike — no client-side hydration gate needed.
 *
 * @returns The home page element
 */
export default function IndexPage() {
    return (
        <Fragment>
            <Head>
                <title>Meet | Mutombo Jean-Vincent</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <script
                    type="application/ld+json"
                    // biome-ignore lint/security/noDangerouslySetInnerHtml: controlled static JSON-LD
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
                />
            </Head>

            <Main />
        </Fragment>
    );
}

export const getStaticProps: GetStaticProps = () => {
    return { props: {} };
};
