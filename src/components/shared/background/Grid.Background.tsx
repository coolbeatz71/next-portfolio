import { AbstractBackground } from "./Abstract.Background";

export interface GridBackgroundProps {
    className?: string;
}

export default function GridBackground({
    className
}: GridBackgroundProps): JSX.Element {
    return (
        <AbstractBackground
            className={className}
            backgroundClass="dark:bg-grid-white/[0.010] bg-grid-black/[0.025] z-0"
            maskImage="radial-gradient(ellipse_at_center,transparent_10%,black)"
        />
    );
}
