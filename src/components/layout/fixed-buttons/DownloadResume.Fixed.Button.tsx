import GradientShineButton from "@/components/shared/buttons/gradient-shine/GradientShine.Button";
import { RESUME_LINK } from "@/config/Resume";
import { throttle } from "@/helpers/throttle";
import { useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { FaDownload } from "react-icons/fa";

export default function DownloadResumeFixedButton() {
    const [isVisible, setIsVisible] = useState(false);
    const { scrollY } = useScroll();

    useEffect(() => {
        const handleScroll = throttle(() => {
            const heroElement = document.getElementById("hero");
            if (heroElement) {
                const heroBottom = heroElement.getBoundingClientRect().bottom;
                setIsVisible(scrollY.get() > heroBottom);
            }
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
                    >
                        <GradientShineButton className="p-4 animate-pulse">
                            <FaDownload size={20} />
                        </GradientShineButton>
                    </a>
                </div>
            </div>
        )
    );
}
