import { memo } from "react";
import { GridPattern } from "./GridPattern";

export interface GridPatternBackgroundProps {
    size?: number;
}

function GridPatternBackgroundComponent({ size }: GridPatternBackgroundProps) {
    const pattern: Array<[number, number]> = [
        [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
        [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
        [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
        [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
        [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
        [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
        [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
        [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
        [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
        [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1]
    ];
    return (
        <div className="pointer-events-none absolute left-0 top-0 h-full w-full mask-[linear-gradient(white,transparent)]">
            <div
                className={`absolute inset-0 z-50 bg-linear-to-r mask-[radial-gradient(farthest-side_at_top,white,transparent)]
                    dark:from-zinc-900/30 from-zinc-100/30 to-zinc-300/30 dark:to-zinc-900/30 opacity-100
                `}
            >
                <GridPattern
                    x="0"
                    y={`-${size ?? 20}`}
                    squares={pattern}
                    width={size ?? 20}
                    height={size ?? 20}
                    className="absolute inset-0 h-full w-full mix-blend-overlay fill-white/20 stroke-white/10"
                />
            </div>
        </div>
    );
}

export const GridPatternBackground = memo(GridPatternBackgroundComponent);
