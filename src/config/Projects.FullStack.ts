import type { ProjectByStack } from "@/config/Projects";

export const projectsFullStack: ProjectByStack[] = [
    {
        name: "Code of Africa",
        description:
            "The company landing web app, which is a German based outsourcing hub connecting European businesses with East African top software engineers, prioritizing job creation, education, and changing perceptions in Europe.",
        stack: [
            "ExpressJs",
            "EJS",
            "Typescript",
            "Bootstrap",
            "Nginx",
            "Modernizr"
        ],
        images: ["/projects/codeofafrica/codeofafrica_preview.jpg"],
        link: "https://www.codeofafrica.com/EN",
        hasLink: true
    },
    {
        name: "EzyAgric",
        description:
            "An on-demand web and mobile platform offering inclusive, data-driven access to production, marketing, and finance services for Ugandan farmers and agribusinesses, helping them to map gardens, access inputs, services, records, and markets that pay for quality.",
        stack: [
            "Angular",
            "PHP",
            "Laravel",
            "CouchBase",
            "ChartJS",
            "Eloquent ORM"
        ],
        images: ["/projects/ezyagric/ezyagric_preview.jpg"],
        link: "https://ezyagric.com/",
        hasLink: true
    },
    {
        name: "Motory",
        description:
            "A German vehicle's marketplace with a community-driven environment. It allows users to buy and sell vehicles, access detailed automotive information, and participate in discussions. The platform offers documentation for vehicle transactions and serves as a hub for automotive enthusiasts.",
        stack: [
            "PHP",
            "Bootstrap",
            "jQuery",
            "MySQL",
            "ElasticSearch",
            "Doctrine"
        ],
        images: ["/projects/motory/motory_preview.jpg"],
        link: "https://www.motory.de/",
        hasLink: true
    },
    {
        name: "Tembea",
        description:
            "A platform through which Andela automates all processes with regards to cab requests, routes management and reconciliation, employing a Slack and web application. It solves the needs of Operations Department and the Travel Team with tools to aid trip management and data collection for visiting Andelans to other institutions",
        stack: [
            "Angular",
            "NodeJs",
            "ExpressJs",
            "Slack API",
            "PostgreSQL",
            "RxJS"
        ],
        images: ["/placeholder.svg?height=300&width=400"],
        link: "",
        hasLink: false
    }
];
