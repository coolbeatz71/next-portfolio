import { useCallback, useEffect, useState } from "react";
import type { TypeWriterProps } from "./types";

/**
 * Typewriter component.
 *
 * @component
 *
 * @description
 * Cycles through a list of words with a collapse and expand animation every 5 seconds,
 * simulating a typewriter effect using CSS width transitions.
 *
 * @param {TypeWriterProps} props - Component props
 * @param {string[]} props.words - List of words to cycle through
 * @param {string} [props.className] - Additional class names for the outer span
 *
 * @returns The typewriter animation element
 */
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
