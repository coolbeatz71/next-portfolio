import { memo } from "react";
import { IconCheckMark } from "@/shared/config/icons";
import type { ExperienceItemProps } from "./types";

/**
 * Experience item component.
 *
 * @component
 *
 * @description
 * Renders a single bullet point in an experience timeline entry,
 * with an indigo checkmark icon followed by the item text.
 *
 * @param {ExperienceItemProps} props - Component props
 * @param {ReactNode} props.children - The text content of the experience bullet point
 *
 * @returns The experience item element
 */
function ExperienceItemComponent({ children }: ExperienceItemProps) {
    return (
        <span className="flex flex-row space-x-2 my-2">
            <IconCheckMark
                size={10}
                className="text-primary-subtle mt-2 shrink-0 text-xs"
            />
            <span>{children}</span>
        </span>
    );
}

export const ExperienceItem = memo(ExperienceItemComponent);
