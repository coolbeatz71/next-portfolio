import dynamic from "next/dynamic";
import { Fragment } from "react";
import { Hero } from "@/features/hero/ui/Hero";
import { Navigation } from "@/layout/navigation/Navigation";
import { BackgroundGradient } from "@/shared/ui/background/Gradient.Background";
import { GridBackground } from "@/shared/ui/background/Grid.Background";

const BackgroundBeams = dynamic(
    async () => {
        const mod = await import(
            /* webpackChunkName: "BackgroundBeams" */
            "@/shared/ui/background/Beams.Background"
        );
        return mod.BackgroundBeams;
    },
    { ssr: false }
);

const Companies = dynamic(async () => {
    const mod = await import(
        /* webpackChunkName: "Companies" */
        "@/features/companies/ui/Companies"
    );
    return mod.Companies;
});

const AboutMe = dynamic(async () => {
    const mod = await import(
        /* webpackChunkName: "AboutMe" */
        "@/features/about/ui/AboutMe"
    );
    return mod.AboutMe;
});

const Experiences = dynamic(async () => {
    const mod = await import(
        /* webpackChunkName: "Experiences" */
        "@/features/experience/ui/Experiences"
    );
    return mod.Experiences;
});

const Projects = dynamic(async () => {
    const mod = await import(
        /* webpackChunkName: "Projects" */
        "@/features/projects/ui/Projects"
    );
    return mod.Projects;
});

const Skills = dynamic(async () => {
    const mod = await import(
        /* webpackChunkName: "Skills" */
        "@/features/skills/ui/Skills"
    );
    return mod.Skills;
});

const Footer = dynamic(async () => {
    const mod = await import(
        /* webpackChunkName: "Footer" */
        "@/layout/footer/Footer"
    );
    return mod.Footer;
});

const DownloadResumeFixedButton = dynamic(
    async () => {
        const mod = await import(
            /* webpackChunkName: "DownloadResumeFixedButton" */
            "@/shared/ui/buttons/DownloadResume.Fixed.Button"
        );
        return mod.DownloadResumeFixedButton;
    },
    { ssr: false }
);

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
