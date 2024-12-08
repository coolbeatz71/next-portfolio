import type { SkillsByStack } from "@/config/DevStack";
import NextImage from "next/image";
import { Fragment } from "react";

export default function ProgressBar({
    title,
    lightImage,
    darkImage,
    progress
}: SkillsByStack): JSX.Element {
    return (
        <Fragment>
            <div className="flex items-center">
                <span className="h-8 w-8 rounded relative">
                    <NextImage
                        layout="fill"
                        className="hidden dark:block"
                        src={darkImage}
                        objectFit="contain"
                        alt={title}
                    />
                    <NextImage
                        layout="fill"
                        className="block dark:hidden"
                        src={lightImage}
                        objectFit="contain"
                        alt={title}
                    />
                </span>
                <span className="cursor-pointer bg-indigo-100 dark:bg-indigo-800 text-indigo-800 dark:text-indigo-100 text-[8pt] font-semibold px-2.5 py-0.5 rounded transition-colors duration-200 hover:bg-indigo-200 hover:text-indigo-900 dark:hover:bg-indigo-600 dark:hover:text-indigo-200">
                    {title}
                </span>
            </div>

            <div className="w-full bg-indigo-300/20 h-8 mb-6 mt-2 rounded-md">
                <div
                    className="bg-indigo-700 h-8 rounded-md"
                    style={{ width: `${progress}%` }}
                />
            </div>
        </Fragment>
    );
}
