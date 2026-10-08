import type { SVGProps } from "react";

const BODY =
    "M8 11h8l3-5.8a3 3 0 0 1 2.6-1.6h8.8A3 3 0 0 1 33 5.2L36 11h20a6 6 0 0 1 6 6v25a6 6 0 0 1-6 6H8a6 6 0 0 1-6-6V17a6 6 0 0 1 6-6Z";

const LENS_RING = "M32 17.5a12 12 0 1 0 0 24 12 12 0 0 0 0-24Z";

const LENS_CORE = "M32 23.5a6 6 0 1 0 0 12 6 6 0 0 0 0-12Z";

const FLASH = "M53 15.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z";

/**
 * Camera icon component.
 *
 * @component
 *
 * @description
 * Renders a camera as one even odd path: the body and viewfinder hump are filled, while
 * the lens ring and the flash are cut out of it and the lens core filled back in. Built
 * from a single shape so it scales cleanly and takes its color from the surrounding
 * text, with no gradients, strokes or ids that could clash when rendered more than once.
 *
 * @param {SVGProps<SVGSVGElement>} props - Standard SVG element props
 *
 * @returns The camera icon element
 */
export function CameraIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="none"
            focusable="false"
            viewBox="0 0 64 52"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
                d={`${BODY}${LENS_RING}${LENS_CORE}${FLASH}`}
            />
        </svg>
    );
}
