import { motion } from "framer-motion";
import { memo } from "react";

const paths = [
    "M-156 -445C-156 -445 -88 -40 376 87C840 214 908 619 908 619",
    "M-149 -453C-149 -453 -81 -48 383 79C847 206 915 611 915 611",
    "M-142 -461C-142 -461 -74 -56 390 71C854 198 922 603 922 603",
    "M-135 -469C-135 -469 -67 -64 397 63C861 190 929 595 929 595",
    "M-128 -477C-128 -477 -60 -72 404 55C868 182 936 587 936 587",
    "M-121 -485C-121 -485 -53 -80 411 47C875 174 943 579 943 579",
    "M-114 -493C-114 -493 -46 -88 418 39C882 166 950 571 950 571",
    "M-107 -501C-107 -501 -39 -96 425 31C889 158 957 563 957 563",
    "M-100 -509C-100 -509 -32 -104 432 23C896 150 964 555 964 555"
];

const gradients = paths.map(() => ({
    transition: {
        duration: Math.random() * 10 + 10,
        ease: "easeInOut",
        repeat: Number.POSITIVE_INFINITY,
        delay: Math.random() * 5
    },
    y2End: `${93 + Math.random() * 8}%`
}));

function BackgroundBeams(): JSX.Element {
    return (
        <div className="absolute h-full w-full inset-0 [mask-size:40px] [mask-repeat:no-repeat] flex items-center justify-center">
            <svg
                aria-hidden="true"
                className="z-0 h-full w-full pointer-events-none absolute"
                viewBox="0 0 696 316"
                xmlns="http://www.w3.org/2000/svg"
            >
                {paths.map((path, index) => (
                    <motion.path
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
                    {gradients.map((gradient, index) => (
                        <motion.linearGradient
                            id={`linearGradient-${index}`}
                            key={`gradient-${
                                // biome-ignore lint/suspicious/noArrayIndexKey: index need to be used as key here
                                index
                            }`}
                            initial={{ x1: "0%", x2: "0%", y1: "0%", y2: "0%" }}
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
                        </motion.linearGradient>
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

export default memo(BackgroundBeams);
