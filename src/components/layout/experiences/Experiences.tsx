import { useState } from "react";

import { MovingBorderButton } from "@/components/shared/buttons/moving-border/MovingBorder.Button";
import Drawer from "@/components/shared/popup/drawer/Drawer";
import SectionHeader from "@/components/shared/section-header/SectionHeader";
import { Timeline } from "@/components/shared/timeline/Timeline";
import { TimelineFull } from "@/components/shared/timeline/Timeline.Full";
import { experienceTimeline } from "@/config/WorkExperience";

export default function Experiences(): JSX.Element {
    const [isOpen, setIsOpen] = useState(false);

    const headerClassName = "mt-4 !text-sm mb-0";
    const bodyClassName = "!text-sm mt-4";

    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };

    return (
        <section
            id="experience"
            className="mx-auto max-w-7xl max-h-7xl scroll-mt-36"
        >
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
            >
                <TimelineFull
                    data={experienceTimeline(headerClassName, bodyClassName)}
                />
            </Drawer>
        </section>
    );
}
