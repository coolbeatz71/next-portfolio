import { memo, type ReactNode } from "react";
import { CUSTOM_SCROLLBAR } from "@/shared/config/style";
import { cn } from "@/shared/lib/cn";

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

/**
 * Drawer container component.
 *
 * @component
 *
 * @description
 * Renders the sliding panel container for the drawer.
 * Applies a CSS translate transform to animate the panel in or out
 * depending on the `isOpen` state and the configured `position`.
 *
 * @param {DrawerContainerProps} props - Component props
 * @param {ReactNode} props.children - Content rendered inside the drawer panel
 * @param {string} props.width - CSS width of the panel (e.g. "50vw")
 * @param {boolean} props.isOpen - Whether the drawer is currently open
 * @param {"right" | "left"} props.position - Side the panel slides in from
 *
 * @returns The drawer container element
 */
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
