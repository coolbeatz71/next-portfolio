import type { ReactNode } from "react";
import numeral from "numeral";
import CountUp from "react-countup";

import { cn } from "@/helpers/mergeClassName";
import GridBackground from "@/components/shared/grid-background/GridBackground";

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
                "relative bg-gradient-to-b dark:from-neutral-900 from-neutral-100 dark:to-neutral-950 to-white p-4 rounded-xl overflow-hidden z-50 shadow-2xl flex justify-around items-center",
                className
            )}
        >
            <GridBackground size={20} />
            <div className="text-4xl mr-2">{icon}</div>
            <div className="flex items-center gap-x-2">
                <div className="text-4xl leading-none font-bold text-indigo-600">
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
                <div className="max-w-[90px] leading-none text-[11pt] font-medium text-black">
                    {badgeText}
                </div>
            </div>
        </div>
    );
}
