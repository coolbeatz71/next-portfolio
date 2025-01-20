import type { ReactNode } from "react";
import { GiCheckMark } from "react-icons/gi";
export interface ExperienceItemProps {
    children: ReactNode;
}
export default function ExperienceItem({
    children
}: ExperienceItemProps): JSX.Element {
    return (
        <span className="flex flex-row space-x-2 my-2">
            <GiCheckMark
                className="text-indigo-500 mt-2 flex-shrink-0 text-xs"
                size={10}
            />
            <span>{children}</span>
        </span>
    );
}
