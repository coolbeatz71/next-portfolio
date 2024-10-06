import AboutMeImages from "@/components/layout/about-me/AboutMe.Images";
import SmoothScroll from "@/components/shared/smooth-scroll/SmoothScroll";

export default function AboutMe(): JSX.Element {
    return (
        <div className="mx-auto max-w-7xl max-h-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 xl:grid-cols-[3fr,2.5fr] py-12 gap-12">
                <div className="flex flex-col w-full items-center justify-center">
                    <SmoothScroll>
                        <AboutMeImages />
                    </SmoothScroll>
                </div>
                <div className="xl:flex flex-col relative max-w-3xl">
                    <h2 className="mb-4 text-2xl font-bold !leading-tight md:text-2xl xl:text-3xl text-white dark:text-black">
                        I build high-performance web and mobile applications,
                        focusing on scalability and user experience
                    </h2>
                    <p className="text-lg font-light text-gray-400 !leading-8">
                        I'm also passionate about open-source work, contributing
                        to projects that advance modern development.
                    </p>
                    <hr className="h-px my-8 bg-gray-200/[0.1] border-0 dark:bg-gray-700/[0.1]" />
                    <h2 className="mb-4 text-xl font-bold !leading-tight md:text-xl xl:text-2xl text-white dark:text-black">
                        A little bit about myself
                    </h2>

                    <p className="text-gray-400 !leading-relaxed mb-4">
                        Jean-vincent is an Accomplished Senior Software Engineer
                        with 7+ years of hands-on experience spanning both
                        frontend and backend development. Proficient in
                        JavaScript, HTML/CSS, with advanced expertise in
                        ReactJS, NodeJS, Typescript, Angular, PHP, and Flutter
                        for mobile development. A dedicated problem-solver and
                        continuous learner, committed to driving innovation and
                        delivering exceptional results in every project.
                    </p>
                    <p className="text-gray-400 !leading-relaxed mb-4">
                        I hold a Bachelor's in Business Information Technology,
                        which equipped me with both technical expertise and
                        strong interpersonal skills. These skills have enabled
                        me to collaborate effectively with cross-functional
                        teams and stakeholders to deliver high-quality software
                        solutions.
                    </p>

                    <p className="text-gray-400 !leading-relaxed">
                        In my free time, I love creating fun and useful
                        projects, often open sourcing them. I also enjoy
                        reading, gaming, and producing music beats.
                    </p>
                </div>
            </div>
        </div>
    );
}
