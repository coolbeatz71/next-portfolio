import Companies from "@/components/layout/companies/Companies";
import Hero from "@/components/layout/hero/Hero";
import Navigation from "@/components/layout/navigation/Navigation";
import { Fragment } from "react";

export default function HomeContainer(): JSX.Element {
    return (
        <Fragment>
            <Navigation />
            <Hero />
            <div className="mt-24">
                <Companies />
            </div>
        </Fragment>
    );
}
