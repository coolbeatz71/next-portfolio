import { memo } from "react";
import { cn } from "@/helpers/mergeClassName";

export interface AbstractBackgroundProps {
    maskImage: string;
    className?: string;
    backgroundClass: string;
}

function AbstractBackgroundComponent({
    maskImage,
    backgroundClass,
    className = "h-200"
}: AbstractBackgroundProps) {
    return (
        <div
            className={cn(
                "absolute left-0 right-0 w-full flex items-center justify-center",
                backgroundClass,
                className
            )}
        >
            <div
                className={cn(
                    "absolute pointer-events-none inset-0 flex items-center justify-center",
                    `[mask-image:${maskImage}]`
                )}
            />
        </div>
    );
}

export const AbstractBackground = memo(AbstractBackgroundComponent);
