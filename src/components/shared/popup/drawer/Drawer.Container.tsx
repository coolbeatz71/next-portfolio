import { memo, type ReactNode } from "react";
import { CUSTOM_SCROLLBAR } from "@/config/ThemeStyle";
import { cn } from "@/helpers/mergeClassName";

export interface DrawerContainerProps {
    width: string;
    isOpen: boolean;
    children: ReactNode;
    position: "right" | "left";
}

const getTranslateStyle = (
    isOpen: boolean,
    width: string,
    position: "right" | "left"
) => ({
    transform: isOpen
        ? "translateX(0)"
        : position === "right"
          ? `translateX(${width})`
          : `translateX(-${width})`
});

function DrawerContainerComponent({
    children,
    width,
    position,
    isOpen
}: DrawerContainerProps) {
    return (
        <div
            onClick={(e) => e.stopPropagation()}
            onKeyUp={(e) => e.stopPropagation()}
            style={{ width, ...getTranslateStyle(isOpen, width, position) }}
            className="pointer-events-auto relative h-full transition-transform ease-in-out duration-200"
        >
            <div
                className={cn(
                    CUSTOM_SCROLLBAR,
                    "flex flex-col h-full overflow-y-scroll bg-light dark:bg-dark shadow-xl px-4"
                )}
            >
                {children}
            </div>
        </div>
    );
}

export const DrawerContainer = memo(DrawerContainerComponent);
