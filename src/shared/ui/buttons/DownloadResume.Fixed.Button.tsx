import { useScroll } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { IconDownload } from "@/shared/config/icons";
import { RESUME_LINK } from "@/shared/config/resume";
import { throttle } from "@/shared/lib/throttle";
import { GradientShineButton } from "@/shared/ui/buttons/GradientShine.Button";

export function DownloadResumeFixedButton() {
    const [isVisible, setIsVisible] = useState(false);
    const { scrollY } = useScroll();
    const heroBottomRef = useRef<number>(0);

    // Read hero bottom once on mount (outside scroll callback to avoid forced reflow)
    useEffect(() => {
        const heroElement = document.getElementById("hero");
        if (heroElement) {
            heroBottomRef.current =
                heroElement.offsetTop + heroElement.offsetHeight;
        }
    }, []);

    useEffect(() => {
        const handleScroll = throttle(() => {
            setIsVisible(scrollY.get() > heroBottomRef.current);
        }, 200);

        const unsubscribe = scrollY.on("change", handleScroll);
        return () => {
            unsubscribe();
        };
    }, [scrollY]);

    return (
        isVisible && (
            <div className="fixed bottom-14 right-4 lg:bottom-4 lg:right-4 z-30">
                <div className="relative">
                    <a
                        target="_blank"
                        href={RESUME_LINK}
                        rel="noopener noreferrer"
                        title="Download Resume"
                        aria-label="Download Resume (opens in new tab)"
                    >
                        <GradientShineButton className="p-4 animate-pulse">
                            <IconDownload size={20} aria-hidden="true" />
                        </GradientShineButton>
                    </a>
                </div>
            </div>
        )
    );
}
