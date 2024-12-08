import { MovingBorderButton } from "@/components/shared/buttons/moving-border/MovingBorder.Button";
import SectionHeader from "@/components/shared/section-header/SectionHeader";
import { Timeline } from "@/components/shared/timeline/Timeline";
import { experienceTimeline } from "@/config/WorkExperience";

export default function Experiences(): JSX.Element {
    return (
        <div className="mx-auto max-w-7xl max-h-7xl">
            <div className="py-10">
                <SectionHeader
                    title="My Work Experience"
                    subtitle="A snapshot of my professional journey, showcasing the roles, projects, and achievements that define my career as a software engineer"
                />
                <Timeline data={experienceTimeline} />
                <div className="flex justify-center w-full">
                    <MovingBorderButton
                        className="w-full py-4 px-10 flex justify-center"
                        onClick={() => console.log("clicked")}
                    >
                        View more experiences
                    </MovingBorderButton>
                </div>
            </div>
        </div>
    );
}
