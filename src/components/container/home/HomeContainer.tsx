import { Fragment } from "react";

import AboutMe from "@/components/layout/about-me/AboutMe";
import Companies from "@/components/layout/companies/Companies";
import Experiences from "@/components/layout/experiences/Experiences";
import Hero from "@/components/layout/hero/Hero";
import Navigation from "@/components/layout/navigation/Navigation";
import Projects from "@/components/layout/projects/Projects";
import Skills from "@/components/layout/skills/Skills";
import BackgroundBeams from "@/components/shared/background/Beams.Background";
import BackgroundGradient from "@/components/shared/background/Gradient.Background";
import GridBackground from "@/components/shared/background/Grid.Background";

export default function HomeContainer(): JSX.Element {
    return (
        <Fragment>
            <BackgroundBeams />
            <BackgroundGradient />
            <GridBackground className="top-0 h-[38rem]" />
            <Navigation />
            <Hero />
            <Companies />
            <AboutMe />
            <Experiences />
            <Projects />
            <Skills />
        </Fragment>
    );
}
