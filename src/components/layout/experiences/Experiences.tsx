import { useState } from "react";

import { MovingBorderButton } from "@/components/shared/buttons/moving-border/MovingBorder.Button";
import Drawer from "@/components/shared/drawer/Drawer";
import SectionHeader from "@/components/shared/section-header/SectionHeader";
import { Timeline } from "@/components/shared/timeline/Timeline";
import { experienceTimeline } from "@/config/WorkExperience";

export default function Experiences(): JSX.Element {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="mx-auto max-w-7xl max-h-7xl">
            <div className="pb-10">
                <SectionHeader
                    title="My Work Experience"
                    subtitle="A snapshot of my professional journey, showcasing the roles, projects, and achievements that define my career as a software engineer"
                />
                <Timeline data={experienceTimeline().slice(0, 5)} />
                <div className="flex justify-center w-full">
                    <MovingBorderButton
                        className="py-4 px-10"
                        onClick={toggleDrawer}
                    >
                        View more experiences
                    </MovingBorderButton>
                </div>
            </div>

            <Drawer
                isOpen={isOpen}
                title="Work Experience"
                onToggle={toggleDrawer}
                data={experienceTimeline}
            />
        </div>
    );
}
