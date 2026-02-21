import { motion } from "motion/react";
import dynamic from "next/dynamic";
import { cn } from "@/shared/lib/cn";
import { formatCount } from "@/shared/lib/formatCount";
import { GridPatternBackground } from "@/shared/ui/background/GridPattern.Background";
import type { BadgeProps } from "./types";

const CountUp = dynamic(() => import("react-countup"), { ssr: false });

/**
 * Animated stat badge component.
 *
 * @component
 *
 * @description
 * Displays a count-up number, an icon, and a label inside a hoverable badge card.
 * Scales up slightly on hover and uses a grid pattern overlay for decoration.
 *
 * @param {BadgeProps} props - Component props
 * @param {ReactNode} props.icon - Icon element displayed on the left
 * @param {string} props.badgeText - Label text shown next to the count
 * @param {number} props.endCountNumber - The final number for the count-up animation
 * @param {string} [props.endCountText] - Optional text appended after the count (e.g. "k")
 * @param {string} [props.className] - Additional class names for the container
 *
 * @returns The stat badge element
 */
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
                `cursor-pointer relative backdrop-blur-sm bg-primary-overlay p-3
                sm:p-3.5 md:p-4 rounded-lg overflow-hidden z-10 shadow-xl flex justify-around items-center`,
                className
            )}
        >
            <GridPatternBackground size={20} />
            <div className="text-4xl mr-2">{icon}</div>
            <div className="flex items-center gap-x-2">
                <div className="text-3xl leading-none font-bold text-accent">
                    <CountUp
                        delay={1}
                        duration={2}
                        end={endCountNumber}
                        formattingFn={formatCount}
                    />
                    {endCountText}
                </div>
                <div className="max-w-25 leading-none text-body-sm font-medium text-typography-badge">
                    {badgeText}
                </div>
            </div>
        </motion.div>
    );
}
