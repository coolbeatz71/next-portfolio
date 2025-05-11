import { useCallback, useEffect, useState } from "react";

export interface TypeWriterProps {
    words: string[];
    className?: string;
}

export function TypeWriter({ words, className }: TypeWriterProps) {
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
        const intervalId = setInterval(incrementWord, 5000);
        const timeoutId = setTimeout(() => setCollapseClassName("w-full"), 100);

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
