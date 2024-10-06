import { MovingBorderButton } from "@/components/shared/buttons/MovingBorder.Button";
import { Timeline } from "@/components/shared/timeline/Timeline";
import { experienceTimeline } from "@/config/WorkExperience";

export default function Experiences(): JSX.Element {
    return (
        <div className="mx-auto max-w-7xl max-h-7xl">
            <Timeline data={experienceTimeline} />
            <div className="flex justify-center w-full pb-8">
                <MovingBorderButton
                    className="w-full py-4 px-10 flex justify-center"
                    onClick={() => console.log("clicked")}
                >
                    View more experiences
                </MovingBorderButton>
            </div>
        </div>
    );
}
