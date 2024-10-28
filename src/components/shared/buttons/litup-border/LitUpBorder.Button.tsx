import { cn } from "@/helpers/mergeClassName";

export interface LitUpBorderButtonProps {
    children: React.ReactNode;
    className?: string;
}
export default function LitUpBorderButton({
    children,
    className
}: LitUpBorderButtonProps): JSX.Element {
    return (
        <button type="button" className={cn("p-1 relative", className)}>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
            <div className="w-full py-1 bg-gray-800 dark:bg-gray-100 rounded-[6px]  relative group transition duration-200 text-white dark:text-black hover:bg-transparent">
                {children}
            </div>
        </button>
    );
}
