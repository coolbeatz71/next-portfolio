import { IconArrowUpRight } from "@/shared/config/icons";
import { BadgeSpan } from "@/shared/ui/badge/Badge.Span";
import { LitUpBorderButton } from "@/shared/ui/buttons/LitUpBorder.Button";
import type { ProjectContentProps } from "./types";
/**
 * Project card content component.
 *
 * @component
 *
 * @description
 * Renders the text side of a project card, including the name, description,
 * tech stack badges, and an optional live link button.
 *
 * @param {ProjectContentProps} props - Component props
 * @param {string} props.label - Text label for the live link button
 * @param {IProjectByStack} props.project - Project data containing name, stack, and links
 * @param {() => void} props.onClick - Handler called when the card content area is clicked
 * @param {string} props.translatedDescription - Pre-translated description string
 *
 * @returns The project card content element
 */
export function ProjectCardContent({
    label,
    project,
    onClick,
    translatedDescription
}: ProjectContentProps) {
    return (
        <div className="md:w-1/2 p-4 flex flex-col justify-between">
            <div onClick={onClick} onKeyDown={onClick}>
                <h3 className="cursor-text text-lg font-semibold mb-2 text-typography-primary duration-base">
                    {project.name}
                </h3>
                <p className="cursor-text text-typography-muted mb-4 line-clamp-4 text-body-sm">
                    {translatedDescription}
                </p>
                <div className="flex flex-wrap gap-1 mb-4">
                    {project.stack.map((tech) => (
                        <BadgeSpan key={tech} text={tech} />
                    ))}
                </div>
            </div>

            {project.hasLiveLink ? (
                <a
                    target="_blank"
                    href={project.liveLink}
                    rel="noopener noreferrer"
                    className="flex justify-end"
                >
                    <LitUpBorderButton className="w-32 p-[3.5px]">
                        <div className="flex justify-center items-center text-body-sm font-medium">
                            <IconArrowUpRight className="mr-2 h-3 w-3" />
                            {label}
                        </div>
                    </LitUpBorderButton>
                </a>
            ) : (
                <div className="invisible p-[1.1rem]" />
            )}
        </div>
    );
}
