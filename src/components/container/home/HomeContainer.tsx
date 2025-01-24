import Navigation from "@/components/layout/navigation/Navigation";
import { Fragment } from "react";

export default function HomeContainer(): JSX.Element {
    return (
        <Fragment>
            {/* <Fragment>
                <BackgroundBeams />
                <BackgroundGradient />
                <GridBackground className="top-0 h-[38rem]" />
            </Fragment> */}

            <Navigation />
            {/* <Hero />
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
