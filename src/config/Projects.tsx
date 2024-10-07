import type { ReactNode } from "react";

export interface Tabs {
    title: string;
    context: string;
    content: ReactNode;
}

export const projectsTabs: Tabs[] = [
    {
        title: "Full-Stack",
        context: "full-stack",
        content: (
            <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis et, provident ab officia quibusdam at nulla hic libero,
                itaque aperiam harum eius ex sint unde! Libero quas dolores
                quasi consectetur.
            </div>
        )
    },
    {
        title: "Front-End",
        context: "front-end",
        content: (
            <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis et, provident ab officia quibusdam at nulla hic libero,
                itaque aperiam harum eius ex sint unde! Libero quas dolores
                quasi consectetur.
            </div>
        )
    },
    {
        title: "Mobile Apps",
        context: "mobile-apps",
        content: (
            <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis et, provident ab officia quibusdam at nulla hic libero,
                itaque aperiam harum eius ex sint unde! Libero quas dolores
                quasi consectetur.
            </div>
        )
    },
    {
        title: "Open-Source",
        context: "open-source",
        content: (
            <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis et, provident ab officia quibusdam at nulla hic libero,
                itaque aperiam harum eius ex sint unde! Libero quas dolores
                quasi consectetur.
            </div>
        )
    }
];
