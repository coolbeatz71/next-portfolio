import { cn } from "@/helpers/mergeClassName";

interface HeroImageBackgroundProps {
    className?: string;
}

export function HeroImageBackground({ className }: HeroImageBackgroundProps) {
    return (
        <div
            className={cn(
                "absolute m-auto flex items-center justify-center my-12",
                className
            )}
        >
            <svg
                width={720}
                height={520}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="4 1 12 9"
                className="min-w-40 min-h-40"
            >
                <defs>
                    <linearGradient
                        id="gradient"
                        gradientTransform="rotate(45)"
                    >
                        <stop offset="0%" stopColor="rgba(99, 102, 241, 0.5)" />
                        <stop
                            offset="50%"
                            stopColor="rgba(236, 72, 153, 0.3)"
                        />
                        <stop offset="100%" stopColor="rgba(99, 102, 241, 1)" />
                    </linearGradient>
                </defs>
                <path
                    d="M 14.85 1 Q 15 1 15 1.15 L 15 9.85 Q 15 10 14.85 10 L 5.15 8.85 Q 5 8.85 5 8.7 L 5 3.15 Q 5 3 5.15 3 L 14.85 1"
                    fill="url(#gradient)"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                />
            </svg>
        </div>
    );
}
