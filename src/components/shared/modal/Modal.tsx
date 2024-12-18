import { createPortal } from "react-dom";
import { Fragment } from "react";
import type { ReactNode } from "react";

import { IoMdCloseCircle } from "react-icons/io";
import { useLockBodyScroll } from "react-use";

export interface ModalProps {
    title: string;
    isOpen: boolean;
    onToggle: () => void;
    children: ReactNode;
}

export default function Modal({
    title,
    isOpen,
    onToggle
}: ModalProps): JSX.Element | null {
    if (!isOpen) return null;

    useLockBodyScroll(isOpen);

    return createPortal(
        <Fragment>
            {/* Backdrop */}
            {isOpen && (
                <div
                    pointer-events-none
                    onClick={onToggle}
                    onKeyDown={onToggle}
                    className="fixed top-0 bottom-0 inset-0 z-40 bg-black bg-opacity-70 backdrop-blur"
                />
            )}

            {/* Modal Container */}
            <div
                className="fixed z-50 w-[90%] max-w-lg bg-white dark:bg-gray-800 rounded-lg shadow-lg transition-all duration-500 ease-out transform"
                style={{
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)"
                }}
            >
                <div className="p-6 relative">
                    {/* Modal Header */}
                    <div className="border-b border-gray-300 dark:border-gray-700 pb-4">
                        <h2 className="text-xl font-semibold">{title}</h2>
                    </div>

                    {/* Close Button */}
                    <button
                        type="button"
                        onClick={onToggle}
                        className="absolute top-4 right-4 text-gray-500 hover:text-red-500 transition-colors"
                    >
                        <IoMdCloseCircle size={24} />
                    </button>

                    {/* Modal Content */}
                    <div className="mt-4 text-gray-600 dark:text-gray-200">
                        {children}
                    </div>
                </div>
            </div>
        </Fragment>,
        document.body
    );
}
