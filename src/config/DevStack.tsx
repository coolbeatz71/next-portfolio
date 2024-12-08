import type { Tabs } from "@/config/Projects";

export const devStackTabs: Tabs[] = [
    {
        title: "Programming Language",
        context: "programming-language",
        content: <ProjectSection projects={projectsFullStack} />
    },
    {
        title: "Front-End",
        context: "front-end",
        content: <ProjectSection projects={projectsFrontend} />
    },
    {
        title: "Backend-End",
        context: "backend-end",
        content: <ProjectSection projects={projectsMobile} />
    },
    {
        title: "Infrastructure",
        context: "infrastructure",
        content: <ProjectSection projects={projectsOpenSource} />
    },
    {
        title: "Data Store",
        context: "data-store",
        content: <ProjectSection projects={projectsOpenSource} />
    }
];

// Laravel, expressjs, nestjs, Actix Web, .net
// Docker, Kubernetes, Github Actions, Azure, GCP
// Postgres, Mysql, MongoDB, Couchbase, Firestore
// NextJS, ReactJS, Angular, Vue, Flutter
// Javascript, Rust, Dart, PHP, C#
// CircleCI, ServiceNow, GraphQL, Firebase, OpenTelemetry
