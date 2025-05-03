import { cn } from "@/helpers/mergeClassName";

export interface AbstractBackgroundProps {
    className?: string;
    backgroundClass: string;
    maskImage: string;
}

export function AbstractBackground({
    maskImage,
    backgroundClass,
    className = "h-[50rem]"
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
