import { memo, useMemo } from "react";
import { GridPattern } from "./GridPattern";
import type { GridPatternBackgroundProps } from "./types";

/**
 * Grid pattern background component.
 *
 * @component
 *
 * @description
 * Renders a randomized SVG grid pattern overlay with a radial gradient mask.
 * Randomly highlights 10 grid squares on each render.
 *
 * @param {GridPatternBackgroundProps} props - Component props
 * @param {number} [props.size] - Grid cell size in pixels; defaults to 20
 *
 * @returns The grid pattern background element
 */
function GridPatternBackgroundComponent({ size }: GridPatternBackgroundProps) {
    const pattern = useMemo<Array<[number, number]>>(
        () =>
            Array.from(
                { length: 10 },
                () =>
                    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1] as [
                        number,
                        number
                    ]
            ),
        []
    );

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
