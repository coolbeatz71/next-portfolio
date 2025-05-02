import { AbstractBackground } from "./Abstract.Background";

export interface DotBackgroundProps {
    className?: string;
}
export default function DotBackground({
    className
}: DotBackgroundProps): JSX.Element {
    return (
        <AbstractBackground
            className={className}
            backgroundClass="dark:bg-dot-white/[0.05] bg-dot-black/[0.05]"
            maskImage="radial-gradient(ellipse_at_center,transparent_20%,black)"
        />
    );
}
