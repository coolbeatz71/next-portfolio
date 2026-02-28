import { useId } from "react";
import type { GridPatternProps } from "./types";

/**
 * Grid pattern SVG component.
 *
 * @component
 *
 * @description
 * Renders an SVG tiled grid pattern with optional highlighted squares at specific grid coordinates.
 *
 * @param {GridPatternProps} props - Component props
 * @param {number} props.width - Width of each grid cell in pixels
 * @param {number} props.height - Height of each grid cell in pixels
 * @param {string | number} props.x - X offset of the pattern origin
 * @param {string | number} props.y - Y offset of the pattern origin
 * @param {Array<[number, number]>} [props.squares] - Grid coordinates of highlighted squares
 *
 * @returns The SVG grid pattern element
 */
export function GridPattern({
    width = 20,
    height = 20,
    x,
    y,
    squares,
    ...props
}: GridPatternProps) {
    const patternId = useId();

    return (
        <svg aria-hidden="true" {...props}>
            <defs>
                <pattern
                    id={patternId}
                    width={width}
                    height={height}
                    patternUnits="userSpaceOnUse"
                    x={x}
                    y={y}
                >
                    <path d={`M.5 ${height}V.5H${width}`} fill="none" />
                </pattern>
            </defs>
            <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${patternId})`} />
            <svg x={x} y={y} className="overflow-visible" aria-hidden="true">
                {squares?.map(([x, y]: number[], idx) => (
                    <rect
                        suppressHydrationWarning
                        strokeWidth="0"
                        key={`${x}-${y}-${
                            // biome-ignore lint/suspicious/noArrayIndexKey: need to use index as key
                            idx
                        }`}
                        width={width + 1}
                        height={height + 1}
                        x={x * width}
                        y={y * height}
                    />
                ))}
            </svg>
        </svg>
    );
}
