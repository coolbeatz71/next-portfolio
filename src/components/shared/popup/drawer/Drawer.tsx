import { memo, type ReactNode } from "react";
import { useLockBodyScroll } from "react-use";
import { cn } from "@/helpers/mergeClassName";

import { PopupCloseButton } from "../Popup.Close.Button";
import { PopupFooter } from "../Popup.Footer";
import { PopupHeader } from "../Popup.Header";
import { DrawerContainer } from "./Drawer.Container";

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

const Backdrop = memo(({ isOpen }: { isOpen: boolean }) => (
    <div
        className={cn(
            "fixed inset-0 bg-black bg-opacity-70 backdrop-blur transition-all",
            isOpen
                ? "opacity-100 duration-200 ease-in-out"
                : "opacity-0 duration-200 ease-in-out hidden"
        )}
    />
));

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
                            <div className="grow z-40">{children}</div>
                            {footer && <PopupFooter>{footer}</PopupFooter>}
                        </DrawerContainer>
                    </div>
                </div>
            </div>
        </div>
    );
}
