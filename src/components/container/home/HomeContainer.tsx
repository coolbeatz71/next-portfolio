import { Fragment } from "react";

import AboutMe from "@/components/layout/about-me/AboutMe";
import Companies from "@/components/layout/companies/Companies";
import Experiences from "@/components/layout/experiences/Experiences";
import Hero from "@/components/layout/hero/Hero";
import Navigation from "@/components/layout/navigation/Navigation";
import Projects from "@/components/layout/projects/Projects";
import Skills from "@/components/layout/skills/Skills";

export default function HomeContainer(): JSX.Element {
    return (
        <Fragment>
            <Navigation />
            <Hero />
            <div className="mt-24">
                <Companies />
            </div>
            <AboutMe />
            <Experiences />
            <Projects />
            <Skills />
        </Fragment>
    );
}
