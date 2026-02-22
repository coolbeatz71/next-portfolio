import { domAnimation, LazyMotion } from "motion/react";
import * as m from "motion/react-m";
import { memo } from "react";
import { beamGradients, beamPaths } from "./Beams.Background.Data";

/**
 * Background beams component.
 *
 * @component
 *
 * @description
 * Renders animated SVG beam paths with color-shifting linear gradients.
 * Each beam animates independently with a randomized duration and delay.
 *
 * @returns The animated beams background element
 */
function BackgroundBeamComponent() {
    return (
        <div className="absolute z-0 h-full w-full inset-0 mask-size-[40px] mask-no-repeat flex items-center justify-center">
            <svg
                aria-hidden="true"
                className="z-0 h-full w-full pointer-events-none absolute"
                viewBox="0 0 696 316"
                xmlns="http://www.w3.org/2000/svg"
            >
                {beamPaths.map((path, index) => (
                    <path
                        key={`path-${
                            // biome-ignore lint/suspicious/noArrayIndexKey: index need to be used as key here
                            index
                        }`}
                        d={path}
                        fill="none"
                        stroke={`url(#linearGradient-${index})`}
                        strokeOpacity="0.4"
                        strokeWidth="0.5"
                    />
                ))}
                <defs>
                    {beamGradients.map((gradient, index) => (
                        <LazyMotion features={domAnimation}>
                            <m.linearGradient
                                id={`linearGradient-${index}`}
                                key={`gradient-${
                                    // biome-ignore lint/suspicious/noArrayIndexKey: index need to be used as key here
                                    index
                                }`}
                                initial={{
                                    x1: "0%",
                                    x2: "0%",
                                    y1: "0%",
                                    y2: "0%"
                                }}
                                animate={{
                                    x1: ["0%", "100%"],
                                    x2: ["0%", "95%"],
                                    y1: ["0%", "100%"],
                                    y2: ["0%", gradient.y2End]
                                }}
                                transition={gradient.transition}
                            >
                                <stop stopColor="#18fccb" stopOpacity="0" />
                                <stop stopColor="#18CCFC" />
                                <stop offset="32.5%" stopColor="#6344F5" />
                                <stop
                                    offset="100%"
                                    stopColor="#ff00c8"
                                    stopOpacity="0"
                                />
                            </m.linearGradient>
                        </LazyMotion>
                    ))}
                    <radialGradient
                        id="paint0_radial_242_278"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(352 34) rotate(90) scale(555 1560.62)"
                    >
                        <stop
                            offset="0.0666667"
                            stopColor="var(--neutral-300)"
                        />
                        <stop
                            offset="0.243243"
                            stopColor="var(--neutral-300)"
                        />
                        <stop
                            offset="0.43594"
                            stopColor="white"
                            stopOpacity="0"
                        />
                    </radialGradient>
                </defs>
            </svg>
        </div>
    );
}

export const BackgroundBeams = memo(BackgroundBeamComponent);
