import { memo } from "react";

/**
 * Gradient background component.
 *
 * @component
 *
 * @description
 * Renders a fixed full-screen background with two blurred color blobs (pink and sky)
 * at low opacity, creating a subtle ambient gradient effect.
 *
 * @returns The gradient background element
 */
function BackgroundGradientComponent() {
    return (
        <div className="fixed z-0 top-[50%] inset-0 grid grid-cols-2 opacity-10">
            <div className="blur-xl h-98 w-1/2 rounded-full bg-blob-pink opacity-25" />
            <div className="blur-xl h-64 w-full rounded-full bg-blob-violet opacity-20 -rotate-45" />
        </div>
    );
}

export const BackgroundGradient = memo(BackgroundGradientComponent);
