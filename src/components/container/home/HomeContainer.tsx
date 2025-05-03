import { AboutMe } from "@/components/layout/about-me/AboutMe";
import { Companies } from "@/components/layout/companies/Companies";
import { Experiences } from "@/components/layout/experiences/Experiences";
import { DownloadResumeFixedButton } from "@/components/layout/fixed-buttons/DownloadResume.Fixed.Button";
import { Footer } from "@/components/layout/footer/Footer";
import { Hero } from "@/components/layout/hero/Hero";
import { Navigation } from "@/components/layout/navigation/Navigation";
import { Projects } from "@/components/layout/projects/Projects";
import { Skills } from "@/components/layout/skills/Skills";
import { BackgroundBeams } from "@/components/shared/background/Beams.Background";
import { BackgroundGradient } from "@/components/shared/background/Gradient.Background";
import { GridBackground } from "@/components/shared/background/Grid.Background";

import { Fragment } from "react";

export function HomeContainer(): JSX.Element {
    return (
        <Fragment>
            <Fragment>
                <div className="hidden md:block">
                    <BackgroundBeams />
                </div>
                <BackgroundGradient />
                <GridBackground className="top-0 h-[38rem]" />
            </Fragment>

            <Navigation />
            <Hero />
            <Companies />
            <AboutMe />
            <Experiences />
            <Projects />
            <Skills />

            <DownloadResumeFixedButton />

            <Footer />
        </Fragment>
    );
}
