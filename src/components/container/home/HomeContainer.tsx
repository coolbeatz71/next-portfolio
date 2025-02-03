import Hero from "@/components/layout/hero/Hero";
import Navigation from "@/components/layout/navigation/Navigation";
import BackgroundBeams from "@/components/shared/background/Beams.Background";
import BackgroundGradient from "@/components/shared/background/Gradient.Background";
import GridBackground from "@/components/shared/background/Grid.Background";
import { Fragment } from "react";

export default function HomeContainer(): JSX.Element {
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
            {/* 
            <Companies />
            <AboutMe />

            <Experiences />
            <Projects />
            <Skills />

            <DownloadResumeFixedButton />

            <Footer /> */}
        </Fragment>
    );
}
