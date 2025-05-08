import { motion } from "motion/react";
import numeral from "numeral";
import type { ReactNode } from "react";
import CountUp from "react-countup";

import { GridPatternBackground } from "@/components/shared/background/GridPattern.Background";
import { cn } from "@/helpers/mergeClassName";

export interface BadgeProps {
    icon: ReactNode;
    badgeText: string;
    className?: string;
    endCountText?: string;
    endCountNumber: number;
}

export function Badge({
    icon,
    badgeText,
    className,
    endCountText,
    endCountNumber
}: BadgeProps) {
    return (
        <motion.div
            initial="initial"
            whileHover="hover"
            variants={{
                initial: { scale: 1 },
                hover: { scale: 1.1 }
            }}
            className={cn(
                `cursor-pointer relative backdrop-blur-sm bg-indigo-500/60 dark:bg-indigo-700/60 p-3
                sm:p-3.5 md:p-4 rounded-lg overflow-hidden z-10 shadow-xl flex justify-around items-center`,
                className
            )}
        >
            <GridPatternBackground size={20} />
            <div className="text-4xl mr-2">{icon}</div>
            <div className="flex items-center gap-x-2">
                <div className="text-3xl leading-none font-bold text-amber-500">
                    <CountUp
                        delay={1}
                        duration={2}
                        end={endCountNumber}
                        formattingFn={(value: number) =>
                            `${numeral(Number(value)).format("0.[00]a")}+`
                        }
                    />
                    {endCountText}
                </div>
                <div className="max-w-25 leading-none text-[10pt] font-medium text-slate-300">
                    {badgeText}
                </div>
            </div>
        </motion.div>
    );
}
