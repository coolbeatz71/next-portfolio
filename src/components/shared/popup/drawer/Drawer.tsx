import { CUSTOM_SCROLLBAR } from "@/config/ThemeStyle";
import { cn } from "@/helpers/mergeClassName";
import type { ReactNode } from "react";
import { useLockBodyScroll } from "react-use";

import { PopupCloseButton } from "../Popup.Close.Button";
import { PopupFooter } from "../Popup.Footer";
import { PopupHeader } from "../Popup.Header";

export interface DrawerProps {
    width?: string;
    header: ReactNode;
    footer?: ReactNode;
    isOpen: boolean;
    onToggle: () => void;
    children: ReactNode;
    className?: string;
    position?: "right" | "left";
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

const Backdrop = ({ isOpen }: { isOpen: boolean }) => (
    <div
        className={cn(
            "fixed inset-0 bg-black bg-opacity-70 backdrop-blur transition-all",
            isOpen
                ? "opacity-100 duration-200 ease-in-out"
                : "opacity-0 duration-200 ease-in-out hidden"
        )}
    />
);

export interface DrawerContainerProps {
    children: ReactNode;
    width: string;
    position: "right" | "left";
    isOpen: boolean;
}
const DrawerContainer = ({
    children,
    width,
    position,
    isOpen
}: DrawerContainerProps) => (
    <div
        className="pointer-events-auto relative h-full transition-transform ease-in-out duration-200"
        style={{ width, ...getTranslateStyle(isOpen, width, position) }}
        onClick={(e) => e.stopPropagation()}
        onKeyUp={(e) => e.stopPropagation()}
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

export function Drawer({
    header,
    footer,
    isOpen,
    onToggle,
    children,
    width = "50vw",
    position = "right"
}: DrawerProps) {
    useLockBodyScroll(isOpen);

    return (
        <div
            aria-modal="true"
            id={`dialog-${position}`}
            className="relative z-50 "
            aria-labelledby="drawer"
        >
            <Backdrop isOpen={isOpen} />
            <div
                className={cn(
                    "fixed inset-0 overflow-hidden",
                    isOpen ? "visible" : "invisible"
                )}
            >
                <div
                    className="absolute inset-0 overflow-hidden"
                    onClick={onToggle}
                    onKeyUp={onToggle}
                >
                    <div
                        onTouchMove={(e) => e.stopPropagation()}
                        className={cn(
                            "pointer-events-none fixed flex",
                            position === "right"
                                ? "inset-y-0 right-0"
                                : "inset-y-0 left-0"
                        )}
                    >
                        <DrawerContainer
                            width={width}
                            isOpen={isOpen}
                            position={position}
                        >
                            <PopupHeader className="py-4 sticky top-0 bg-light dark:bg-dark">
                                {header}
                            </PopupHeader>
                            <PopupCloseButton onClick={onToggle} />
                            <div className="flex-grow z-40">{children}</div>
                            {footer && <PopupFooter>{footer}</PopupFooter>}
                        </DrawerContainer>
                    </div>
                </div>
            </div>
        </div>
    );
}
