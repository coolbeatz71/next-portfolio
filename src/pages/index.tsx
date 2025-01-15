import HomeContainer from "@/components/container/home/HomeContainer";
import { useEffect, useState } from "react";

const IndexPage = (): JSX.Element => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return <>{isClient && <HomeContainer />}</>;
};

export default IndexPage;
