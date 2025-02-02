import numeral from "numeral";
import type { ReactNode } from "react";
import CountUp from "react-countup";

import GridPatternBackground from "@/components/shared/background/GridPattern.Background";
import { cn } from "@/helpers/mergeClassName";

export interface BadgeProps {
    icon: ReactNode;
    className?: string;
    endCountNumber: number;
    endCountText?: string;
    badgeText: string;
}

export default function Badge({
    icon,
    className,
    endCountNumber,
    endCountText,
    badgeText
}: BadgeProps): JSX.Element {
    return (
        <div
            className={cn(
                "relative backdrop-blur-sm bg-gradient-to-b from-neutral-100 to-slate-300/50 dark:from-neutral-600 dark:to-slate-800/50 p-3 md:p-4 rounded-lg overflow-hidden z-10 shadow-xl flex justify-around items-center",
                className
            )}
        >
            <GridPatternBackground size={20} />
            <div className="text-3xl md:text-4xl mr-2">{icon}</div>
            <div className="flex items-center gap-x-2">
                <div className="text-3xl md:text-4xl leading-none font-bold text-indigo-700 dark:text-indigo-500">
                    <CountUp
                        end={endCountNumber}
                        delay={1}
                        duration={2}
                        formattingFn={(value: number) =>
                            `${numeral(Number(value)).format("0.[00]a")}+`
                        }
                    />
                    {endCountText}
                </div>
                <div className="max-w-[100px] leading-none text-[9pt] md:text-[10pt] font-medium text-slate-700 dark:text-slate-300">
                    {badgeText}
                </div>
            </div>
        </div>
    );
}
