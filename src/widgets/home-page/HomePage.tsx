import { Fragment } from "react";
import { AboutMe } from "@/features/about/ui/AboutMe";
import { Companies } from "@/features/companies/ui/Companies";
import { Experiences } from "@/features/experience/ui/Experiences";
import { Hero } from "@/features/hero/ui/Hero";
import { Projects } from "@/features/projects/ui/Projects";
import { Skills } from "@/features/skills/ui/Skills";
import { BackgroundBeams } from "@/shared/ui/background/Beams.Background";
import { BackgroundGradient } from "@/shared/ui/background/Gradient.Background";
import { GridBackground } from "@/shared/ui/background/Grid.Background";
import { DownloadResumeFixedButton } from "@/shared/ui/buttons/DownloadResume.Fixed.Button";
import { Footer } from "@/widgets/footer/Footer";
import { Navigation } from "@/widgets/navigation/Navigation";

export function HomeContainer() {
    return (
        <Fragment>
            <Fragment>
                <div className="hidden md:block">
                    <BackgroundBeams />
                </div>
                <BackgroundGradient />
                <GridBackground className="top-0 h-152" />
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
