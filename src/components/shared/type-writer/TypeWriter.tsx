import { useCallback, useEffect, useState } from "react";

export interface TypeWriterProps {
    words: string[];
    className?: string;
}

export default function TypeWriter({
    words,
    className
}: TypeWriterProps): JSX.Element {
    const typeWriterClassName = `
        flex items-center font-bold animate-cursor overflow-hidden 
        whitespace-nowrap transition-[width] duration-200 ease-in mr-auto
    `;

    const [currentWord, setCurrentWord] = useState(0);
    const [collapseClassName, setCollapseClassName] = useState("w-0");

    const incrementWord = useCallback(() => {
        setCollapseClassName("w-0");

        setTimeout(() => {
            setCurrentWord((prev) => (prev + 1) % words.length);
            setCollapseClassName("w-full");
        }, 200);
    }, [words.length]);

    useEffect(() => {
        const timeoutId = setTimeout(
            () => setCollapseClassName("w-full"),
            1000
        );
        const intervalId = setInterval(incrementWord, 5000);

        return () => {
            clearTimeout(timeoutId);
            clearInterval(intervalId);
        };
    }, [incrementWord]);

    return (
        <span className={className}>
            <span className={`${typeWriterClassName} ${collapseClassName}`}>
                {words[currentWord]}
            </span>
        </span>
    );
}
