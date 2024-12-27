import ExperienceItem from "@/components/layout/experiences/Experiences.Item";
import { cn } from "@/helpers/mergeClassName";
import type { ReactNode } from "react";

export interface TimelineEntry {
    id: string;
    title: string;
    href?: string;
    location: string;
    subtitle: string;
    content: ReactNode;
}

export const experienceTimeline: (
    headerClassName?: string,
    bodyClassName?: string
) => TimelineEntry[] = (headerClassName, bodyClassName) => {
    const _headerClassName = cn(
        "text-neutral-500 dark:text-neutral-400 italic font-normal !mb-4 !leading-loose",
        headerClassName
    );
    const _bodyClassName = cn(
        "list-disc space-y-2 pl-5 leading-relaxed font-medium text-neutral-500 dark:text-neutral-300",
        bodyClassName
    );

    return [
        {
            id: "senior-software-engineer-1",
            title: "Senior Software Engineer",
            location: "Aarhus, Denmark",
            href: "http://bestseller.com/",
            subtitle: "BESTSELLER A/S - Nov 2023 - Present",
            content: (
                <div>
                    <p className={_headerClassName}>
                        BESTSELLER is an international fashion multi brand
                        company consisting of 20+ individual brands. BESTSELLER
                        sells clothes and accessories for all ages, genders and
                        occasions.
                    </p>
                    <div className="gap-4">
                        <ul className={_bodyClassName}>
                            <ExperienceItem>
                                Developed and maintained Digital Media &
                                Marketing web app, slashing pages load time by
                                30% with React.js, prioritizing UX and
                                accessibility.
                            </ExperienceItem>
                            <ExperienceItem>
                                Implemented daily usage and performance metrics
                                using OpenTelemetry, integrated with Datadog for
                                monitoring, yielding a 25% performance
                                improvement.
                            </ExperienceItem>
                            <ExperienceItem>
                                Authored reusable unit-test foundation, boosting
                                quality control efficiency by over 30% and
                                identifying bugs and web accessibility issues.
                            </ExperienceItem>
                            <ExperienceItem>
                                Engaged closely with Software Architect and
                                Backend engineers to oversee APIs and streamline
                                software workflow with Scrum, resulting in a 25%
                                decrease in delivery time and improve success
                                rate.
                            </ExperienceItem>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: "servicenow-developer",
            title: "ServiceNow Developer",
            location: "Brande, Denmark",
            href: "http://bestseller.com/",
            subtitle: "BESTSELLER A/S - Nov 2022 - Dec 2023",
            content: (
                <div>
                    <div className="gap-4">
                        <ul className={_bodyClassName}>
                            <ExperienceItem>
                                Implemented custom ServiceNow applications
                                leveraging advanced features such as Flow
                                Designer, Service Catalog, SLAs, ACLs and Mobile
                                Agent.
                            </ExperienceItem>
                            <ExperienceItem>
                                Configured Email Notifications with SMTP, POP3
                                protocols to notify users about specific
                                activities in the system.
                            </ExperienceItem>
                            <ExperienceItem>
                                Collaborated with Departments and Business
                                stakeholders to translate business requirements
                                into functional requirements within ServiceNow.
                            </ExperienceItem>
                            <ExperienceItem>
                                Developed various UI Actions, and Policies,
                                Client Scripts, Business Rules, Inbound and
                                Outbound Email, Catalog Client Scripts, and
                                created Scheduled Job, Critical Reports, Gauges
                                as per the Business needs.
                            </ExperienceItem>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: "senior-software-engineer-2",
            title: "Senior Software Engineer",
            location: "Kigali, Rwanda",
            href: "https://codeofafrica.com/EN",
            subtitle: "CODE OF AFRICA LTD - June 2021 - Aug 2022",
            content: (
                <div>
                    <p className={_headerClassName}>
                        CODE OF AFRICA is a German based outsourcing hub
                        connecting European businesses with East African top
                        software engineers, prioritizing job creation,
                        education, and changing perceptions in Europe.
                    </p>
                    <div className="gap-4">
                        <ul className={_bodyClassName}>
                            <ExperienceItem>
                                Boosted SEO and Google search rankings for the
                                flagship Code of Africa website, elevating
                                organic traffic by an impressive 40%, driving
                                greater user engagement and brand recognition.
                            </ExperienceItem>
                            <ExperienceItem>
                                Led the frontend team, steering them towards
                                excellence while delivering constructive
                                feedback, resulting in a 30% improvement in code
                                quality. Acted as a mentor to junior developers,
                                fostering a collaborative, growth-oriented
                                atmosphere within the company.
                            </ExperienceItem>
                            <ExperienceItem>
                                Masterminded the evolution of an 8+ year-old
                                white-label system, meticulously maintaining and
                                enhancing its functionalities with PHP and
                                ElasticSearch, achieving a 20% increase in
                                system efficiency and user satisfaction.
                            </ExperienceItem>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: "senior-frontend-engineer-1",
            title: "Senior Frontend Engineer",
            href: "https://alfatier.io/",
            location: "Hamburg, Germany",
            subtitle: "ALFATIER GmbH - Nov 2021 – Aug 2022",
            content: (
                <div>
                    <p className={_headerClassName}>
                        Headquartered in Hamburg, Germany, ALFATIER is renowned
                        for its expertise in cloud optimization and
                        transformation. Specializing in architecture reviews and
                        cost management, they ensure efficiency and reliability
                        for businesses.
                    </p>
                    <div className="gap-4">
                        <ul className={_bodyClassName}>
                            <ExperienceItem>
                                Led as an early-stage frontend engineer, the
                                development of our flagship product,
                                collaborating closely with the UI/UX designer to
                                transform mockups into responsive flawless
                                interfaces, prioritizing user delight.
                            </ExperienceItem>
                            <ExperienceItem>
                                Developed frontend features for the MVP version
                                of the product, focusing on performance,
                                scalability, and maintainability.
                            </ExperienceItem>
                            <ExperienceItem>
                                Integrated monitoring and analytics tools such
                                as LogRocket and NewRelic to gather insights
                                into user interactions, performance metrics, and
                                application errors, increasing the product
                                efficiency by 40%.
                            </ExperienceItem>
                            <ExperienceItem>
                                Implemented HubSpot tracking codes and forms to
                                capture user data and behavior, enabling
                                automated and personalized marketing campaigns,
                                customer engagement, and targeted
                                communications.
                            </ExperienceItem>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: "frontend-engineer-1",
            title: "Frontend Engineer",
            location: "Memphis, USA",
            href: "https://org.reconstruction.us/",
            subtitle: "RECONSTRUCTION - June 2021 – Nov 2021",
            content: (
                <div>
                    <p className={_headerClassName}>
                        RECONSTRUCTION is an educational platform created to
                        reshape traditional cultural teachings, prioritizing
                        portrayal of African descent in a negative light, aiming
                        instead to celebrate the rich legacy and contributions
                        of the community.
                    </p>
                    <div className="gap-4">
                        <ul className={_bodyClassName}>
                            <ExperienceItem>
                                Integrated frontend interfaces displaying
                                Thinkific courses, modules, and lessons,
                                ensuring seamless user experience. Configured
                                Thinkific APIs for authentication, enrolment,
                                and progress tracking directly within the
                                frontend.
                            </ExperienceItem>
                            <ExperienceItem>
                                Maintained an intuitive admin dashboard to
                                facilitate efficient management of platform
                                content, courses, user data, and system
                                settings.
                            </ExperienceItem>
                            <ExperienceItem>
                                Achieved a 30% improvement in application
                                performance and maintainability through
                                successfully re-architecting the entire
                                customer-facing frontend application,
                                integrating Clean Code and Domain-Driven Design
                                principles.
                            </ExperienceItem>
                            <ExperienceItem>
                                Introduced forking/rebasing Git workflow, easing
                                collaboration and enhancing code integration,
                                alleviating previous workflow challenges, thus
                                improving development efficiency and code
                                delivery by 70%.
                            </ExperienceItem>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: "frontend-engineer-2",
            title: "Frontend Engineer",
            location: "Kigali, Rwanda",
            href: "https://exuus.rw/",
            subtitle: "EXUUS LTD - May 2020 - June 2021",
            content: (
                <div>
                    <p className={_headerClassName}>
                        Exuus, a leading FinTech firm in Rwanda, empowers
                        communities with collective saving schemes and digital
                        solutions, while fostering resilience and promoting an
                        eco-conscious future.
                    </p>
                    <div className="gap-4">
                        <ul className={_bodyClassName}>
                            <ExperienceItem>
                                Spearheaded the development and maintenance of
                                SavePlus, a for-profit crowdfunding web
                                application, as the sole frontend engineer
                                within the team. Took the ownership of the
                                frontend development process, ensuring high-
                                quality code and seamless user experience.
                            </ExperienceItem>
                            <ExperienceItem>
                                Actively participated in code reviews and
                                debugging, to maintain the stability and
                                performance of the application, and contributed
                                to the continuous improvement of SavePlus by
                                providing insights and suggestions for
                                optimizations and new features.
                            </ExperienceItem>
                            <ExperienceItem>
                                Implemented automated end-to-end tests using
                                CypressJS to ensure the reliability and quality
                                of the application across different browsers and
                                devices.
                            </ExperienceItem>
                            <ExperienceItem>
                                Worked on Payment integration with various
                                Mobile Money channels, Visa & MasterCard, and
                                PayPal, ensuring secure and seamless transaction
                                processes for users.
                            </ExperienceItem>
                            <ExperienceItem>
                                Implemented multi-language support for the
                                application, enhancing accessibility and user
                                experience by 45%.
                            </ExperienceItem>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: "fullstack-engineer",
            title: "Full-Stack PHP/MEAN Engineer",
            location: "Kampala, Uganda",
            href: "https://akorion.com/",
            subtitle: "AKORION LTD - Aug 2019 - Jan 2020",
            content: (
                <div>
                    <p className={_headerClassName}>
                        AKORION revolutionizes agriculture through EzyAgric,
                        empowering farmers with finance, inputs, and markets.
                        Utilizing village agents and technology, the
                        organization streamlines the supply chain for 60,000
                        farmers across Uganda.
                    </p>
                    <div className="gap-4">
                        <ul className={_bodyClassName}>
                            <ExperienceItem>
                                Used PHP/Lumen, and Angular 7 on the admin
                                dashboard to enhance EzyAgric's capabilities to
                                enable accurate mapping of gardens, facilitating
                                access to genuine services, farm records,
                                finance, and quality-paying markets, increasing
                                the product efficiency by 25%, while empowering
                                farmers effortless accessibility to vital
                                resources.
                            </ExperienceItem>
                            <ExperienceItem>
                                Implemented optimized data storage solutions
                                using CouchBase, improving database performance
                                and reliability, easing data access, potentially
                                increasing user satisfaction by 35%.
                            </ExperienceItem>
                            <ExperienceItem>
                                Pioneered and implemented a highly reusable
                                PHPUnit testing architecture and backbone,
                                accelerating the testing process and optimizing
                                development cycles by 45%.
                            </ExperienceItem>
                            <ExperienceItem>
                                Crafted responsive interfaces with Angular 7,
                                elevating user experience. Additionally, I
                                collaborate across teams to innovate features,
                                ensuring EzyAgric stays ahead in agricultural
                                technology.
                            </ExperienceItem>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: "associate-engineer",
            title: "Full-Stack Associate Engineer",
            location: "Kigali, Rwanda",
            href: "https://andela.com/",
            subtitle: "ANDELA LTD - Mar 2019 - Apr 2020",
            content: (
                <div>
                    <p className={_headerClassName}>
                        ANDELA is a global tech talent solutions, shaping
                        Africa's top developers into leaders. With key
                        partnerships, ANDELA empowers engineering teams
                        globally. The organization is supported by prestigious
                        investors like the Chan Zuckerberg Initiative.
                    </p>
                    <div className="gap-4">
                        <ul className={_bodyClassName}>
                            <ExperienceItem>
                                Successfully completed the technical leadership
                                training program in the first six months and was
                                able to learn and gain hands-on experience with
                                engineering best practices and soft skills.
                            </ExperienceItem>
                            <ExperienceItem>
                                Worked closely with Technical Team Leads to
                                transition me from my Zone of Proximal
                                Development (ZPD) to Nirvana - where I became a
                                highly skilled and sought-after engineer.
                            </ExperienceItem>
                            <ExperienceItem>
                                Implemented backend solutions with
                                Node/ExpressJS and PostgreSQL for Tembea,
                                streamlining cab requests and route management,
                                boosting operational efficiency by 30% for
                                Andela's Operations Department and
                                Partner-placed fellows.
                            </ExperienceItem>
                            <ExperienceItem>
                                Integrated Slack API into Tembea's web app,
                                enabling real-time updates and notifications.
                                Reduced response time by 20% for trip management
                                and data collection, empowering the Travel Team.
                            </ExperienceItem>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: "engineer-freelance",
            title: "Freelance Engineer",
            location: "Goma, DR Congo",
            href: "https://jkss-connect.com/",
            subtitle: "JKSS CONNECT - Sept 2017 - Feb 2019",
            content: (
                <div>
                    <p className={_headerClassName}>
                        JKSS Connect is an e-commerce organization facilitating
                        transactions between urban markets and rural buyers with
                        smartphone access. It empowers rural communities with
                        direct access to a diverse range of quality goods
                        sourced from urban hubs, fostering economic inclusion
                        and convenience.
                    </p>
                    <div className="gap-4">
                        <ul className={_bodyClassName}>
                            <ExperienceItem>
                                Innovated real-time data synchronization
                                mechanisms within the Ionic Mobile application,
                                prioritizing ease of use and accessibility,
                                particularly for users with low-speed internet
                                connections, resulting in a 50% decrease in page
                                load times while increasing browsing experience.
                            </ExperienceItem>
                            <ExperienceItem>
                                Integrated a QR code-based payment mechanism
                                within the app, revolutionizing transaction
                                speed and convenience for both delivery
                                personnel and customers, resulting in a 30%
                                reduction in checkout time.
                            </ExperienceItem>
                            <ExperienceItem>
                                Led the Agile development process using project
                                management tools like PivotalTracker, ensuring
                                efficient task allocation and progress tracking,
                                resulting in a 20% increase in development
                                velocity.
                            </ExperienceItem>
                            <ExperienceItem>
                                Successfully deployed cross-platform
                                applications built with Ionic 3 to multiple
                                mobile platforms including Android, iOS, and
                                Windows Phone, ensuring compatibility across
                                diverse operating systems.
                            </ExperienceItem>
                        </ul>
                    </div>
                </div>
            )
        }
    ];
};
