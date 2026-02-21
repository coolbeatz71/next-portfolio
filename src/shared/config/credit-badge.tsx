import { IconBriefcase, IconGlobe } from "@/shared/config/icons";
import type { ICreditBadge } from "./types";

export const creditBadgeList: ICreditBadge[] = [
    {
        icon: <IconBriefcase />,
        className: "",
        count: 10,
        text: "years_of_experience"
    },
    {
        icon: <IconGlobe />,
        className: "left-10",
        count: 30,
        text: "live_projects"
    }
];
