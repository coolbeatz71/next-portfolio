import type { ISkillsByStack } from "@/features/skills/data/skills.tabs";

export const devStackDatabase: ISkillsByStack[] = [
    {
        title: "PostgreSQL",
        lightImage: "/dev-tools/postgresql.svg",
        darkImage: "/dev-tools/postgresql.svg",
        progress: 90
    },
    {
        title: "MySQL",
        lightImage: "/dev-tools/mysql.svg",
        darkImage: "/dev-tools/mysql.svg",
        progress: 95
    },
    {
        title: "MongoDB",
        lightImage: "/dev-tools/mongodb.svg",
        darkImage: "/dev-tools/mongodb.svg",
        progress: 80
    },
    {
        title: "Firestore",
        lightImage: "/dev-tools/firestore.svg",
        darkImage: "/dev-tools/firestore.svg",
        progress: 70
    },
    {
        title: "Couchbase",
        lightImage: "/dev-tools/couchbase.svg",
        darkImage: "/dev-tools/couchbase.svg",
        progress: 60
    }
];
