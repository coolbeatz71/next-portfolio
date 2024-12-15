import { Fragment } from "react";
import { IoMdCloseCircle } from "react-icons/io";

export interface DrawerProps {
    title: string;
    isOpen: boolean;
    onToggle: () => void;
}
export default function Drawer({
    title,
    isOpen,
    onToggle
}: DrawerProps): JSX.Element {
    return (
        <Fragment>
            {isOpen && (
                <div
                    pointer-events-none
                    className="fixed top-0 inset-0 z-40 bg-black bg-opacity-65 backdrop-blur-sm"
                    onClick={onToggle}
                    onKeyDown={onToggle}
                />
            )}
            <div
                className={`fixed top-0 right-0 z-50 w-[50%] h-full bg-light dark:bg-dark shadow-lg
                transition-transform transform ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <div className="p-4">
                    {/* HEADER */}
                    <div className="border border-b-slate-300">
                        <h2 className="text-xl font-semibold mb-4">{title}</h2>
                    </div>

                    {/* CLOSE-BUTTON */}
                    <button
                        type="button"
                        onClick={onToggle}
                        className="absolute top-4 right-4 group text-3xl bg-foreground text-background rounded size-7 flex justify-center items-center text-slate-500  hover:text-red-500 hover:bg-red-300/10"
                    >
                        <IoMdCloseCircle />
                    </button>

                    {/* BODY */}
                    <div className="py-4"></div>
                </div>
            </div>
        </Fragment>
    );
}
