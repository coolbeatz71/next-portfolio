import { cn } from "@/helpers/mergeClassName";

export interface GridBackgroundProps {
    className?: string;
}

export default function GridBackground({
    className = "h-[50rem]"
}: GridBackgroundProps): JSX.Element {
    return (
        <div
            className={cn(
                "absolute left-0 right-0 w-full dark:bg-grid-white/[0.010] bg-grid-black/[0.025] flex items-center justify-center",
                className
            )}
        >
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]" />
        </div>
    );
}
