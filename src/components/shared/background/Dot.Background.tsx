import { memo } from "react";
import { AbstractBackground } from "./Abstract.Background";

export interface DotBackgroundProps {
    className?: string;
}

function DotBackgroundComponent({ className }: DotBackgroundProps) {
    return (
        <AbstractBackground
            className={className}
            backgroundClass="bg-dot-black dark:bg-dot-white"
            maskImage="radial-gradient(ellipse_at_center,transparent_20%,black)"
        />
    );
}

export const DotBackground = memo(DotBackgroundComponent);
