import { Fragment } from "react";
import NextImage from "next/image";
import type { SkillsByStack } from "@/config/DevStack";

export default function ProgressBar({
    title,
    lightImage,
    darkImage,
    progress
}: SkillsByStack): JSX.Element {
    return (
        <Fragment>
            <div className="flex items-center justify-between">
                <div className="h-4 w-4 rounded">
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
                </div>
                <span className="px-2 py-1 bg-teal-50 rounded-md text-xs text-teal-400 font-medium min-w-[46px] text-center">
                    {title}
                </span>
            </div>

            <div className="w-full bg-slate-100 h-12 mb-6 mt-2 rounded-md">
                <div
                    className="bg-teal-400 h-1 rounded-md"
                    style={{ width: `${progress}%` }}
                />
            </div>
        </Fragment>
    );
}
