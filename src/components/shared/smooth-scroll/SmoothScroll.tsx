import ReactLenis from "lenis/dist/lenis-react";

interface SmoothScrollProps {
    children: JSX.Element;
}

export default function SmoothScroll({
    children
}: SmoothScrollProps): JSX.Element {
    return (
        <ReactLenis
            root
            options={{
                smoothWheel: true
            }}
        >
            {children}
        </ReactLenis>
    );
}
