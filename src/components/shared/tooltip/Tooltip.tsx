import { useCallback, useEffect, useRef, useState } from "react";

interface TooltipProps {
    children: React.ReactNode;
    text: string;
}

type Position = "top" | "bottom" | "left" | "right";

function debounce<T extends (...args: unknown[]) => void>(
    func: T,
    wait: number
): (...args: Parameters<T>) => void {
    let timeout: NodeJS.Timeout;
    return (...args: Parameters<T>) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), wait);
    };
}

export default function Tooltip({ children, text }: TooltipProps): JSX.Element {
    const [position, setPosition] = useState<Position>("top");
    const tooltipRef = useRef<HTMLSpanElement>(null);

    const handlePosition = useCallback(() => {
        if (tooltipRef.current) {
            const { top, bottom, left, right } =
                tooltipRef.current.getBoundingClientRect();
            const viewportHeight = window.innerHeight;
            const viewportWidth = window.innerWidth;

            const positions = [
                { condition: top < 20, value: "bottom" },
                { condition: bottom > viewportHeight - 20, value: "top" },
                { condition: left < 20, value: "right" },
                { condition: right > viewportWidth - 20, value: "left" }
            ];

            const newPosition =
                positions.find((pos) => pos.condition)?.value || "top";
            setPosition(newPosition as Position);
        }
    }, []);

    const debouncedHandlePosition = useCallback(
        () => debounce(handlePosition, 100),
        [handlePosition]
    );

    useEffect(() => {
        handlePosition();
        window.addEventListener("resize", debouncedHandlePosition);
        return () =>
            window.removeEventListener("resize", debouncedHandlePosition);
    }, [debouncedHandlePosition, handlePosition]);

    const positionClasses = {
        top: "bottom-full mb-2 left-1/2 transform -translate-x-1/2",
        bottom: "top-full mt-2 left-1/2 transform -translate-x-1/2",
        left: "right-full mr-2 top-1/2 transform -translate-y-1/2",
        right: "left-full ml-2 top-1/2 transform -translate-y-1/2"
    };

    const arrowClasses = {
        top: "top-full left-1/2 transform -translate-x-1/2 border-t-4 border-t-gray-700/70 border-l-4 border-l-transparent border-r-4 border-r-transparent",
        bottom: "bottom-full left-1/2 transform -translate-x-1/2 border-b-4 border-b-gray-700/70 border-l-4 border-l-transparent border-r-4 border-r-transparent",
        left: "left-full top-1/2 transform -translate-y-1/2 border-l-4 border-l-gray-700/70 border-t-4 border-t-transparent border-b-4 border-b-transparent",
        right: "right-full top-1/2 transform -translate-y-1/2 border-r-4 border-r-gray-700/70 border-t-4 border-t-transparent border-b-4 border-b-transparent"
    };

    return (
        <div className="group relative inline-block">
            {children}
            <span
                ref={tooltipRef}
                className={`absolute z-50 ${positionClasses[position]} group-hover:inline-block w-max bg-gray-700 bg-opacity-70 text-white text-xs rounded py-1 px-2 transition-opacity duration-500 delay-100 opacity-0 group-hover:opacity-100`}
            >
                {text}
                <span className={`absolute ${arrowClasses[position]}`} />
            </span>
        </div>
    );
}
