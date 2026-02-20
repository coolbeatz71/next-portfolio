import { memo } from "react";
import { cn } from "@/shared/lib/cn";
import type { DrawerBackdropProps } from "./types";

/**
 * Drawer backdrop component.
 *
 * @component
 *
 * @description
 * Renders the fixed full-screen blurred backdrop behind the drawer panel.
 * Fades in when the drawer opens and is hidden when closed.
 *
 * @param {DrawerBackdropProps} props - Component props
 * @param {boolean} props.isOpen - Whether the drawer is currently open
 *
 * @returns The backdrop overlay element
 */
function DrawerBackdropComponent({ isOpen }: DrawerBackdropProps) {
    return (
        <div
            className={cn(
                "fixed inset-0 bg-black bg-opacity-70 backdrop-blur-xl transition-all",
                isOpen
                    ? "opacity-100 duration-200 ease-in-out"
                    : "opacity-0 duration-200 ease-in-out hidden"
            )}
        />
    );
}

export const DrawerBackdrop = memo(DrawerBackdropComponent);
