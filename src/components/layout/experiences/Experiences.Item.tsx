import { IconCheckMark } from "@/config/Icon";
import { type ReactNode, memo } from "react";
export interface ExperienceItemProps {
    children: ReactNode;
}

function ExperienceItemComponent({ children }: ExperienceItemProps) {
    return (
        <span className="flex flex-row space-x-2 my-2">
            <IconCheckMark
                size={10}
                className="text-indigo-500 mt-2 flex-shrink-0 text-xs"
            />
            <span>{children}</span>
        </span>
    );
}

export const ExperienceItem = memo(ExperienceItemComponent);
