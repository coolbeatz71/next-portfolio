import { AbstractBackground } from "./Abstract.Background";

export interface GridBackgroundProps {
    className?: string;
}

export function GridBackground({ className }: GridBackgroundProps) {
    return (
        <AbstractBackground
            className={className}
            backgroundClass="bg-grid-black dark:bg-grid-white z-0"
            maskImage="radial-gradient(ellipse_at_center,transparent_10%,black)"
        />
    );
}
