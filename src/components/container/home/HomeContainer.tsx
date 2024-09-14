import { Fragment } from "react";
import Hero from "@/components/layout/hero/Hero";
import Navigation from "@/components/layout/navigation/Navigation";

export default function HomeContainer(): JSX.Element {
    return (
        <Fragment>
            <Navigation />
            <Hero />
        </Fragment>
    );
}
