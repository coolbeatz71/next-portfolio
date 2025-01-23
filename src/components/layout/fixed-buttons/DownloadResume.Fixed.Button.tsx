import GradientShineButton from "@/components/shared/buttons/gradient-shine/GradientShine.Button";
import Tooltip from "@/components/shared/tooltip/Tooltip";
import { useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
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
    const { t } = useTranslation();
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
            <div className="fixed bottom-4 right-4 z-30">
                <div className="relative">
                    <Tooltip text={t("download_resume")}>
                        <GradientShineButton className="p-4 animate-pulse">
                            <FaDownload size={20} />
                        </GradientShineButton>
                    </Tooltip>
                </div>
            </div>
        )
    );
}
