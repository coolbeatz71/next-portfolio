import numeral from "numeral";
import type { ReactNode } from "react";
import CountUp from "react-countup";

import GridBackground from "@/components/shared/grid-background/GridBackground";
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
                "relative bg-gradient-to-b from-neutral-100 to-neutral-200 dark:from-neutral-700 dark:to-neutral-800 p-4 rounded-lg overflow-hidden z-10 shadow-2xl flex justify-around items-center",
                className
            )}
        >
            <GridBackground size={20} />
            <div className="text-4xl mr-2">{icon}</div>
            <div className="flex items-center gap-x-2">
                <div className="text-4xl leading-none font-bold text-indigo-700 dark:text-indigo-500">
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
                <div className="max-w-[90px] leading-none text-[11pt] font-medium text-slate-700 dark:text-slate-300">
                    {badgeText}
                </div>
            </div>
        </div>
    );
}
