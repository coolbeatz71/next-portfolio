import { type SVGProps, useId } from "react";

interface GridPatternProps extends SVGProps<SVGSVGElement> {
    width: number;
    height: number;
    x: string | number;
    y: string | number;
    squares?: Array<[number, number]>;
}

export function GridPattern({
    width,
    height,
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
            <rect
                width="100%"
                height="100%"
                strokeWidth={0}
                fill={`url(#${patternId})`}
            />
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
