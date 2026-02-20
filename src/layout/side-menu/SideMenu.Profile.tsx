import NextImage from "next/image";
import { GridPatternBackground } from "@/shared/ui/background/GridPattern.Background";
import { LanguageDropDown } from "@/shared/ui/dropdown/language/Language.Dropdown";
import { ThemeToggle } from "@/shared/ui/theme-toggle/ThemeToggle";

const avatarPlaceholder =
    "data:image/webp;base64,UklGRj4EAABXRUJQVlA4WAoAAAAgAAAAgQAAgQAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggUAIAALATAJ0BKoIAggA+7WqpTbo/taMwN2sz8B2JZQPFSgaYGRBimW+II8+VkPpS6sq10dauDYbTI2uOgpropYX71thKQIfHH7uRsqtMvjmh2AUMmfnqAY1378vZrO/Z512K4j8sU1MO1mqmnEwkNtS6RGmoUQBWs1K93MqKuHNxyjRwsTSgzXxbRBGnuC9Z/wCCWN/LAb7paeBSBRWMfGv6hhVEB8e1CQAA/vASE6nYiVlFmPRgBVw1EWEcPvP70yvLxNPSrPXsA82B1OVM5IJnTfxhx8F9sLVD6eyGwiIJIp2S0fK6vlTRq6Nj8b+iHX/Aqgqo1AZQ8fJVIjg6+dcjs6U1tEwPRKXkEwMwxPvahiRg+7fVztfji1TgOc1XVBpanzJcHQxdh1nju3ic/6YwcMYd+te1vrJzqDrW3G3z9+OLlOhjc9hSCw137o5yMRsLVXPKy5kLpNOJItm09G9XxsDejKEF2vT0OyMDZlR98TEk6NGVcE6M9oUM6Y25CaGS3HYmsPbML6IppdhzUNx/f8XmjBa6SLtwA3Za7AuFzdVp9lovW90Y0s9iOJAzyD/5TuOuvwboQ87mM0osQ+2uCrLOO3jso9ZcyD1WywbPmTGThG4MtWor1V4jfAWDJRcmaF1PI0e8owGI8mU/YZ2+E2zBOqpvyzbj+hnFcugzp4O/sQZclhHQ9guCPtHxSWJgl500AiA2am2lQblVUZ7ZWVxMgx0BHO3rp8u4SOBSUAfLxYoCPkN6xvCRDRjlls1lHNGh4EdG1iLE96jGeAAAAAA=";

/**
 * Side menu profile block component.
 *
 * @component
 *
 * @description
 * Renders the user avatar, name, and email inside the side menu drawer, along
 * with language and theme toggle controls.
 *
 * @returns The side menu profile element
 */
export function SideMenuProfile() {
    return (
        <div
            className={`
                w-full py-4 flex flex-col items-start justify-center 
                border border-t-0 border-x-0 border-b border-slate-300 dark:border-slate-700
            `}
        >
            <div className="border border-slate-300 dark:border-slate-700 relative flex items-center justify-between w-full gap-2 rounded-lg p-2">
                <GridPatternBackground size={20} />
                <NextImage
                    width={12}
                    height={12}
                    alt="avatar"
                    unoptimized
                    loading="lazy"
                    src="/hero/avatar.jpg"
                    blurDataURL={avatarPlaceholder}
                    className="w-12 h-12 rounded-lg shadow"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                <div className="w-full flex flex-col items-start justify-start gap-0">
                    <span className="text-sm font-semibold">
                        Mutombo Jean-vincent
                    </span>
                    <span className="text-[8pt]">
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="mailto:jeanvincent.mutombo@gmail.com"
                            className="hover:font-medium text-center w-full md:w-auto md:text-start"
                        >
                            <span className="hover:underline text-gray-500 dark:text-gray-400 flex justify-between">
                                jeanvincent.mutombo@gmail.com
                            </span>
                        </a>
                    </span>
                </div>
            </div>
            <div className="flex items-center justify-between gap-2 mt-4 w-full">
                <LanguageDropDown placement="top" />
                <ThemeToggle />
            </div>
        </div>
    );
}
