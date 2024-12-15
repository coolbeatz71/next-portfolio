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
        "text-neutral-500 dark:text-neutral-400 italic text-xs md:text-sm font-normal mb-8 !leading-loose",
        headerClassName
    );
    const _bodyClassName = cn(
        "list-disc space-y-2 pl-5 leading-relaxed text-neutral-600 dark:text-neutral-300",
        bodyClassName
    );

    return [
        {
            id: "senior-frontend-engineer-1",
            title: "Senior Frontend Engineer",
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
                            <li>
                                Developed and maintained Digital Media &
                                Marketing web app, slashing pages load time by
                                30% with React.js, prioritizing UX and
                                accessibility.
                            </li>
                            <li>
                                Implemented daily usage and performance metrics
                                using OpenTelemetry, integrated with Datadog for
                                monitoring, yielding a 25% performance
                                improvement.
                            </li>
                            <li>
                                Authored reusable unit-test foundation, boosting
                                quality control efficiency by over 30% and
                                identifying bugs and web accessibility issues.
                            </li>
                            <li>
                                Engaged closely with Software Architect and
                                Backend engineers to oversee APIs and streamline
                                software workflow with Scrum, resulting in a 25%
                                decrease in delivery time and improve success
                                rate.
                            </li>
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
                            <li>
                                Implemented custom ServiceNow applications
                                leveraging advanced features such as Flow
                                Designer, Service Catalog, SLAs, ACLs and Mobile
                                Agent.
                            </li>
                            <li>
                                Configured Email Notifications with SMTP, POP3
                                protocols to notify users about specific
                                activities in the system.
                            </li>
                            <li>
                                Collaborated with Departments and Business
                                stakeholders to translate business requirements
                                into functional requirements within ServiceNow.
                            </li>
                            <li>
                                Developed various UI Actions, and Policies,
                                Client Scripts, Business Rules, Inbound and
                                Outbound Email, Catalog Client Scripts, and
                                created Scheduled Job, Critical Reports, Gauges
                                as per the Business needs.
                            </li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: "senior-software-engineer",
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
                            <li>
                                Boosted SEO and Google search rankings for the
                                flagship Code of Africa website, elevating
                                organic traffic by an impressive 40%, driving
                                greater user engagement and brand recognition.
                            </li>
                            <li>
                                Led the frontend team, steering them towards
                                excellence while delivering constructive
                                feedback, resulting in a 30% improvement in code
                                quality. Acted as a mentor to junior developers,
                                fostering a collaborative, growth-oriented
                                atmosphere within the company.
                            </li>
                            <li>
                                Masterminded the evolution of an 8+ year-old
                                white-label system, meticulously maintaining and
                                enhancing its functionalities with PHP and
                                ElasticSearch, achieving a 20% increase in
                                system efficiency and user satisfaction.
                            </li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: "senior-frontend-engineer-2",
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
                        <ul className="list-disc space-y-2 pl-5 leading-relaxed text-neutral-600 dark:text-neutral-300 ">
                            <li>
                                Led as an early-stage frontend engineer, the
                                development of our flagship product,
                                collaborating closely with the UI/UX designer to
                                transform mockups into responsive flawless
                                interfaces, prioritizing user delight.
                            </li>
                            <li>
                                Developed frontend features for the MVP version
                                of the product, focusing on performance,
                                scalability, and maintainability.
                            </li>
                            <li>
                                Integrated monitoring and analytics tools such
                                as LogRocket and NewRelic to gather insights
                                into user interactions, performance metrics, and
                                application errors, increasing the product
                                efficiency by 40%.
                            </li>
                            <li>
                                Implemented HubSpot tracking codes and forms to
                                capture user data and behavior, enabling
                                automated and personalized marketing campaigns,
                                customer engagement, and targeted
                                communications.
                            </li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: "senior-frontend-engineer-3",
            title: "Senior Frontend Engineer",
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
                            <li>
                                Integrated frontend interfaces displaying
                                Thinkific courses, modules, and lessons,
                                ensuring seamless user experience. Configured
                                Thinkific APIs for authentication, enrolment,
                                and progress tracking directly within the
                                frontend.
                            </li>
                            <li>
                                Maintained an intuitive admin dashboard to
                                facilitate efficient management of platform
                                content, courses, user data, and system
                                settings.
                            </li>
                            <li>
                                Achieved a 30% improvement in application
                                performance and maintainability through
                                successfully re-architecting the entire
                                customer-facing frontend application,
                                integrating Clean Code and Domain-Driven Design
                                principles.
                            </li>
                            <li>
                                Introduced forking/rebasing Git workflow, easing
                                collaboration and enhancing code integration,
                                alleviating previous workflow challenges, thus
                                improving development efficiency and code
                                delivery by 70%.
                            </li>
                        </ul>
                    </div>
                </div>
            )
        }
    ];
};
