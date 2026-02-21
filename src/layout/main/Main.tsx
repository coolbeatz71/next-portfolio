import { Fragment } from "react";
import { AboutMe } from "@/features/about/ui/AboutMe";
import { Companies } from "@/features/companies/ui/Companies";
import { Experiences } from "@/features/experience/ui/Experiences";
import { Hero } from "@/features/hero/ui/Hero";
import { Projects } from "@/features/projects/ui/Projects";
import { Skills } from "@/features/skills/ui/Skills";
import { Footer } from "@/layout/footer/Footer";
import { Navigation } from "@/layout/navigation/Navigation";
import { BackgroundBeams } from "@/shared/ui/background/Beams.Background";
import { BackgroundGradient } from "@/shared/ui/background/Gradient.Background";
import { GridBackground } from "@/shared/ui/background/Grid.Background";
import { DownloadResumeFixedButton } from "@/shared/ui/buttons/DownloadResume.Fixed.Button";

/**
 * Main page container component.
 *
 * @component
 *
 * @description
 * Composes the full portfolio page by assembling all feature sections and widgets
 * in order: background layers, navigation, hero, companies, about, experience,
 * projects, skills, a fixed resume download button, and the footer.
 *
 * @returns The main page container element
 */
export function Main() {
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
