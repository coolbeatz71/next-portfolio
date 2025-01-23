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
            </Head>

            {isClient && <HomeContainer />}
        </Fragment>
    );
};

export default IndexPage;
