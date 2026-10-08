import { memo } from "react";
import { useTranslation } from "react-i18next";
import { cn } from "@/shared/lib/cn";
import { DotBackground } from "@/shared/ui/background/Dot.Background";
import { CameraIcon } from "@/shared/ui/icon/Camera.Icon";
import type { NoPreviewProps } from "./types";

const CONTAINER_CLASSNAME =
    "relative flex h-full w-full items-center justify-center overflow-hidden bg-surface-bar";

/**
 * No preview component.
 *
 * @component
 *
 * @description
 * Renders the placeholder shown for projects without screenshots: a camera icon above a
 * short label, centred over a soft gradient and the shared dot texture. Fills its frame
 * the way a cover image would, so a card keeps the same shape whether it has screenshots
 * or not. Drawn rather than loaded, so it costs no request and stays sharp at any size.
 *
 * @param {NoPreviewProps} props - Component props
 * @param {string} [props.className] - Additional class names for the container
 *
 * @returns The no preview placeholder element
 */
function NoPreviewComponent({ className }: NoPreviewProps) {
    const { t } = useTranslation();

    return (
        <div className={cn(CONTAINER_CLASSNAME, className)}>
            <DotBackground className="absolute inset-0 h-full w-full" />

            <div className="relative flex flex-col items-center gap-3 text-typography-muted">
                <CameraIcon className="h-10 w-12 md:h-12 md:w-14" />
                <p className="text-sm font-medium">{t("no_preview")}</p>
            </div>
        </div>
    );
}

export const NoPreview = memo(NoPreviewComponent);
