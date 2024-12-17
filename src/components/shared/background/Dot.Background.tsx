import { cn } from "@/helpers/mergeClassName";

export interface DotBackgroundProps {
    className?: string;
}
export function DotBackground({
    className = "h-[50rem]"
}: DotBackgroundProps): JSX.Element {
    return (
        <div
            className={cn(
                "absolute left-0 right-0 w-full dark:bg-dot-white/[0.05] bg-dot-black/[0.05] flex items-center justify-center",
                className
            )}
        >
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        </div>
    );
}
