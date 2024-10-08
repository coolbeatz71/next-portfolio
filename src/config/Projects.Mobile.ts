import type { ProjectByStack } from "@/config/Projects";

export const projectsMobile: ProjectByStack[] = [
    {
        name: "Film Fan",
        description:
            "A mobile app that focuses on delivering a seamless movie discovery experience, with future plans to integrate cinema booking, making it the ultimate solution for moviegoers in Rwanda. It helps users discover now-playing movies in Rwanda, offering details like ratings, synopses, and recommendations.",
        stack: ["Flutter", "Dart", "SQLite", "Bloc", "Android Studio", "Dio"],
        images: ["/placeholder.svg?height=300&width=400"],
        link: "",
        hasLink: false
    },
    {
        name: "Click Mart",
        description:
            "A mobile app that bridges urban markets and rural buyers, offering a seamless e-commerce experience. The app empowers rural communities by providing direct access to a wide range of quality goods sourced from urban hubs. It promotes economic inclusion by enabling secure payments, and delivering products to remote areas with ease.",
        stack: [
            "Ionic",
            "Angular",
            "PouchDB",
            "MongoDB",
            "Android SDK",
            "Capacitor"
        ],
        images: ["/placeholder.svg?height=300&width=400"],
        link: "",
        hasLink: false
    },
    {
        name: "Task Manager",
        description:
            "A fancy mobile app designed for effortless task organization. Whether managing daily errands, planning projects, or juggling work and personal commitments, this intuitive task manager ensures everything stays on track.",
        stack: [
            "Flutter",
            "Dart",
            "Bloc",
            "Provider",
            "Firestore",
            "Firebase Cloud Messaging"
        ],
        images: ["/placeholder.svg?height=300&width=400"],
        link: "",
        hasLink: false
    }
];
