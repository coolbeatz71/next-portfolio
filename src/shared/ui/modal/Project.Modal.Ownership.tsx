import { memo } from "react";
import { IconCheckMark } from "@/shared/config/icons";
import type { ProjectModalOwnershipProps } from "./types";

/**
 * Project modal ownership component.
 *
 * @component
 *
 * @description
 * Renders the responsibilities owned on a project as a checked list.
 *
 * @param {ProjectModalOwnershipProps} props - Component props
 * @param {string[]} props.items - Responsibilities owned on the project
 *
 * @returns The project modal ownership element
 */
function ProjectModalOwnershipComponent({ items }: ProjectModalOwnershipProps) {
    return (
        <ul className="flex flex-col gap-6">
            {items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                    <IconCheckMark
                        aria-hidden="true"
                        className="mt-1 h-3 w-3 shrink-0 text-primary-text"
                    />
                    <span className="text-body-sm text-typography-muted">{item}</span>
                </li>
            ))}
        </ul>
    );
}

export const ProjectModalOwnership = memo(ProjectModalOwnershipComponent);
