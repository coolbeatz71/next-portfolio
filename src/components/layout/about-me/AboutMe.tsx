import AboutMeImages from "@/components/layout/about-me/AboutMe.Images";

interface HighlightProps {
    children: React.ReactNode;
}

function Highlight({ children }: HighlightProps): JSX.Element {
    return (
        <span className="text-slate-700 dark:text-slate-300 font-semibold">
            {" "}
            {children}
        </span>
    );
}

export default function AboutMe(): JSX.Element {
    return (
        <div className="mx-auto max-w-7xl h-xl">
            <div className="grid grid-cols-1 xl:grid-cols-[3fr,3.5fr] gap-12">
                <div className="flex flex-col w-full items-center justify-center">
                    <AboutMeImages />
                </div>
                <div className="xl:flex flex-col relative max-w-3xl">
                    <h2 className="mb-4 text-2xl font-bold !leading-tight md:text-2xl xl:text-3xl text-slate-700 dark:text-slate-300">
                        I build high-performance web and mobile applications,
                        focusing on scalability and user experience
                    </h2>
                    <p className="text-lg text-gray-500 !leading-8">
                        I'm also passionate about open-source work, contributing
                        to projects that advance modern development.
                    </p>
                    <hr className="h-px my-8 border-0 bg-slate-500/[0.2] dark:bg-slate-400/[0.2]" />
                    <h2 className="mb-4 text-xl font-bold !leading-tight md:text-xl xl:text-2xl text-slate-700 dark:text-slate-300">
                        A little bit about myself
                    </h2>

                    <p className="text-gray-500 dark:text-gray-400 !leading-relaxed mb-4">
                        Jean-vincent is an Accomplished Senior Software Engineer
                        with 7+ years of hands-on experience spanning both
                        frontend and backend development. Proficient in
                        <Highlight>JavaScript</Highlight>,
                        <Highlight>HTML/CSS</Highlight>, with advanced expertise
                        in
                        <Highlight>ReactJS</Highlight>,
                        <Highlight>NodeJS</Highlight>,
                        <Highlight>Typescript</Highlight>,
                        <Highlight>Angular</Highlight>,
                        <Highlight>PHP</Highlight>, and
                        <Highlight>Flutter </Highlight>
                        for mobile development. A dedicated problem-solver and
                        continuous learner, committed to driving innovation and
                        delivering exceptional results in every project.
                    </p>

                    <p className="text-gray-500 dark:text-gray-400 !leading-relaxed mb-4">
                        I hold a Bachelor's in Business Information Technology,
                        which equipped me with both technical expertise and
                        strong interpersonal skills. These skills have enabled
                        me to collaborate effectively with cross-functional
                        teams and stakeholders to deliver high-quality software
                        solutions.
                    </p>

                    <p className="text-gray-500 dark:text-gray-400 !leading-relaxed">
                        In my free time, I love creating fun and useful
                        projects, often open sourcing them. I also enjoy
                        reading, gaming, and producing music beats.
                    </p>
                </div>
            </div>
        </div>
    );
}
