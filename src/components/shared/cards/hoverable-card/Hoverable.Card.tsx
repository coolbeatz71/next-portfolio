import { cn } from "@/helpers/mergeClassName";
import { AnimatePresence, motion } from "framer-motion";

export interface HoverableCardProps {
    icon: string;
    title: string;
    currentIndex: number;
    hoveredIndex: number | null;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}

export default function HoverableCard({
    icon,
    title,
    currentIndex,
    hoveredIndex,
    onMouseEnter,
    onMouseLeave
}: HoverableCardProps): JSX.Element {
    return (
        <div
            key={title}
            className="relative group block p-2 h-[5rem] w-full"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <AnimatePresence>
                {hoveredIndex === currentIndex && (
                    <motion.span
                        className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-md"
                        layoutId="hoverBackground"
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: 1,
                            transition: { duration: 0.15 }
                        }}
                        exit={{
                            opacity: 0,
                            transition: { duration: 0.15, delay: 0.2 }
                        }}
                    />
                )}
            </AnimatePresence>
            <Card className={cn("bg-no-repeat bg-center bg-contain", icon)} />
        </div>
    );
}

interface CardProps {
    className?: string;
}
const Card = ({ className }: CardProps): JSX.Element => {
    return (
        <div
            className={cn(
                "rounded-md h-full w-full p-4 overflow-hidden border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
                className
            )}
        />
    );
};
