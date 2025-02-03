import GradientShineButton from "@/components/shared/buttons/gradient-shine/GradientShine.Button";
import { useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { FaDownload } from "react-icons/fa";

function throttle(func: (...args: unknown[]) => void, limit: number) {
    let lastFunc: NodeJS.Timeout;
    let lastRan: number;
    return (...args: unknown[]) => {
        if (!lastRan) {
            func(...args);
            lastRan = Date.now();
        } else {
            clearTimeout(lastFunc);
            lastFunc = setTimeout(
                () => {
                    if (Date.now() - lastRan >= limit) {
                        func(...args);
                        lastRan = Date.now();
                    }
                },
                limit - (Date.now() - lastRan)
            );
        }
    };
}

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
            <div className="fixed bottom-14 right-2 lg:bottom-4 lg:right-4 z-30">
                <div className="relative">
                    <GradientShineButton className="p-4 animate-pulse">
                        <FaDownload size={20} />
                    </GradientShineButton>
                </div>
            </div>
        )
    );
}
