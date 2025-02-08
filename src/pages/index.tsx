import HomeContainer from "@/components/container/home/HomeContainer";
import Head from "next/head";
import { Fragment, useEffect, useState } from "react";

const IndexPage = (): JSX.Element => {
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

            {isClient && <HomeContainer />}
        </Fragment>
    );
};

export default IndexPage;
