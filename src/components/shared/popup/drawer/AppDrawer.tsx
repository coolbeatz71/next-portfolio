import { cn } from "@/helpers/mergeClassName";
import type { ReactNode } from "react";
import { useLockBodyScroll } from "react-use";
import PopupCloseButton from "../Popup.Close.Button";
import PopupFooter from "../Popup.Footer";
import PopupHeader from "../Popup.Header";

const openClassNames = {
    right: "translate-x-0",
    left: "translate-x-0",
    top: "translate-y-0",
    bottom: "translate-y-0"
};

const closeClassNames = {
    right: "translate-x-full",
    left: "-translate-x-full",
    top: "-translate-y-full",
    bottom: "translate-y-full"
};

const classNames = {
    right: "inset-y-0 right-0",
    left: "inset-y-0 left-0",
    top: "inset-x-0 top-0",
    bottom: "inset-x-0 bottom-0"
};

export interface DrawerProps {
    header: ReactNode;
    footer?: ReactNode;
    isOpen: boolean;
    onToggle: () => void;
    children: ReactNode;
    className?: string;
    position?: "right" | "left";
}

const Drawer = ({
    header,
    footer,
    isOpen,
    onToggle,
    position = "right",
    children
}: DrawerProps): JSX.Element => {
    useLockBodyScroll(isOpen);

    return (
        <div
            className="relative z-50"
            aria-modal="true"
            onClick={onToggle}
            onKeyDown={onToggle}
            id={`dialog-${position}`}
            aria-labelledby="slide-over"
        >
            {/* Backdrop */}
            <div
                className={cn(
                    "fixed inset-0 bg-black bg-opacity-70 backdrop-blur transition-all",
                    isOpen ? "opacity-100 visible" : "opacity-0 invisible"
                )}
                onClick={onToggle}
                onKeyDown={onToggle}
            />

            {/* Drawer Container */}
            <div
                className={cn("fixed inset-0 overflow-hidden", {
                    hidden: !isOpen
                })}
            >
                <div className="absolute inset-0 overflow-hidden">
                    <div
                        className={cn(
                            "pointer-events-none fixed max-w-full transition-transform duration-500 ease-in-out",
                            classNames[position], // Ensuring correct positioning
                            isOpen
                                ? openClassNames[position]
                                : closeClassNames[position] // Apply correct animation
                        )}
                    >
                        <div
                            className="pointer-events-auto relative h-full w-[100%] sm:w-[90%] md:w-[80%] lg:w-[40%] bg-light dark:bg-dark z-50"
                            onClick={(event) => event.stopPropagation()}
                            onKeyDown={(event) => event.stopPropagation()}
                        >
                            <div className="flex flex-col h-full overflow-y-scroll px-4">
                                <PopupHeader>{header}</PopupHeader>
                                <PopupCloseButton onClick={onToggle} />
                                <div className="flex-grow z-40">{children}</div>
                                {footer && <PopupFooter>{footer}</PopupFooter>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Drawer;
